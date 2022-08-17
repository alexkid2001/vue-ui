<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M20.003 3H3.997A1.005 1.005 0 0 0 3 3.998v16.005a1.005 1.005 0 0 0 .998.997h8.617v-6.96h-2.34v-2.723h2.34V9.316c0-2.325 1.417-3.592 3.502-3.592.698 0 1.395 0 2.093.105V8.25h-1.433c-1.132 0-1.35.54-1.35 1.327v1.733h2.7l-.352 2.723h-2.347V21h4.574a1.006 1.006 0 0 0 .998-.997V3.997A1.005 1.005 0 0 0 20.003 3Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconFb',
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