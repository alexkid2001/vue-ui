<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="m12 4.89 2.07 4.185.346.75.75.113 4.62.667L16.5 13.83l-.563.547.135.75.788 4.598-4.133-2.168L12 17.25l-.698.367-4.132 2.138.75-4.597.135-.75-.555-.578-3.315-3.262 4.62-.668.75-.113.345-.75L12 4.89Zm0-3.39L8.589 8.415.961 9.518l5.52 5.384L5.176 22.5 12 18.915l6.825 3.585-1.305-7.598 5.52-5.377-7.628-1.11L12.001 1.5Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconStar',
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