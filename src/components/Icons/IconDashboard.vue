<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M21 1.5H3A1.502 1.502 0 0 0 1.5 3v18A1.502 1.502 0 0 0 3 22.5h18a1.502 1.502 0 0 0 1.5-1.5V3A1.502 1.502 0 0 0 21 1.5Zm0 6.75H10.5V3H21ZM9 3v5.25H3V3ZM3 21V9.75h18L21.002 21Zm5.25-1.5a3.755 3.755 0 0 1-3.75-3.75H6a2.25 2.25 0 1 0 2.25-2.25V12a3.75 3.75 0 0 1 0 7.5ZM16.5 12H15v7.5h1.5zm3 3.75H18v3.75h1.5z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconDashboard',
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