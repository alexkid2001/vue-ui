<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m6.938 6.017 1.427 1.406 2.622-2.573v14.3l-2.622-2.573-1.428 1.406L12 22.969l5.063-4.986-1.428-1.406-2.622 2.573V4.85l2.622 2.573 1.427-1.406L12 1.031Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconTravelMode',
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