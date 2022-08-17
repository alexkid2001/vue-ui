<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M21.75 22.125H2.25a.75.75 0 0 1-.665-1.096l9.75-18.75a.75.75 0 0 1 1.33 0l9.75 18.75a.749.749 0 0 1-.665 1.096zm-18.262-1.5h17.024l.001-.003-8.512-16.368h-.003L3.487 20.622Zm9.262-12h-1.5v6.75h1.5zm-.75 8.25a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconWarning',
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