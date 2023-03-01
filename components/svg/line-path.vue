<template>
  <svg
    id="layer"
    data-name="layer 1"
    xmlns="http://www.w3.org/2000/svg"
    ref="svg"
  >
    <path
      class="path"
      ref="path"
      d="m3.04,29.34C18.09,37.31,67.43,1.82,82.44,7.02c11.69,4.06,4.22,17.53,1.25,22.12l.57.28c15.04,7.98,64.39-27.52,79.4-22.31,11.58,4.02,4.41,17.2,1.39,21.91l.54.31c15.04,7.98,64.39-27.52,79.4-22.31,11.69,4.06,4.22,17.53,1.25,22.12l.57.28c15.04,7.98,64.39-27.52,79.4-22.31,11.43,3.97,4.6,16.85,1.52,21.71l.94.51c15.04,7.98,64.39-27.52,79.4-22.31,11.69,4.06,4.22,17.53,1.25,22.12l.57.28c15.04,7.98,64.39-27.52,79.4-22.31,11.58,4.02,4.41,17.2,1.39,21.91l.54.31c15.04,7.98,64.39-27.52,79.4-22.31,11.69,4.06,4.22,17.53,1.25,22.12l.57.28c15.04,7.98,64.39-27.52,79.4-22.31,14.17,4.92.2,23.67.2,23.67"
    />
  </svg>
</template>

<script>
export default {
  mounted() {
    var svg = this.$refs.svg;
    // Get the bounds of the SVG content
    var bbox = svg.getBBox();
    // Update the width and height using the size of the contents
    svg.setAttribute("width", bbox.x + bbox.width + bbox.x);
    svg.setAttribute("height", bbox.y + bbox.height + bbox.y);
    const path = this.$refs.path.getTotalLength();
  },
};
</script>

<style lang="scss" scoped>
#layer {
  position: absolute;
  bottom: 0;
  left: -12px;
  z-index: -1;
  .path {
    fill: none;
    stroke: #00ffe6;
    // stroke-miterlimit: 10;
    stroke-width: 13px;
    stroke-dasharray: 887;
    stroke-dashoffset: 0;
    animation: dash 4s linear alternate;
    animation-iteration-count: infinite;
    animation-timing-function: $ease-in-out;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 887;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
