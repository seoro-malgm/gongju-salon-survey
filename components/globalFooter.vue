<template>
  <footer id="gnf">
    <b-container> footer </b-container>
  </footer>
</template>

<script>
import { copyText } from '~/plugins/commons.js'
export default {
  data() {
    return {
      contacts: [
        {
          icon: 'mail-1',
          url: '/',
        },
        {
          icon: 'instagram',
          url: '/',
        },
        {
          icon: 'comment-empty',
          url: '/',
        },
      ],
    }
  },
  methods: {
    copyText,
  },
}
</script>

<style lang="scss" scoped>
#gnf {
}
</style>
