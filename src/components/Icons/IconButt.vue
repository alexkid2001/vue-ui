<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M16.052 11.732A3.728 3.728 0 0 0 17.25 9v-.75A3.755 3.755 0 0 0 13.5 4.5h-.75V2.25h-1.5V4.5H7.5v15h3.75v2.25h1.5V19.5h1.5A3.755 3.755 0 0 0 18 15.75V15a3.738 3.738 0 0 0-1.948-3.268ZM9 6h4.5a2.253 2.253 0 0 1 2.25 2.25V9a2.253 2.253 0 0 1-2.25 2.25H9V6Zm7.5 9.75A2.253 2.253 0 0 1 14.25 18H9v-5.25h5.25A2.253 2.253 0 0 1 16.5 15v.75Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconButt',
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