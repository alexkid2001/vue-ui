<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M22.058 6.945a2.624 2.624 0 0 0-1.853-1.853C18.57 4.65 12 4.65 12 4.65s-6.57 0-8.205.442a2.625 2.625 0 0 0-1.853 1.853A27.098 27.098 0 0 0 1.5 12a27.2 27.2 0 0 0 .442 5.055 2.625 2.625 0 0 0 1.853 1.852C5.43 19.35 12 19.35 12 19.35s6.57 0 8.205-.443a2.625 2.625 0 0 0 1.853-1.852A27.1 27.1 0 0 0 22.5 12a27.1 27.1 0 0 0-.442-5.055zM9.9 15.15v-6.3L15.353 12z" />
</svg>

</template>

<script>
	export default {
        name: 'IconYoutube',
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