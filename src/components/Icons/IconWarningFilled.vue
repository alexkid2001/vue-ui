<template>
	<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
  <path d="M21.75 22.5H2.25a.75.75 0 0 1-.665-1.096l9.75-18.75a.75.75 0 0 1 1.33 0l9.75 18.75a.749.749 0 0 1-.665 1.096ZM3.488 21h17.024l.002-.003L12.002 4.63h-.004l-8.51 16.367Zm8.513-16.371h-.003L3.486 20.997l.002.003h17.024l.001-.003zM11.156 9h1.688v6.75h-1.688ZM12 19.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z" />
</svg>

</template>

<script>
	export default {
        name: 'IconWarningFilled',
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