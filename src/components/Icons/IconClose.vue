<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M21 4.575 19.425 3 12 10.425 4.575 3 3 4.575 10.425 12 3 19.425 4.575 21 12 13.575 19.425 21 21 19.425 13.575 12 21 4.575Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconClose',
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