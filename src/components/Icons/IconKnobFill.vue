<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m21.44 9.985 1.06-1.06L15 1.5l-.986 1.061.89.89-8.619 7.29-1.287-1.286-1.06 1.045 4.242 4.258-6.68 6.68L2.558 22.5l6.683-6.681L13.5 20.06 14.545 19l-1.288-1.288 7.293-8.617.89.89Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconKnobFill',
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