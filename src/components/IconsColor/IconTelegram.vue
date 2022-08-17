<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12Z" fill="#40B3E0"/>
  <path d="m17.839 6.903-2.143 10.806s-.3.75-1.125.39l-4.946-3.792-1.798-.869-3.028-1.02s-.464-.164-.51-.524c-.044-.36.525-.554.525-.554L16.85 6.618s.99-.434.99.285" fill="#fff"/>
  <path d="M9.246 17.588s-.145-.014-.325-.584c-.18-.569-1.094-3.567-1.094-3.567l7.27-4.616s.42-.255.404 0c0 0 .075.045-.15.255-.225.21-5.71 5.14-5.71 5.14" fill="#D2E5F1"/>
  <path d="m11.522 15.761-1.957 1.784s-.153.116-.32.043l.375-3.313" fill="#B5CFE4"/>
</svg>

</template>

<script>
	export default {
        name: 'IconTelegram',
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