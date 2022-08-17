<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M18.75 3H7.5A1.502 1.502 0 0 0 6 4.5v10.917A2.966 2.966 0 0 0 4.5 15a3 3 0 1 0 3 3V9h11.25v6.417a2.965 2.965 0 0 0-1.5-.417 3 3 0 1 0 3 3V4.5a1.502 1.502 0 0 0-1.5-1.5ZM4.5 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm12.75 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM7.5 4.5h11.25v3H7.5v-3Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconMusic',
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