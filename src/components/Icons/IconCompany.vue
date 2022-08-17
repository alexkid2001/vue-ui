<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12.75 9h-1.5v1.5h1.5zm0 3h-1.5v1.5h1.5zm3 1.5h-1.5v-6h-4.5v6h-1.5v-6A1.502 1.502 0 0 1 9.75 6h4.5a1.502 1.502 0 0 1 1.5 1.5Zm-3.75 9-6.327-7.461a26.199 26.199 0 0 1-.26-.34A8.167 8.167 0 0 1 3.75 9.75a8.25 8.25 0 1 1 16.5 0 8.163 8.163 0 0 1-1.661 4.948l-.001.002s-.225.296-.259.335zm-5.39-8.704s.174.231.214.281L12 20.181l5.183-6.113.209-.274A6.676 6.676 0 0 0 18.75 9.75a6.75 6.75 0 0 0-13.5 0 6.68 6.68 0 0 0 1.36 4.046z" />
</svg>

</template>

<script>
	export default {
        name: 'IconCompany',
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