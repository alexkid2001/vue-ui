<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M14.25 3H7.5v8.25H5.25v1.5H7.5V15H5.25v1.5H7.5V21H9v-4.5h6.75V15H9v-2.25h5.25a4.505 4.505 0 0 0 4.5-4.5V7.5a4.505 4.505 0 0 0-4.5-4.5Zm3 5.25a3.003 3.003 0 0 1-3 3H9V4.5h5.25a3.003 3.003 0 0 1 3 3v.75Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconRouble',
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