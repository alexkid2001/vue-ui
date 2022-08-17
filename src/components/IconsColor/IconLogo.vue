<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.035 13.5c1.811-8.72 8.715-12 8.715-12S4.91 5.239 1.291 6.47a1.933 1.933 0 0 0-.726.43A1.797 1.797 0 0 0 .83 9.726L7.035 13.5Z" fill="#00C2FF"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="m17.28 22.818 6.627-20.309-.004-.006c.21-.662.08-1.424-.405-1.953-.84-.914-1.877-.413-1.879-.412-9.921 4.05-11.9 18.155-7.169 23.31a1.632 1.632 0 0 0 2.449 0c.17-.186.297-.401.382-.63Z" fill="#0DAD36"/>
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