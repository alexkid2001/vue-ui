<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 1.5C6.225 1.5 1.5 6.225 1.5 12S6.225 22.5 12 22.5 22.5 17.775 22.5 12 17.775 1.5 12 1.5ZM11.175 6h1.65v8.25h-1.65zM12 18.75c-.6 0-1.125-.525-1.125-1.125S11.4 16.5 12 16.5s1.125.525 1.125 1.125S12.6 18.75 12 18.75z" />
</svg>

</template>

<script>
	export default {
        name: 'IconInfoFilled',
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