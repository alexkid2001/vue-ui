<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 1.5A10.63 10.63 0 0 0 1.5 12 10.63 10.63 0 0 0 12 22.5 10.63 10.63 0 0 0 22.5 12 10.63 10.63 0 0 0 12 1.5Zm6 11.25h-5.25V18h-1.5v-5.25H6v-1.5h5.25V6h1.5v5.25H18Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconAddFilled',
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