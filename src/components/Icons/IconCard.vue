<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24.4">
  <path  d="M12 15.2H4.5v1.5H12Zm9-10.5H3a1.5 1.5 0 0 0-1.5 1.5v12A1.5 1.5 0 0 0 3 19.7h18a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 21 4.7Zm0 1.5v2.25H3V6.2zm-18 12V9.95h18v8.25Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconCard',
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