<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path  d="M21.281 22.125V3.562h-6.75v18.563h-3.375V10.312h-6.75v11.813H1.875V.187H.187v21.938a1.687 1.687 0 0 0 1.688 1.688h21.938v-1.688Zm-11.812 0H6.094V12h3.375Zm10.125 0h-3.375V5.25h3.375z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconStatistic',
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