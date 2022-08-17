<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z" fill="#0DAD36" fill-opacity=".2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.095 8.319a.694.694 0 0 0-.976-.1l-5.928 4.827-2.402-1.385a.693.693 0 0 0-.795.072.698.698 0 0 0-.08.98l1.51 1.783-.003.003 1.175 1.383.045.049a.693.693 0 0 0 .98-.017l6.434-6.674a.696.696 0 0 0 .04-.921Z" fill="#0DAD36"/>
</svg>

</template>

<script>
	export default {
        name: 'IconColorSuccess',
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