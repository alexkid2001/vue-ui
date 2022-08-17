<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M12.844.188h-1.688v11.813h1.688zm4.64 3.156-.843 1.46a9.281 9.281 0 1 1-9.282 0l-.843-1.46a10.969 10.969 0 1 0 10.968 0z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconExit',
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