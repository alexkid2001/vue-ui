<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="m15.556 10.803-.444 1.606c2.159.597 3.555 1.744 3.555 2.924 0 1.577-2.738 3.334-6.667 3.334-3.93 0-6.667-1.757-6.667-3.334 0-1.18 1.396-2.327 3.556-2.925l-.444-1.606c-2.948.815-4.778 2.55-4.778 4.531 0 2.804 3.66 5 8.333 5 4.672 0 8.333-2.196 8.333-5 0-1.98-1.83-3.716-4.777-4.53zM12 16.167l.834-1.667v-4.285A3.33 3.33 0 0 0 15.334 7 3.337 3.337 0 0 0 12 3.667 3.337 3.337 0 0 0 8.667 7a3.33 3.33 0 0 0 2.5 3.215V14.5z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconPin',
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