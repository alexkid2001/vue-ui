<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M22.037 22.124a.75.75 0 0 1-.66-.375 11.393 11.393 0 0 0-9.75-5.625v4.5a.75.75 0 0 1-.465.69.75.75 0 0 1-.817-.157l-9-9a.75.75 0 0 1 0-1.065l9-9a.75.75 0 0 1 .817-.158.75.75 0 0 1 .465.69v4.583a12.892 12.892 0 0 1 11.25 12.75 12.272 12.272 0 0 1-.097 1.5.751.751 0 0 1-.593.645zm-10.785-7.5a13.215 13.215 0 0 1 10.125 4.5 11.483 11.483 0 0 0-10.567-10.5.75.75 0 0 1-.683-.75V4.432l-7.192 7.192 7.192 7.193v-3.443a.75.75 0 0 1 .75-.75h.405z" />
</svg>

</template>

<script>
	export default {
        name: 'IconReply',
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