<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21zm0 17.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm.857-5.816v1.877h-1.688V11.25h1.594a1.783 1.783 0 0 0 0-3.564h-1.125a1.783 1.783 0 0 0-1.781 1.78v.479H8.169v-.478A3.47 3.47 0 0 1 11.638 6h1.125a3.468 3.468 0 0 1 .094 6.934z" />
</svg>

</template>

<script>
	export default {
        name: 'IconQuestionFilled',
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