<template>
  <article class="discuss">
    <template v-if="items?.length">
      <ul class="discuss-item-list">
        <li v-for="(item, i) in items" :key="i" class="discuss-item">
          <b-row>
            <b-col cols="8" md="4" lg="2" class="mb-2 mb-md-0">
              <div
                class="bg-img ratio-100 discuss-item-thumbnail"
                :style="{
                  backgroundImage: `url('http://skg1891.cafe24.com/wp-content/uploads/2013/11/dummy-image-square.jpg')`,
                }"
              />
            </b-col>
            <b-col cols="12" md="8" lg="10">
              <div class="pt-lg-3">
                <h4>{{ item.title }}</h4>
                <p class="text-1 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos aliquam officiis a aperiam nihil voluptate velit
                  amet perferendis quae odit? Dolorum eligendi dolor commodi
                  facere pariatur, eaque vitae dolores fugiat optio harum totam
                  quis natus aut nemo exercitationem cupiditate excepturi
                  repellat asperiores nihil recusandae, consequuntur sit soluta.
                  Quaerat, possimus deserunt!
                </p>
                <group-tags :tags="item.tags" :readonly="true" />
              </div>
              <!-- <nuxt-link :to="`${discussId}/${item.id}`">
                {{ item.title }}
              </nuxt-link> -->
            </b-col>
          </b-row>
        </li>
      </ul>
    </template>
    <template v-else>
      <div class="p-3 text-center text-light border-bottom">
        게시글이 없습니다
      </div>
    </template>
  </article>
</template>

<script>
export default {
  props: {
    discussId: {
      type: String,
      default: "discuss",
    },
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.discuss {
  .discuss-title {
    padding: 4px;
    background-color: $black;
    font-size: 18px;
    font-weight: 700;
    color: $white;
  }
  .discuss-item-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    .discuss-item {
      padding: 0.5rem 0.5rem 1.5rem;
      margin-bottom: 1.8rem;
      border-bottom: 1px solid $light;
      .discuss-item-thumbnail {
        position: relative;
        &:after {
          position: absolute;
          z-index: 2;
          content: "";
          display: block;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          background-color: $primary;
          opacity: 0;
          transition: opacity 0.2s;
        }
      }
      &:hover {
        cursor: pointer;
        .discuss-item-thumbnail {
          &:after {
            opacity: 0.6;
          }
        }
      }
    }
  }
}
</style>
