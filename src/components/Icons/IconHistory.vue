<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M12 1.5a10.455 10.455 0 0 0-7.5 3.172V1.5H3v6h6V6H5.31A9 9 0 1 1 3 12H1.5A10.5 10.5 0 1 0 12 1.5zm3.442 15-4.192-4.193V5.25h1.5v6.435l3.75 3.757z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconHistory',
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