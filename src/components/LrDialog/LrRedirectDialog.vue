<template>
  <lr-dialog
    v-bind="$attrs"
    @ok="closeWithResult('ok', id)"
    @cancel="closeWithResult('cancel', false)">
    <lr-field label="ID авто" v-model="id" type="number"></lr-field>
  </lr-dialog>
</template>

<script lang="ts">
import LrDialog from './LrDialog.vue';
import { closeMethods } from '../../utils/dialog-promise';
import LrField from '../LrField/LrField.vue';
import { defineComponent, ref } from "vue";

export default defineComponent({
  inheritAttrs: false,
  name: "LrRedirectDialog",
  components: {LrDialog, LrField},
  setup() {
    const id = ref();
    return {
      ...closeMethods(),
      id
    }
  }
})
</script>