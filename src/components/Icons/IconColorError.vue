<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z" fill="#FADBDA"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="m13.48 12 2.458 2.853a.77.77 0 0 1-1.085 1.085L12 13.48l-2.853 2.46a.77.77 0 0 1-1.085-1.086L10.521 12 8.062 9.147a.77.77 0 0 1 1.085-1.086L12 10.521l2.853-2.46a.77.77 0 0 1 1.085 1.086L13.479 12Z" fill="#E01F19"/>
</svg>

</template>

<script>
	export default {
        name: 'IconColorError',
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