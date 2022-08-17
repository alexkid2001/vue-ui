<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M21 15H3a1.504 1.504 0 0 1-1.5-1.5v-9A1.504 1.504 0 0 1 3 3h18a1.504 1.504 0 0 1 1.5 1.5v9A1.502 1.502 0 0 1 21 15Zm0-10.5H3v9h18Zm-15 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 4.5a3 3 0 1 1 0-5.999A3 3 0 0 1 12 12Zm0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm4.5 12h-21V21h21zm0-3h-21V18h21z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconMoney',
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