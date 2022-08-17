<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M20.438 23.813H18.75v-4.22a4.219 4.219 0 0 0-4.219-4.218H9.47a4.219 4.219 0 0 0-4.219 4.219v4.219H3.562v-4.22a5.906 5.906 0 0 1 5.907-5.905h5.062a5.906 5.906 0 0 1 5.906 5.906zM12 1.875a4.219 4.219 0 1 1 0 8.438 4.219 4.219 0 0 1 0-8.438Zm0-1.688A5.906 5.906 0 1 0 12 12 5.906 5.906 0 0 0 12 .187Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconClient',
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