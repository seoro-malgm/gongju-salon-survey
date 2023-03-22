<template>
  <div>
    <header class="d-flex align-items-center justify-content-between mb-4">
      <b-btn variant="text p-0" v-if="current > 0" @click="current -= 1">
        뒤로
      </b-btn>
      <span> {{ current + 1 }} / {{ questions.length }} </span>
    </header>
    <article v-if="current !== questions.length">
      <header class="mb-3">
        <h3>
          {{ questions[current].q }}
        </h3>
      </header>
      <section class="mt-3 mb-5">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-for="(item, i) in questions[current].a"
            :key="i"
            v-model="input[current]"
            :value="item.value"
            class="my-2"
          >
            {{ item.text }}
          </b-form-radio>
        </b-form-group>
        <template v-if="current < questions.length - 1">
          <b-btn
            variant="black w-100"
            @click="current += 1"
            :disabled="!input[current]"
            >다음으로</b-btn
          >
        </template>
        <template v-else-if="current === questions.length - 1">
          <b-btn variant="black w-100" @click="submit">다음으로</b-btn>
        </template>
      </section>
    </article>
  </div>
</template>

<script>
import questions from '@/database/questions.json'
export default {
  data() {
    return {
      questions,
      current: 0,
      input: [],
    }
  },
  computed: {
    result() {
      return this.data
    },
  },
  methods: {
    async submit() {
      const arr = this.input
      const values = {
        I: 0,
        E: 0,
        N: 0,
        S: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
      }
      // 결과 점수들 부여하기
      for (let index = 0; index < arr.length; index++) {
        const el = arr[index]
        values[el] += 1
      }
      // 결과 도출
      let result = ''
      for (const [key, value] of Object.entries(values)) {
        // 2점 이상인 것으로 도출
        if (value >= 2) {
          result += key
        }
      }
      const { firestoreAPI } = this.$firebase
      try {
        const data = await firestoreAPI.addItem('survey-results', {
          type: result,
        })
        if (data) {
          window.toast('참여완료!')
          this.$router.push(`/survey/result?type=${result}`)
        }
      } catch (error) {
        console.error('error:', error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
