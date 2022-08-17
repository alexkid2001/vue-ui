<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M20.25 2.25H3.75a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm0 1.5v3H3.75v-3h16.5Zm-7.5 4.5h7.5v5.25h-7.5V8.25Zm-1.5 5.25h-7.5V8.25h7.5v5.25ZM3.75 15h7.5v5.25h-7.5V15Zm9 5.25V15h7.5v5.25h-7.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconTableSplit',
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