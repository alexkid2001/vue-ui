<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M12.75 6h-1.125A3.367 3.367 0 0 0 8.25 9.375v.375h1.5v-.375A1.875 1.875 0 0 1 11.625 7.5h1.125a1.875 1.875 0 1 1 0 3.75h-1.5v3.375h1.5V12.75a3.375 3.375 0 0 0 0-6.75zM12 18.75a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25zM12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zM12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconQuestion',
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