<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m12.894 14.222-2.292-2.444-4.472 2.444L11.05 9l2.347 2.444L17.814 9zM12 3c-4.97 0-9 3.73-9 8.333 0 2.623 1.309 4.962 3.354 6.49V21l3.064-1.682a9.672 9.672 0 0 0 2.582.349c4.97 0 9-3.731 9-8.334C21 6.731 16.97 3 12 3Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconFbMessenger',
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