<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path d="M13.807 6 16.5 3.308 15.443 2.25 12.75 4.942 10.057 2.25 9 3.308 11.693 6 9 8.693l1.057 1.057 2.693-2.692 2.693 2.692L16.5 8.693ZM3.736 2.103A.75.75 0 0 0 3 1.5H0V3h2.385l2.88 14.397A.75.75 0 0 0 6 18h13.5v-1.5H6.615l-.6-3H19.5a.75.75 0 0 0 .732-.587l1.701-7.663h-1.535l-1.5 6.75H5.716ZM18 22.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-10.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
</svg>

</template>

<script>
	export default {
        name: 'IconShoppingCartClear',
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