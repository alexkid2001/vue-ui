<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M8.625 1.875a4.219 4.219 0 1 1 0 8.438 4.219 4.219 0 0 1 0-8.438Zm0-1.688a5.906 5.906 0 1 0 0 11.813 5.906 5.906 0 0 0 0-11.813Zm6.75 0v1.688a4.219 4.219 0 0 1 0 8.438V12a5.906 5.906 0 0 0 0-11.813Zm1.688 23.625h-1.688v-4.218a4.224 4.224 0 0 0-4.219-4.219H6.094a4.224 4.224 0 0 0-4.219 4.219v4.219H.187v-4.22a5.913 5.913 0 0 1 5.907-5.905h5.062a5.913 5.913 0 0 1 5.906 5.906zm6.75 0h-1.688v-4.218a4.224 4.224 0 0 0-4.219-4.219v-1.688a5.913 5.913 0 0 1 5.907 5.907z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconClients',
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