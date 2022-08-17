<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="m19.5 10.5-1.058-1.057-5.692 5.684V1.5h-1.5v13.627L5.558 9.444 4.5 10.5 12 18Zm0 7.5v3h-15v-3H3v3a1.5 1.5 0 0 0 1.5 1.5h15A1.5 1.5 0 0 0 21 21v-3z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconDownload',
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
  </script><style>svg{width: v-bind(size)}</style>