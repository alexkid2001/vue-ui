<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 28 29">
  <path  d="M24 29h-4a2 2 0 0 1-2-2v-7h2v7h4v-9h2v-6a1 1 0 0 0-1-1h-6.42L14 19l-4.58-8H3a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h7.58L14 15l3.42-6H25a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2zM22 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconCouple',
        props: {
          size: {
            type: String,
            default: ''
          }
        },
        setup(props) {
          return {
            size: props.size + 'px'
          }
        }
        
    }
  </script><style>svg{width: v-bind(size)}</style>