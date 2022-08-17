<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.353 1.065a.72.72 0 0 1 .401.777L14.488 9.13h4.806c.272 0 .52.16.637.409a.727.727 0 0 1-.088.76L9.961 22.733a.698.698 0 0 1-.845.2.72.72 0 0 1-.398-.783l1.255-6.802H4.706a.705.705 0 0 1-.638-.41.727.727 0 0 1 .09-.76L14.513 1.263a.698.698 0 0 1 .84-.199Z" fill="#FF4E4E"/>
</svg>

</template>

<script>
	export default {
        name: 'IconColorFlashFilled',
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