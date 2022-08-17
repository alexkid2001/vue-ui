<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M14.667 11.553V6.184L12 3.5 9.333 6.184v1.79H4V20.5h16v-8.947ZM7.556 18.71H5.778v-1.789h1.778zm0-3.578H5.778v-1.79h1.778zm0-3.58H5.778V9.764h1.778zm5.333 7.158H11.11v-1.789h1.778zm0-3.578H11.11v-1.79h1.778zm0-3.58H11.11V9.764h1.778zm0-3.578H11.11v-1.79h1.778zm5.333 10.736h-1.778v-1.789h1.778zm0-3.578h-1.778v-1.79h1.778z" />
</svg>

</template>

<script>
	export default {
        name: 'IconCity',
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