<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19 15v-1.5l-5.895-3.75V5.625c0-.622-.493-1.125-1.105-1.125s-1.105.503-1.105 1.125V9.75L5 13.5V15l5.895-1.875v4.125L9.42 18.375V19.5l2.58-.75 2.579.75v-1.125l-1.474-1.125v-4.125z" />
</svg>

</template>

<script>
	export default {
        name: 'IconPlane',
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