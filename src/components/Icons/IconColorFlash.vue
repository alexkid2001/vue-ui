<template>
	<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.062.068a.75.75 0 0 1 .427.812L14.144 8.5h5.106a.75.75 0 0 1 .584 1.221l-10.5 13a.75.75 0 0 1-1.321-.61L9.346 15H3.75a.75.75 0 0 1-.581-1.224l11-13.5a.75.75 0 0 1 .893-.208ZM5.33 13.5h4.921a.75.75 0 0 1 .737.888l-.952 5.077L17.68 10h-4.43a.75.75 0 0 1-.739-.88l1-5.661L5.328 13.5Z" fill="#FF8A01"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
  </defs>
</svg>

</template>

<script>
	export default {
        name: 'IconColorFlash',
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