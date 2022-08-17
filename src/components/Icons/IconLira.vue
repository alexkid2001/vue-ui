<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M17.25 14.25a4.504 4.504 0 0 1-4.5 4.5h-3v-5.17l6.16-2.33v-1.5l-6.16 2.33V9.83l6.16-2.33V6L9.75 8.33V3.75h-1.5v5.149L6 9.75v1.5l2.25-.851v2.25L6 13.5V15l2.25-.851v6.101h4.5a6.007 6.007 0 0 0 6-6h-1.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconLira',
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