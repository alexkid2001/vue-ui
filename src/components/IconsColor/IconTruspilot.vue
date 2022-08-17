<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m12.027 18.335-5.215-1.423L4.624 24l7.403-5.665ZM9.203 9.172 12.027 0l2.823 9.172 9.15-.01-7.403 5.666L19.421 24l-7.394-5.665-4.571-3.498L.062 9.172h9.14Z" fill="#1A2633"/>
  <path d="m11.973 18.335 5.215-1.423L19.377 24l-7.403-5.665Zm2.824-9.163L11.973 0 9.15 9.172 0 9.162l7.403 5.666L4.579 24l7.394-5.665 4.571-3.498 7.394-5.665h-9.14Z" fill="#0C942E"/>
</svg>

</template>

<script>
	export default {
        name: 'IconTruspilot',
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