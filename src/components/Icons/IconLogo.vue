<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="m17.28 22.818 6.627-20.309-.004-.006c.21-.662.08-1.424-.405-1.953-.84-.914-1.877-.413-1.879-.412-9.921 4.05-11.9 18.155-7.169 23.31a1.632 1.632 0 0 0 2.449 0c.17-.186.297-.401.382-.63zM6.7 14C8.425 5.28 15 2 15 2S4.676 5.739 1.23 6.97a1.83 1.83 0 0 0-.692.43 1.86 1.86 0 0 0 0 2.617c.079.08.164.147.253.208z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconLogo',
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