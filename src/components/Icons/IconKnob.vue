<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M21.442 9.982 22.5 8.925 15 1.5l-.982 1.065.884.885-8.617 7.29-1.29-1.283L3.937 10.5l4.245 4.26L1.5 21.435 2.558 22.5l6.682-6.682 4.26 4.245 1.043-1.066-1.283-1.282 7.29-8.617.892.884Zm-9.247 6.668L7.35 11.805 15.967 4.5 19.5 8.033l-7.305 8.617Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconKnob',
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