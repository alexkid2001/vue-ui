<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m12 7.725 7.5 7.5-1.05 1.05L12 9.825l-6.45 6.45-1.05-1.05Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconChevronUp',
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