<template>
  <div>결과: {{ result }}</div>
</template>

<script>
import allResults from '@/database/results.json'
export default {
  data() {
    return {
      allResults,
    }
  },
  computed: {
    result() {
      return this.$route?.query?.result
    },
    validate() {
      return this.result && allResults.find((r) => r.value === this.result)
    },
  },
  mounted() {
    if (!this.validate) {
      window.alert('잘못된 접근입니다.')
      this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped></style>
