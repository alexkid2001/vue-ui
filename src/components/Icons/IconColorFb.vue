<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M10.02 23.88C4.32 22.86 0 17.94 0 12 0 5.4 5.4 0 12 0s12 5.4 12 12c0 5.94-4.32 10.86-10.02 11.88l-.66-.54h-2.64l-.66.54Z" fill="url(#a)"/>
  <path d="m16.68 15.36.54-3.36h-3.18V9.66c0-.96.36-1.68 1.8-1.68h1.56V4.92c-.84-.12-1.8-.24-2.64-.24-2.76 0-4.68 1.68-4.68 4.68V12h-3v3.36h3v8.46a11.048 11.048 0 0 0 3.96 0v-8.46h2.64Z" fill="#fff"/>
  <defs>
    <linearGradient id="a" x1="12.001" y1="23.165" x2="12.001" y2="-.004" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0062E0"/>
      <stop offset="1" stop-color="#19AFFF"/>
    </linearGradient>
  </defs>
</svg>

</template>

<script>
	export default {
        name: 'IconColorFb',
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