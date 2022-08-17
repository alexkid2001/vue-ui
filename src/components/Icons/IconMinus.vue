<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M18 11.25H6v1.5h12v-1.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconMinus',
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