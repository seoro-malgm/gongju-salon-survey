<template>
  <div class="marquee" :class="`bg-${variant}`">
    <div class="marquee-container" ref="loop-container">
      <ul class="all-item" ref="list">
        <li class="item" v-for="(item, i) in list" :key="i">
          <span>
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    variant: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = [...this.items, ...this.items];
    this.setLoop();
  },
  methods: {
    setLoop() {
      document.addEventListener("DOMContentLoaded", (_) => {
        const items = [...this.list, ...this.list];
        const containerElem = this.$refs["loop-container"];
        const leftSideOfContainer = containerElem.getBoundingClientRect().left;
        const listElem = this.$refs["list"];
        let currentLeftValue = 0;
        window.setInterval(animationLoop, 50);

        function animationLoop() {
          const firstListItem = listElem.querySelector(".item");

          let rightSideOfFirstItem =
            firstListItem.getBoundingClientRect().right;

          if (rightSideOfFirstItem == leftSideOfContainer) {
            currentLeftValue = -1;
            listElem.appendChild(firstListItem);
          }

          listElem.style.marginLeft = `${currentLeftValue}px`;
          currentLeftValue--;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.marquee {
  padding: 6px 0;
  position: relative;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  height: 88px;
  @media (max-width: $breakpoint-md) {
    height: 60px;
  }
  user-select: none;
  .marquee-container {
    position: absolute;
    white-space: nowrap;
    top: 50%;
    transform: translateY(-50%);
  }
  .all-item {
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    .item {
      margin: 0 12px;
      flex-grow: 0;
      flex-shrink: 0;
      span {
        white-space: nowrap;
        font-size: 48px;
        @media (max-width: $breakpoint-md) {
          font-size: 24px;
        }
        font-weight: 700;
      }
    }
  }
}
</style>
