<template>
  <!-- 토론 신청 폼 -->
  <section>
    <b-form class="invite-form" @submit.prevent="submit">
      <template v-if="pending.submit">
        <div class="p-4 text-center">
          <b-spinner />
        </div>
      </template>
      <template v-else>
        <b-row class="flex-column">
          <b-col cols="12" md="8">
            <b-form-select
              class="mb-2"
              v-model="input.category"
              :readonly="lastSubmitted"
            >
              <b-form-select-option :value="null" disabled readonly selected>
                주제의 카테고리를 선택하세요
              </b-form-select-option>
              <b-form-select-option
                :value="item"
                v-for="(item, i) in categories"
                :key="i"
              >
                {{ item }}
              </b-form-select-option>
            </b-form-select>
          </b-col>
          <b-col cols="12" md="12">
            <b-form-input
              class="mb-2 p-0"
              v-model="input.subject"
              :readonly="lastSubmitted"
              placeholder="신청할 주제를 입력하세요"
            />
          </b-col>
        </b-row>
        <div>
          <template v-if="lastSubmitted">
            <span class="text-1">
              신청이 완료되었습니다! 토론에 추가될 수 있도록 검토해보도록
              하겠습니다!
            </span>
          </template>
          <template v-else>
            <b-btn
              variant="primary rounded-0 px-3 mt-3 w-100"
              :disabled="validate"
              type="submit"
              >토론 주제 신청하기
            </b-btn>
          </template>
        </div>
      </template>
    </b-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      input: {
        subject: null,
        category: null,
      },
      pending: {
        submit: false,
      },
      categories: [
        "주거",
        "일자리",
        "환경",
        "노인",
        "청년",
        "복지",
        "식문화",
        "교육",
        "예술",
        "모임",
        "인간관계",
        "세계",
        "인간",
        "심리",
        "창업",
        "취업",
      ],
      // 가장 최근 전송된 이메일
      lastSubmitted: null,
    };
  },
  computed: {
    validate() {
      const subject = this.input.subject && this.input.subject !== "";
      return !(
        // 주제 있음
        (
          subject &&
          // 직전에 신청한 것 신청 불가
          this.input.subject !== this.lastSubmitted
        )
      );
    },
  },
  methods: {
    async submit() {
      this.pending.submit = true;
      try {
        const data = await this.$firebase().applyDiscussion({
          ...this.input,
          createdAt: new Date(),
        });
        if (data) {
          window.toast("토론 주제 신청 완료!", {
            variant: "primary",
          });
          this.lastSubmitted = this.input.subject;
        }
      } catch (error) {
        // console.log("error:", error);
        window.toast("구독에 실패했습니다.", { variant: "alert" });
      }
      this.pending.submit = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.form-check {
  user-select: none;
}
.invite-form {
  padding: 1.5rem;
  background-color: $white;
  box-shadow: 0 10px 30px rgba($color: #000000, $alpha: 0.15);
}
</style>
