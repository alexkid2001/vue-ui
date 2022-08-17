<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m7.725 12 7.5-7.5 1.05 1.05L9.825 12l6.45 6.45-1.05 1.05z" />
</svg>

</template>

<script>
	export default {
        name: 'IconChevronLeft',
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