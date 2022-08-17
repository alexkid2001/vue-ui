<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
  <path d="M15.75 3.375h-5.625V2.25A1.125 1.125 0 0 0 9 1.125H2.25A1.125 1.125 0 0 0 1.125 2.25V13.5a1.125 1.125 0 0 0 1.125 1.125h5.625v1.125A1.125 1.125 0 0 0 9 16.875h6.75a1.125 1.125 0 0 0 1.125-1.125V4.5a1.125 1.125 0 0 0-1.125-1.125ZM2.25 8.438h3.47L4.27 9.893l.793.793 2.812-2.812-2.813-2.813-.793.794 1.452 1.457H2.25V2.25H9V13.5H2.25V8.437ZM9 15.75v-1.125a1.125 1.125 0 0 0 1.125-1.125v-9h5.625v5.063h-3.47l1.45-1.457-.793-.793-2.812 2.812 2.813 2.813.793-.794-1.452-1.457h3.471v5.063H9Z"/>
</svg>

</template>

<script>
	export default {
        name: 'IconCompare',
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