<template>
	<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M17.25 15.386c0-3.461-2.835-3.855-5.113-4.172-2.483-.346-3.887-.645-3.887-2.782C8.25 6.637 10.13 6 11.74 6a5.065 5.065 0 0 1 4.176 1.97l1.167-.94a6.489 6.489 0 0 0-4.333-2.458V2.25h-1.5v2.266c-2.712.165-4.5 1.696-4.5 3.915 0 3.548 2.872 3.948 5.18 4.268 2.44.34 3.82.632 3.82 2.687C15.75 17.661 13.4 18 12 18c-2.572 0-3.66-.723-4.667-1.97l-1.167.94a6.33 6.33 0 0 0 5.084 2.504v2.276h1.5v-2.284c2.794-.228 4.5-1.745 4.5-4.08Z" />
</svg>

</template>

<script>
	export default {
        name: 'IconDollar',
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