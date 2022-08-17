<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M6.75 17.25V1.5h-1.5v3.75H1.5v1.5h3.75v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5v3.75h1.5v-3.75h3.75v-1.5zm12-2.25h-1.5V6.75H9v-1.5h8.25a1.5 1.5 0 0 1 1.5 1.5Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconCrop',
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