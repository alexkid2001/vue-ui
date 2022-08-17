<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19.05 6.75c.6-.6.6-1.5 0-2.1l-2.7-2.7c-.6-.6-1.5-.6-2.1 0L3 13.2V18h4.8ZM15.3 3 18 5.7l-2.25 2.25-2.7-2.7ZM4.5 16.5v-2.7L12 6.3 14.7 9l-7.5 7.5Zm18 3h-21V21h21z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconEdit',
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