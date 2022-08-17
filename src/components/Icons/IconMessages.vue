<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M13.5 11.25H6v1.5h7.5zm4.5-4.5H6v1.5h12zm-4.695 15L12 21l3-5.25h4.5a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-15A1.5 1.5 0 0 0 3 5.25v9a1.5 1.5 0 0 0 1.5 1.5h6.75v1.5H4.5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3.63z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconMessages',
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