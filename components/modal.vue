<template>
  <b-modal :id="id" :title="title">
    <slot> </slot>
    <slot name="modal-footer"> </slot>
    <slot name="modal-cancel">취소</slot>
    <slot name="modal-ok"> 확인</slot>
  </b-modal>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "modal",
    },
    title: {
      type: String,
      default: "알림",
    },
  },
};
</script>

<style lang="scss" scoped></style>
