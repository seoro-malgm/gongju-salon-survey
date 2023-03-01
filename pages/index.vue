<template>
  <div class="">
    <header class="py-4 mb-5 text-center">
      <h2>설문조사~</h2>
      <b-row align-h="center">
        <b-col cols="11" md="8">
          <p class="mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            officiis asperiores harum quidem quo cum soluta dicta fugit, impedit
            inventore nostrum omnis et consequuntur laborum amet odio.
            Explicabo, inventore consequuntur.
          </p>
        </b-col>
      </b-row>
    </header>
    <section class="position-absolute w-100" :style="{ bottom: 0 }">
      <b-btn variant="black w-100 py-3" pill to="/survey">설문조사 시작!</b-btn>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  components: {},
  async asyncData({ app, $firebase }) {
    return {}
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
