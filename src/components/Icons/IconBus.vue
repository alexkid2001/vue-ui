<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M18.3 7.815c.002-.103-.005-1.026-.91-1.915-.891-.875-1.79-.9-1.89-.9H8.497c-.167 0-1.045.044-1.895.911-.877.894-.902 1.79-.902 1.889v2.1H5V12h.7v4.2c0 .514.284.961.7 1.205v.895a.7.7 0 0 0 .7.7h.7a.7.7 0 0 0 .7-.7v-.7h7v.7a.7.7 0 0 0 .7.7h.7a.7.7 0 0 0 .7-.7v-.894a1.393 1.393 0 0 0 .7-1.206V12h.7V9.9h-.7ZM9.9 6.4h4.2v1.4H9.9Zm-1.75 9.8a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Zm3.15-3.5H7.1V9.2h4.2zm4.55 3.5a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1zm1.05-3.5h-4.2V9.2h4.2z" />
</svg>

</template>

<script>
	export default {
        name: 'IconBus',
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