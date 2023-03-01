<template>
  <ul class="tag-group mt-2">
    <li class="tag-item" v-for="(tag, i) in tags" :key="i">
      <template v-if="readonly">
        <span> # {{ tag }} </span>
      </template>
      <template v-else>
        <a href="#"> # {{ tag }} </a>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: [],
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-group {
  display: inline-flex;
  flex-wrap: wrap;
  list-style: none;
  .tag-item {
    margin-right: 8px;
    a,
    span {
      font-size: 1rem;
      color: $light;
      border: 1px solid $light;
      border-radius: 8rem;
      padding: 2px 10px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
