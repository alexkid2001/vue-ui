<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path d="M14.92.4a8.36 8.36 0 0 0-8.96 2.593l3.955 3.319L14.92.399Z" fill="#1A73E8"/>
    <path d="M5.96 2.993A8.372 8.372 0 0 0 4 8.363c0 1.578.308 2.848.834 3.99l5.08-6.04-3.955-3.32Z" fill="#EA4335"/>
    <path d="M12.381 5.17a3.205 3.205 0 0 1 2.45 5.279s2.52-3.011 4.988-5.932A8.357 8.357 0 0 0 14.92.399L9.914 6.313a3.254 3.254 0 0 1 2.467-1.143Z" fill="#4285F4"/>
    <path d="M12.38 11.574a3.205 3.205 0 0 1-3.21-3.211c0-.78.272-1.506.743-2.05l-5.079 6.04c.87 1.924 2.322 3.484 3.81 5.425l6.185-7.347a3.185 3.185 0 0 1-2.449 1.143Z" fill="#FBBC04"/>
    <path d="M14.722 19.81c2.793-4.372 6.04-6.35 6.04-11.43a8.389 8.389 0 0 0-.943-3.863L8.645 17.777a33.36 33.36 0 0 1 1.433 2.05c1.705 2.631 1.233 4.191 2.322 4.191 1.088 0 .616-1.578 2.322-4.209Z" fill="#34A853"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" transform="translate(4)" d="M0 0h16.744v24H0z"/>
    </clipPath>
  </defs>
</svg>

</template>

<script>
	export default {
        name: 'IconColorGoogleMaps',
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