<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M18 7.05 16.95 6 12 10.95 7.05 6 6 7.05 10.95 12 6 16.95 7.05 18 12 13.05 16.95 18 18 16.95 13.05 12 18 7.05Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconCloseSmall',
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