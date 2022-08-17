<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M2 17h20v2H2ZM2 5h20v2H2Zm0 6h20v2H2Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconMenu',
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