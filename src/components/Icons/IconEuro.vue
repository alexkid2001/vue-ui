<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12.75 19.5c-2.712 0-4.75-1.723-5.584-4.5h7.084v-1.5h-7.4a11.458 11.458 0 0 1-.1-1.5c0-.248.008-.498.02-.75h7.48v-1.5H6.928c.456-2.736 1.93-5.25 5.822-5.25 2.89 0 4.149 1.235 5.346 3.367l1.308-.734C18.199 4.986 16.558 3 12.75 3c-4.766 0-7.5 3.28-7.5 9 0 5.3 3.084 9 7.5 9 3.808 0 5.449-1.986 6.654-4.133l-1.308-.734C16.9 18.265 15.64 19.5 12.75 19.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconEuro',
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