<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M8.25 13.5c-1.8 0-3.3 1.275-3.676 3H1.5V18h3.074c.375 1.725 1.876 3 3.676 3 1.8 0 3.3-1.275 3.676-3H22.5v-1.5H11.926c-.375-1.725-1.876-3-3.676-3Zm0 1.5c1.275 0 2.25.975 2.25 2.25s-.975 2.25-2.25 2.25S6 18.525 6 17.25 6.975 15 8.25 15Zm7.5-12c-1.8 0-3.3 1.275-3.676 3H1.5v1.5h10.574c.375 1.725 1.876 3 3.676 3 1.8 0 3.3-1.275 3.676-3H22.5V6h-3.074c-.375-1.725-1.876-3-3.676-3Zm0 1.5c1.275 0 2.25.975 2.25 2.25S17.025 9 15.75 9s-2.25-.975-2.25-2.25.975-2.25 2.25-2.25Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconFilter',
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