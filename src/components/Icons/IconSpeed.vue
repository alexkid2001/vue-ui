<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 6a8.93 8.93 0 0 1 4.563 1.256l1.09-1.09A10.483 10.483 0 0 0 1.5 15H3a9.01 9.01 0 0 1 9-9Zm9 1.06L19.94 6l-6.426 6.425A2.965 2.965 0 0 0 12 12a3 3 0 1 0 3 3 2.965 2.965 0 0 0-.425-1.514Zm-9 9.44a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM22.5 15a10.39 10.39 0 0 0-1.672-5.647l-1.084 1.084A8.919 8.919 0 0 1 21 15z" />
</svg>

</template>

<script>
	export default {
        name: 'IconSpeed',
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