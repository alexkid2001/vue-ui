<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M17.25 22.125H6.75V11.023L9.032 7.6l.634-4.437a1.507 1.507 0 0 1 1.484-1.288h.1a2.253 2.253 0 0 1 2.25 2.25v4.5h6a3.003 3.003 0 0 1 3 3v5.25a5.256 5.256 0 0 1-5.25 5.25zm-12-10.5H1.5v10.5h3.75z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconLikeFilled',
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