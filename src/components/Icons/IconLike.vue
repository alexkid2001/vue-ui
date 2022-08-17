<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19.5 8.625H15v-4.5a2.253 2.253 0 0 0-2.25-2.25h-1.6a1.507 1.507 0 0 0-1.485 1.288L9.031 7.6 6.35 11.625H1.5v10.5h15.75a5.256 5.256 0 0 0 5.25-5.25v-5.25a3.003 3.003 0 0 0-3-3Zm-13.5 12H3v-7.5h3zm15-3.75a3.754 3.754 0 0 1-3.75 3.75H7.5v-8.023l2.968-4.452.682-4.775h1.6a.75.75 0 0 1 .75.75v6h6a1.502 1.502 0 0 1 1.5 1.5z" />
</svg>

</template>

<script>
	export default {
        name: 'IconLike',
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