<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M9.34 18.75A6.583 6.583 0 0 0 10.5 15a7.945 7.945 0 0 0-.135-1.5H16.5V12H9.913a30.966 30.966 0 0 0-.192-.468A7.394 7.394 0 0 1 9 8.25a3.594 3.594 0 0 1 3.75-3.75 4.592 4.592 0 0 1 3.917 1.97l1.166-.94A6.082 6.082 0 0 0 12.75 3 5.084 5.084 0 0 0 7.5 8.25 8.738 8.738 0 0 0 8.292 12H6v1.5h2.83c.118.491.175.995.17 1.5 0 1.893-1.114 3.75-2.25 3.75v1.5H18v-1.5H9.34Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconPound',
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