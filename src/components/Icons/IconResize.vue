<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m18.75 8.25-1.058 1.057 1.936 1.943H12.75V4.372l1.943 1.936L15.75 5.25 12 1.5 8.25 5.25l1.057 1.058 1.943-1.936v6.878H4.372l1.936-1.943L5.25 8.25 1.5 12l3.75 3.75 1.058-1.057-1.936-1.943h6.878v6.878l-1.943-1.936L8.25 18.75 12 22.5l3.75-3.75-1.057-1.058-1.943 1.936V12.75h6.878l-1.936 1.943 1.058 1.057L22.5 12l-3.75-3.75Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconResize',
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