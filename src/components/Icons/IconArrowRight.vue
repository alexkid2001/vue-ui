<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m13.5 4.5-1.072 1.045 5.684 5.705H3v1.5h15.113l-5.685 5.68L13.5 19.5 21 12Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconArrowRight',
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