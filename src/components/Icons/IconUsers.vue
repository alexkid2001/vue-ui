<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M6 3a2.25 2.25 0 1 1 0 4.5A2.25 2.25 0 0 1 6 3Zm0-1.5A3.75 3.75 0 1 0 6 9a3.75 3.75 0 0 0 0-7.5Zm0 9H4.5a3.755 3.755 0 0 0-3.75 3.75v3h1.5v-3A2.253 2.253 0 0 1 4.5 12H6Zm6-.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm0-1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.25 14.25h-1.5V21a2.253 2.253 0 0 0-2.25-2.25h-3A2.253 2.253 0 0 0 8.25 21v1.5h-1.5V21a3.755 3.755 0 0 1 3.75-3.75h3A3.755 3.755 0 0 1 17.25 21zM18 3a2.25 2.25 0 1 1 0 4.5A2.25 2.25 0 0 1 18 3Zm0-1.5A3.75 3.75 0 1 0 18 9a3.75 3.75 0 0 0 0-7.5Zm1.5 9H18V12h1.5a2.253 2.253 0 0 1 2.25 2.25v3h1.5v-3a3.755 3.755 0 0 0-3.75-3.75Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconUsers',
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