<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M18.75 3.75H16.5V3A1.504 1.504 0 0 0 15 1.5H9A1.504 1.504 0 0 0 7.5 3v.75H5.25a1.504 1.504 0 0 0-1.5 1.5V21a1.504 1.504 0 0 0 1.5 1.5h7.5V21h-7.5V5.25H7.5V7.5h9V5.25h2.25V12h1.5V5.25a1.504 1.504 0 0 0-1.5-1.5ZM15 6H9V3h6zm8.25 12h-3v-3h-1.5v3h-3v1.5h3v3h1.5v-3h3z" />
</svg>

</template>

<script>
	export default {
        name: 'IconTaskAdd',
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