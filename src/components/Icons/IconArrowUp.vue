<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m12 3-7.5 7.5 1.058 1.057 5.692-5.685V21h1.5V5.872l5.692 5.685L19.5 10.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconArrowUp',
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