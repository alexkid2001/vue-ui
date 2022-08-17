<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M11.9 2.345a.5.5 0 0 1 .95 0l2.107 6.483a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.182.559l2.107 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.515 4.007a.5.5 0 0 1-.77-.56l2.107-6.482a.5.5 0 0 0-.181-.56l-5.515-4.006a.5.5 0 0 1 .294-.904h6.816a.5.5 0 0 0 .476-.346l2.106-6.483Z" fill="#FF8A01"/>
</svg>

</template>

<script>
	export default {
        name: 'IconColorStar',
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