<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m9.75 18.862-7.457-7.457L4.06 9.638l5.69 5.688L19.94 5.138l1.767 1.767z" />
</svg>

</template>

<script>
	export default {
        name: 'IconCheckedCheckbox',
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