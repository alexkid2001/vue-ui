<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M21.75 3.75a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V3.75Zm-1.5 0v3H3.75v-3h16.5Zm0 16.5H3.75v-3h16.5v3Zm0-4.5H3.75v-3h16.5v3Zm0-4.5H3.75v-3h16.5v3Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconTable',
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