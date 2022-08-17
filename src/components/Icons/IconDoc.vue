<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M17.063 12H6.938v1.688h10.125zm0 5.063H6.938v1.687h10.125zm3.121-10.716L14.278.44a.766.766 0 0 0-.59-.254H5.25c-.928 0-1.688.76-1.688 1.688v20.25c0 .928.76 1.688 1.688 1.688h13.5c.928 0 1.688-.76 1.688-1.688V6.937a.766.766 0 0 0-.254-.59zm-6.497-4.135 4.726 4.725h-4.725zm5.063 19.913H5.25V1.875H12v5.063c0 .928.76 1.687 1.688 1.687h5.062Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconDoc',
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