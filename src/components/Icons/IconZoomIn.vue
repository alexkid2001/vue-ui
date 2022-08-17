<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path d="M16.086 15A8.142 8.142 0 0 0 18 9.75 8.25 8.25 0 1 0 9.75 18 8.142 8.142 0 0 0 15 16.086l5.69 5.664 1.06-1.06ZM9.75 16.5a6.75 6.75 0 1 1 6.75-6.75 6.758 6.758 0 0 1-6.75 6.75ZM13.5 9h-3V6H9v3H6v1.5h3v3h1.5v-3h3z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconZoomIn',
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