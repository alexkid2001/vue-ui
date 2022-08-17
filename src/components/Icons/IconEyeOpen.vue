<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.5a3 3 0 1 1 0-5.999A3 3 0 0 1 12 15Zm11.205-3.255A12.517 12.517 0 0 0 12 3.75 12.518 12.518 0 0 0 .795 11.745a.75.75 0 0 0 0 .51A12.517 12.517 0 0 0 12 20.25a12.517 12.517 0 0 0 11.205-7.995.75.75 0 0 0 0-.51zM12 18.75c-3.975 0-8.175-2.947-9.698-6.75C3.825 8.197 8.025 5.25 12 5.25c3.975 0 8.175 2.947 9.698 6.75-1.523 3.803-5.723 6.75-9.698 6.75Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconEyeOpen',
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