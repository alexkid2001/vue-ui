<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M15.281 4H8.716c-.168 0-1.05.052-1.878 1.08C6.023 6.094 6 7.09 6 7.2V16c0 .424.158.831.44 1.131.28.3.662.469 1.06.469h.75L6.75 20h1.765l.5-.8h6l.508.8h1.727l-1.5-2.4h.75c.398 0 .78-.169 1.06-.469.282-.3.44-.707.44-1.131V7.2c0-.15-.024-1.147-.847-2.132C16.286 4.03 15.382 4 15.281 4ZM10.5 5.6h3v1.6h-3zM8.625 16a1.09 1.09 0 0 1-.796-.352A1.242 1.242 0 0 1 7.5 14.8c0-.318.119-.624.33-.848a1.09 1.09 0 0 1 .796-.352c.298 0 .584.127.795.352.211.225.33.53.33.849 0 .318-.119.624-.33.849a1.091 1.091 0 0 1-.796.351zm6.75 0a1.09 1.09 0 0 1-.796-.352 1.242 1.242 0 0 1-.329-.849c0-.318.119-.624.33-.848a1.09 1.09 0 0 1 .796-.352c.298 0 .584.127.795.352.211.225.33.53.33.849 0 .318-.119.624-.33.849a1.091 1.091 0 0 1-.796.351zm1.125-4h-9V8.8h9z" />
</svg>

</template>

<script>
	export default {
        name: 'IconTrain',
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