<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M21.857 11.626c0 4.068-2.065 7.933-5.53 10.336A14.018 14.018 0 0 1 12 24a14.014 14.014 0 0 1-4.328-2.038c-3.464-2.403-5.53-6.268-5.53-10.336V4.127C7.889 4.016 10.996 1.85 12 1c1 .849 4.112 3.012 9.857 3.127v7.499Z" fill="#00C2FF"/>
  <path d="M14.732 7.854a.966.966 0 0 1 1.366 1.366l-6.83 6.83a.965.965 0 1 1-1.366-1.366l6.83-6.83Z" fill="#fff"/>
  <path d="M16.098 14.684a.966.966 0 0 1-1.366 1.366l-6.83-6.83a.966.966 0 1 1 1.366-1.366l6.83 6.83Z" fill="#fff"/>
</svg>

</template>

<script>
	export default {
        name: 'IconFreeCancelation',
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