<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 1.5A10.5 10.5 0 1 0 22.5 12 10.512 10.512 0 0 0 12 1.5ZM7.5 19.782V18.75a2.253 2.253 0 0 1 2.25-2.25h4.5a2.253 2.253 0 0 1 2.25 2.25v1.032a8.924 8.924 0 0 1-9 0Zm10.494-1.088A3.751 3.751 0 0 0 14.25 15h-4.5a3.751 3.751 0 0 0-3.744 3.694 9 9 0 1 1 11.988 0zM12 6a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 6Zm0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconUser',
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