<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M15.375 17.062h4.404A9.282 9.282 0 0 1 2.72 12H1.03a10.969 10.969 0 0 0 19.406 7.02v3.105h1.688v-6.75h-6.75zM8.625 6.938H4.221A9.281 9.281 0 0 1 21.28 12h1.688A10.969 10.969 0 0 0 3.562 4.98V1.875H1.875v6.75h6.75z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconResetDemo',
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