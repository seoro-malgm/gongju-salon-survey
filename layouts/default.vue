<template>
  <div id="app">
    <global-nav />
    <!-- 내용 -->
    <main id="main">
      <b-container class="main-container">
        <Nuxt class="flex-grow-1 position-relative" />
      </b-container>
    </main>
    <!-- footer -->
    <global-footer />
  </div>
</template>

<script>
export default {
  name: 'default',
  mounted() {
    window.toast = this.toast
  },
  methods: {
    async toast(
      msg,
      opt = {
        id: 'toast',
        variant: 'primary',
        textVariant: 'white',
      }
    ) {
      const h = this.$createElement

      const bodyNode = h('div', {
        class: 'px-2',
        domProps: {
          innerHTML: `
          <div class="text-${opt.textVariant}">
            <span class="text-1 fw-500">${msg}</span>
          </div>
          `,
        },
      })

      this.$bvToast.toast(bodyNode, {
        solid: true,
        noCloseButton: true,
        headerClass: `bg-${opt.variant} p-0 border-0 text-white fw-600`,
        bodyClass: `bg-${opt.variant} py-3 border-0 rounded text-white fw-600`,
        toastClass: 'border-0  pt-0',
        toaster: 'b-toaster-bottom-center',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
#app {
  background-color: #ededed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  #main {
    flex-grow: 1;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    background-color: white;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    .main-container {
      flex-grow: 1;
      height: 100%;
      display: flex;
      align-items: stretch;
      flex-direction: column;
    }
  }
}
</style>
