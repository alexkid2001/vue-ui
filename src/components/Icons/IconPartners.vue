<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19.5 22.5h-3A1.5 1.5 0 0 1 15 21v-5.25h1.5V21h3v-6.75H21v-4.5a.75.75 0 0 0-.75-.75h-4.815L12 15 8.565 9H3.75a.75.75 0 0 0-.75.75v4.5h1.5V21h3v-5.25H9V21a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 3 21v-5.25a1.5 1.5 0 0 1-1.5-1.5v-4.5A2.25 2.25 0 0 1 3.75 7.5h5.685L12 12l2.565-4.5h5.685a2.25 2.25 0 0 1 2.25 2.25v4.5a1.5 1.5 0 0 1-1.5 1.5V21a1.5 1.5 0 0 1-1.5 1.5ZM18 6.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM6 6.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconPartners',
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