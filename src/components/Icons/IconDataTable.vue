<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 14H6v1.5h6V14Zm5-3h-7v1.5h7V11Zm1 6h-7v1.5h7V17Z" />
  <path d="M20.25 2.25H3.75a1.502 1.502 0 0 0-1.5 1.5v16.5a1.502 1.502 0 0 0 1.5 1.5h16.5a1.502 1.502 0 0 0 1.5-1.5V3.75a1.502 1.502 0 0 0-1.5-1.5Zm0 1.5v3H3.75v-3h16.5Zm-16.5 16.5v-12h16.5v12H3.75Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconDataTable',
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