<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2Zm-1.1 6h2.2v11h-2.2V8ZM16 25c-.8 0-1.5-.7-1.5-1.5S15.2 22 16 22s1.5.7 1.5 1.5S16.8 25 16 25Z" fill="#FF8A01"/>
</svg>

</template>

<script>
	export default {
        name: 'IconColorWarning',
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