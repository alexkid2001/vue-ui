<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20.25 16.875">
  <path  d="M0 1.688h1.688V0H0ZM0 6.75h1.688V5.062H0Zm0 5.063h1.688v-1.688H0Zm0 5.062h1.688v-1.688H0ZM5.063 1.687H20.25V0H5.062Zm0 5.063H20.25V5.062H5.062Zm0 5.063H20.25v-1.688H5.062Zm0 5.062H20.25v-1.688H5.062Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconTableOfContent',
        props: {
          size: {
            type: String,
            default: ''
          }
        },
        setup(props) {
          return {
            size: props.size + 'px'
          }
        }
        
    }
  </script><style>svg{width: v-bind(size)}</style>