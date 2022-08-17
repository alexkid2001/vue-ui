<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M17.91 17.112h-.394v-1.576h.394a3.549 3.549 0 1 0 .284-7.093h-.678l-.079-.646a5.516 5.516 0 0 0-10.937 0l-.016.646h-.678a3.549 3.549 0 1 0 .284 7.093h.394v1.576H6.09A5.122 5.122 0 0 1 5.065 6.978a7.092 7.092 0 0 1 13.87 0 5.122 5.122 0 0 1-1.025 10.134zM8.06 13.96l1.111 1.11 2.041-2.032v9.59h1.576v-9.59l2.041 2.033 1.111-1.111L12 10.02z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconUpload',
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