<template>
  <section class="p-5 bg-primary">
    <b-row align-v="center" class="pb-3 pt-lg-3">
      <b-col cols="12" lg="7">
        <h3 class="mb-3 text-2 text-md-5">뉴스레터를 구독하세요</h3>
        <p class="text-1 text-md-1 lh-180">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          consequatur minima rerum animi omnis atque illo dolores doloribus
        </p>
      </b-col>
      <b-col cols="12" lg="4" offset-lg="1">
        <b-form class="invite-form" @submit.prevent="submit">
          <template v-if="pending.submit">
            <div class="p-4 text-center">
              <b-spinner />
            </div>
          </template>
          <template v-else>
            <h6 class="text-1 text-md-2 mb-3">구독 신청</h6>
            <b-form-input
              class="mb-2 p-0 border-primary bg-white"
              v-model="input.email"
              :readonly="lastSubmitted"
              placeholder="구독받을 이메일을 입력해주세요"
            />

            <div class="mt-2">
              <template v-if="lastSubmitted">
                <span class="text-1">
                  구독해주셔서 감사합니다! 메일을 확인해주세요.
                </span>
              </template>
              <template v-else>
                <div class="d-flex align-items-center mb-1">
                  <input
                    class="form-check"
                    type="checkbox"
                    v-model="input.agreePrivacy"
                    readonly
                    @click="$bvModal.show('confirm-newletter')"
                  />
                  <b-btn
                    variant="text text-1 p-0 pl-1"
                    @click="$bvModal.show('confirm-newletter')"
                  >
                    <strong class="text-secondary">(필수)</strong>
                    개인정보 수집에 동의합니다 .
                  </b-btn>
                </div>
                <div class="d-flex align-items-center mb-1">
                  <input
                    class="form-check"
                    type="checkbox"
                    v-model="input.agreeAd"
                    readonly
                    @click="$bvModal.show('confirm-newletter')"
                  />

                  <b-btn
                    variant="text text-1 p-0 pl-1"
                    @click="$bvModal.show('confirm-agree-ad')"
                  >
                    <strong class="text-secondary">(필수)</strong>
                    광고성 정보 수신에 동의합니다.
                  </b-btn>
                </div>
                <b-btn
                  variant="outline-primary rounded-0 px-3 mt-3"
                  :disabled="validate"
                  type="submit"
                  >구독하기
                </b-btn>
              </template>
            </div>
          </template>
        </b-form>
      </b-col>
    </b-row>
    <b-modal
      id="confirm-newletter"
      title="개인정보 수집 동의(필수)"
      @cancel="input.agreePrivacy = false"
      @ok="input.agreePrivacy = true"
    >
      <template #default>
        뉴스레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다. 수집된
        정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을
        해지할 경우 즉시 파기됩니다.
      </template>
      <template #modal-cancel>취소</template>
      <template #modal-ok>동의 </template>
    </b-modal>
    <b-modal
      id="confirm-agree-ad"
      title="광고성 메일 받기 동의(필수)"
      @cancel="input.agreeAd = false"
      @ok="input.agreeAd = true"
    >
      <template #default>
        제휴 콘텐츠, 프로모션, 이벤트 정보 등의 광고성 정보를 수신합니다.
      </template>
      <template #modal-cancel>취소</template>
      <template #modal-ok>동의 </template>
    </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      input: {
        email: null,
        agreePrivacy: false,
        agreeAd: false,
      },
      pending: {
        submit: false,
      },
      // 가장 최근 전송된 이메일
      lastSubmitted: null,
    };
  },
  computed: {
    validate() {
      const regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
      const email = this.input.email && this.input.email !== "";
      const agree = this.input.agreePrivacy && this.input.agreeAd;
      return !(
        // 이메일 있음
        (
          email &&
          // 이메일에 해당함
          regex.test(this.input.email) &&
          // 개인정보 동의함
          agree &&
          // 직전에 신청한 것 신청 불가
          this.input.email !== this.lastSubmitted
        )
      );
    },
  },
  methods: {
    async submit() {
      this.pending.submit = true;
      try {
        const data = await this.$firebase().addSubscribers({
          email: this.input.email,
          state: {
            on: true,
            updateDate: new Date(),
          },
        });
        if (data) {
          window.toast("구독 신청 완료! 메일을 확인해주세요.", {
            variant: "primary",
          });
          this.lastSubmitted = this.input.email;
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
