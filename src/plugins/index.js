const fs = require('fs');
const { optimize: optimizeSvg } = require('svgo');


export function svgToComponent (options = {}) {
  // const load = async (options = {}) => {

  const { svgoConfig, svgo } = options;
  const path = 'src/assets/images/Icons/';
  const dir = fs.opendirSync(path);
  let dirent;

  const VueCompiler = async (svg, name) => {
    let optimisedSVG = svg

    if (svgo !== false) {
      optimisedSVG = optimizeSvg(svg, svgoConfig).data
    }

    optimisedSVG = optimisedSVG.replace(/></g, '>\n<');
    optimisedSVG = optimisedSVG.replace(/width=".*?"/g, ':width="size"')
    optimisedSVG = optimisedSVG.replace(/height=".*?"/g, ':height="size" viewBox="0 0 21 21"')
    optimisedSVG = optimisedSVG.replace(/style=".*?"/g, '')

    let code = `<template>\n${optimisedSVG}\n</template>`;
    code += `\n\n<script>export default {
      name: '${name}',
      props: {
        size: {
          type: String,
          default: ''
        },
        color: {
          type: String,
          default: ''
        }
      }
  }
</script>`

    return code
  }

  return {
    name: 'svgToComponent',
    enforce: 'pre',

    async load() {
      while ((dirent = dir.readSync()) !== null) {
        if (dirent.name.includes('.svg')) {
          const fileName = dirent.name;
          let name = dirent.name.slice(0, -4);
          let index;
          let arr = name.split('');
          arr.splice(0, 1, arr[0].toUpperCase())
          while (arr.indexOf('_') >= 0) {
            index = arr.indexOf('_')
            if (index < name.length - 1) {
              // const char = arr[index + 1].toUpperCase();
              arr.splice(index, 2, arr[index + 1].toUpperCase())
            }
          }
          name = 'Icon' + arr.join('');

          let svg = fs.readFileSync(`${path}${fileName}`, 'utf-8' )

          const code = await VueCompiler(svg, name);

          fs.writeFile(`src/components/Icons/${name}.vue`, code, (err) => {
            if (err) throw err;
          });
        }
      }
      dir.closeSync()
    }
  }


}

// load().then(() => {
// });