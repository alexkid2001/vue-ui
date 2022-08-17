<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19.5 3.75h-3v-1.5H15v1.5H9v-1.5H7.5v1.5h-3c-.825 0-1.5.675-1.5 1.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5zm0 16.5h-15V9.75h15zm0-12h-15v-3h3v1.5H9v-1.5h6v1.5h1.5v-1.5h3z" />
</svg>

</template>

<script>
	export default {
        name: 'IconCalendar',
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