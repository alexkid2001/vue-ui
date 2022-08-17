import fs from 'fs'
import { loadConfig, optimize as optimizeSvg } from 'svgo'
import minimist from 'minimist'
const argv = minimist(process.argv.slice(2))

const inPath = argv.inPath + (argv.inPath.split(-1) === '/' ? '' : '/')
const outPath = argv.outPath + (argv.outPath.split(-1) === '/' ? '' : '/')
const inPathColor =
  argv.inPathColor + (argv.inPathColor.split(-1) === '/' ? '' : '/')
const outPathColor =
  argv.outPathColor + (argv.outPathColor.split(-1) === '/' ? '' : '/')
// const leaveColor = argv.leaveColor;

;(function createComponents() {
  const create = async (inPath, outPath, leaveColor = false) => {
    const dir = fs.opendirSync(inPath)
    let dirent
    let cnt = 0

    const VueCompiler = async (svg, name) => {
      let optimisedSVG = svg

      const svgoConfig = await loadConfig()

      optimisedSVG = optimizeSvg(svg, svgoConfig).data

      // optimisedSVG = optimisedSVG.replace(/></g, '>\n\t<');
      // optimisedSVG = optimisedSVG.replace(/width=".*?"/g, ':width="size"')
      // optimisedSVG = optimisedSVG.replace(/height=".*?"/g, ':height="size"')
      if (!leaveColor) {
        optimisedSVG = optimisedSVG.replace(/style=".*?"/g, '')
        optimisedSVG = optimisedSVG.replace(/fill=".*?"/g, '')
      }

      let code = `<template>\n\t${optimisedSVG}\n</template>`
      code += `\n\n<script>\n\texport default {
        name: '${name}',
        props: {
          size: {
            type: String,
            default: ''
          }
        },
        setup(props) {
          return {
            size: props.size ? props.size + 'px' : ''
          }
        }
        
    }
  </script><style>svg{width: v-bind(size)}</style>`

      return code
    }

    while ((dirent = dir.readSync()) !== null) {
      if (dirent.name.includes('.svg')) {
        const fileName = dirent.name
        let name = dirent.name.slice(0, -4)
        let index
        let arr = name.split('')
        arr.splice(0, 1, arr[0].toUpperCase())
        while (arr.indexOf('_') >= 0) {
          index = arr.indexOf('_')
          if (index < name.length - 1) {
            // const char = arr[index + 1].toUpperCase();
            arr.splice(index, 2, arr[index + 1].toUpperCase())
          }
        }
        name = 'Icon' + `${leaveColor ? 'Color' : ''}` + arr.join('')

        let svg = fs.readFileSync(`${inPath}${fileName}`, 'utf-8')

        const code = await VueCompiler(svg, name)

        fs.writeFile(`${outPath}${name}.vue`, code, err => {
          if (err) throw err
        })
        cnt += 1
      }
    }
    dir.closeSync()
    console.log(`created ${cnt} icons`)
  }

  create(inPath, outPath).then(() => {
    create(inPathColor, outPath, true).then(() => {
      console.log('All icons created')
    })
  })
})()
