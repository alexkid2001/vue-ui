<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m22.138 21.078-5.664-5.664a8.264 8.264 0 1 0-1.06 1.06l5.664 5.664zm-18.75-10.94a6.75 6.75 0 1 1 6.75 6.75 6.758 6.758 0 0 1-6.75-6.75z" />
</svg>

</template>

<script>
	export default {
        name: 'IconSearch',
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