<template>
  <article
    class="ariticle-item mb-5"
    @click="
      $router.push({
        path: `/archive/${item.id}`,
      })
    "
    :spread="spread"
  >
    <header class="article-header">
      <figure class="bg-img ratio-70" v-if="item?.thumbnail">
        <img :src="item.thumbnail" :alt="`${item.title} 썸네일`" />
      </figure>
    </header>
    <div class="article-info">
      <section class="article-body">
        <span class="text-category mb-1" v-if="item?.category">
          {{ item.category }}
        </span>
        <h6
          class="title text-truncate line-2 text-1 text-md-2"
          v-if="item?.title"
        >
          {{ item.title }}
        </h6>
      </section>
      <footer class="article-footer">
        <time>
          {{ createdDate }}
        </time>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    spread: {
      type: String,
      defualt: null,
    },
  },
  computed: {
    createdDate() {
      const { seconds } = this.item?.createdAt;
      return seconds
        ? new Date(seconds * 1000).toLocaleDateString()
        : "2023-01-01";
    },
  },
};
</script>

<style lang="scss" scoped>
.ariticle-item {
  border-radius: 24px;

  .article-header {
    transition: all 0.2s;
    box-shadow: 0px 4px 10px rgba($color: #000000, $alpha: 0.1);
    border-radius: 24px;
    overflow: hidden;
  }
  .article-body {
    padding: 1rem 1rem 0;
    transition: all 0.2s;
    .category {
      font-size: 13px;
      color: $light;
      filter: grayscale(100%);
      text-transform: capitalize;
    }
    h6.title {
      margin-top: 2px;
      margin-bottom: 6px;
    }
  }
  .article-footer {
    padding: 0 1rem 1rem;
    border-radius: 0;
    time {
      font-size: 13px;
      color: $light;
    }
  }

  &:hover {
    cursor: pointer;
    .article-header {
      transform: translateY(-10px);
      box-shadow: 0px 10px 30px rgba($color: #000000, $alpha: 0.3);
    }
    .article-body {
      h6.title {
        // color: $primary;
      }
    }
  }

  // &[spread="lg"] {
  //   @media (min-width: 992px) {
  //     display: flex;
  //     flex-direction: row;
  //     .article-header {
  //       flex: 20% 0 0;
  //       max-width: 20%;
  //     }
  //   }
  // }
}
</style>
