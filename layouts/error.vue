<template>
  <div id="error">
    <div
      class="min-vh-100 d-flex flex-column align-items-center justify-content-center"
    >
      <div class="mb-3 text-center">
        <h1 class="mb-1 text-primary">ERROR {{ error?.statusCode }}</h1>
        <span class="text-gray">{{ error?.message }}</span>
      </div>

      <!-- <img
        src="~/assets/on-error.png"
        alt="에러 이미지"
        class="on-error-image mb-5"
      /> -->
      <b-btn variant="primary" pill to="/">메인으로 이동</b-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.on-error-image {
  width: 240px;
  height: auto;
}
</style>
