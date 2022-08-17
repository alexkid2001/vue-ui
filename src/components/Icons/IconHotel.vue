<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M8.367 12.344a2.102 2.102 0 0 1-1.553-.636 2.114 2.114 0 0 1-.63-1.547c0-.607.21-1.129.63-1.564.421-.436.939-.653 1.553-.653s1.131.217 1.552.653c.42.435.631.957.631 1.564 0 .607-.21 1.123-.631 1.547a2.1 2.1 0 0 1-1.552.636zm8.733-4.4c.796 0 1.478.286 2.047.86.569.572.853 1.271.853 2.096v6.6h-1.433v-2.2h-13.1v2.2H4v-11h1.467v6.6h5.8V7.944Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconHotel',
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