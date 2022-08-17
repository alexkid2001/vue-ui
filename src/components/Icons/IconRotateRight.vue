<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M10.5 21a9 9 0 1 1 9-9v4.65l2.7-2.7L23.25 15l-4.5 4.5-4.5-4.5 1.05-1.05 2.7 2.7V12a7.5 7.5 0 1 0-7.5 7.5V21Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconRotateRight',
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