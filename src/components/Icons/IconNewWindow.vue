<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M14.25 2.25v1.5h4.94l-6.44 6.44 1.06 1.06 6.44-6.44v4.94h1.5v-7.5zm4.5 19.5h-15a1.502 1.502 0 0 1-1.5-1.5v-15a1.502 1.502 0 0 1 1.5-1.5h7.5v1.5h-7.5v15h15v-7.5h1.5v7.5a1.502 1.502 0 0 1-1.5 1.5z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconNewWindow',
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