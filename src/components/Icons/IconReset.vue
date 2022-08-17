<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M13.875 21a9 9 0 1 0-9-9v4.65l-2.7-2.7L1.125 15l4.5 4.5 4.5-4.5-1.05-1.05-2.7 2.7V12a7.5 7.5 0 1 1 7.5 7.5z" />
</svg>

</template>

<script>
	export default {
        name: 'IconReset',
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