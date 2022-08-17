<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 12 14">
  <path  d="M8 0H4v1h4ZM0 2v1h1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3h1V2Zm2 11V3h8v10Zm6-8H7v6h1ZM5 5H4v6h1z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconTrash',
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