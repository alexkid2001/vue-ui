<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M18.013 11.148h-5.25v-5.25h-1.5v5.25h-5.25v1.5h5.25v5.25h1.5v-5.25h5.25zm-6-8.25c4.95 0 9 4.05 9 9s-4.05 9-9 9-9-4.05-9-9 4.05-9 9-9zm0-1.5c-5.775 0-10.5 4.725-10.5 10.5s4.725 10.5 10.5 10.5 10.5-4.725 10.5-10.5-4.725-10.5-10.5-10.5z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconAdd',
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