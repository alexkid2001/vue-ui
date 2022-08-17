<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M7.5 21H3a1.502 1.502 0 0 1-1.5-1.5V15A1.502 1.502 0 0 1 3 13.5h4.5A1.502 1.502 0 0 1 9 15v4.5A1.502 1.502 0 0 1 7.5 21ZM3 15v4.5h4.5V15Zm4.5-4.5H3A1.502 1.502 0 0 1 1.5 9V4.5A1.502 1.502 0 0 1 3 3h4.5A1.502 1.502 0 0 1 9 4.5V9a1.502 1.502 0 0 1-1.5 1.5ZM3 4.5V9h4.5V4.5Zm19.5 12H12V18h10.5Zm0-10.5H12v1.5h10.5z" />
</svg>

</template>

<script>
	export default {
        name: 'IconList',
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