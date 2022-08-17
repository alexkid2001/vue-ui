<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M9.75 18.155 3 11.405l1.06-1.06 5.69 5.688L19.94 5.845 21 6.905Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconChecked',
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