<template>
  <FsLightbox
    :toggler="toggler"
    :sources="urls"
    :slide="order"
  />
</template>

<script>
import FsLightbox from "fslightbox-vue";


export default {
  props: ["order", "urls", "toggler"],
  components: {
    FsLightbox
  }
};
</script>

<style>
.fslightbox-nav {
  display: none;
}
</style>
