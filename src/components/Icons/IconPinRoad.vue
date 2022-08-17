<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 22 28">
  <path  d="M12 10h-2v2h2zm0 4h-2v2h2zm4 2h-2V8H8v8H6V8a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2zm-5 12-8.435-9.949a35.076 35.076 0 0 1-.349-.451A10.889 10.889 0 0 1 0 11a11 11 0 1 1 22 0c.004 2.382-.774 4.7-2.215 6.597l-.001.003s-.3.394-.345.447zM3.813 16.395s.233.308.286.374L11 24.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 20 11a9 9 0 0 0-18 0 8.905 8.905 0 0 0 1.813 5.395z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconPinRoad',
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