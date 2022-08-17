<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25zM12.75 6h-1.5v8.25h1.5zM12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zM12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconInfo',
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