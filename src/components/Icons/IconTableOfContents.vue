<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M3 6h1.5V4.5H3Zm0 4.5h1.5V9H3ZM3 15h1.5v-1.5H3Zm0 4.5h1.5V18H3ZM7.5 6H21V4.5H7.5Zm0 4.5H21V9H7.5Zm0 4.5H21v-1.5H7.5Zm0 4.5H21V18H7.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconTableOfContents',
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