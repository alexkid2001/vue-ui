<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21 16.5">
  <path  d="M7.5 0a.749.749 0 0 0-.623.338L5.596 2.25H.75a.751.751 0 0 0-.531.219A.751.751 0 0 0 0 3v12.75a.751.751 0 0 0 .75.75h19.5a.751.751 0 0 0 .75-.75V3a.751.751 0 0 0-.75-.75h-4.846L14.123.338A.755.755 0 0 0 13.5 0h-6zm2.781 4.506A4.5 4.5 0 0 1 14.242 6.5a4.5 4.5 0 0 1-3.742 7 4.5 4.5 0 0 1-.219-8.994zM10.5 6a2.998 2.998 0 0 0-2.941 3.586 2.996 2.996 0 0 0 2.355 2.357A3.004 3.004 0 0 0 13.5 9a3 3 0 0 0-3-3z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconPhoto',
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