<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12.75 11.25V6h-1.5v5.25H6v1.5h5.25V18h1.5v-5.25H18v-1.5z" />
</svg>

</template>

<script>
	export default {
        name: 'IconPlus',
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