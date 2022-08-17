<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19.888 4.593 3.375 10.898c-.5.2-.5 1 0 1.1L7.58 13.2l1.6 4.904c.201.5.801.7 1.202.3l2.201-2.202 4.304 3.103c.5.4 1.3.1 1.4-.5L20.99 5.493c.1-.6-.5-1.201-1.1-.9zm-2.101 2.902-7.706 6.706c0 .1-.1.2-.1.3l-.3 2.602c0 .1-.1.1-.2 0L8.278 13.2c-.1-.2 0-.4.2-.5l9.007-5.505c.3-.1.5.2.3.3z" />
</svg>

</template>

<script>
	export default {
        name: 'IconTelegram',
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