<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="m12 23.813-7.117-8.395c-.04-.048-.294-.38-.294-.38a9.187 9.187 0 0 1-1.87-5.57 9.281 9.281 0 1 1 18.562 0 9.184 9.184 0 0 1-1.869 5.567v.002s-.254.333-.292.378zM5.936 14.02s.196.26.241.316L12 21.203l5.83-6.876.236-.309a7.51 7.51 0 0 0 1.528-4.55 7.594 7.594 0 0 0-15.188 0 7.514 7.514 0 0 0 1.53 4.553zM12 13.687a4.218 4.218 0 1 1 0-8.436 4.218 4.218 0 0 1 0 8.436zm0-6.75a2.532 2.532 0 1 0 0 5.064 2.532 2.532 0 0 0 0-5.063Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconGeography',
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