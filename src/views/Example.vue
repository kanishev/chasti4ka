<template>
  <main>
    <section class="section-example">
      <div class="container example-container">
        <h2 style="display: none">section title</h2>
        <div class="example">
          <div
            class="example-item"
            v-for="(image, idx) in imageCount"
            :key="idx"
          >
            <img
              @click="(toggler = !toggler), (imageOrder = idx + 1)"
              :src="
                require(`../images/portfolio/${$route.params.id}-${
                  idx + 1
                }.jpg`)
              "
              alt="exampleImage"
              class="example-item__image"
              width="100%"
            />
          </div>
        </div>

        <Lightbox
          :order="imageOrder"
          :urls="pageUrls"
          :toggler="toggler"
        ></Lightbox>
        <Slider :pageList="filteredList"></Slider>
      </div>
    </section>
  </main>
</template>

<script>
import Slider from "../components/Slider";
import Lightbox from "../components/FsLightBox";

export default {
  data() {
    return {
      toggler: false,
      imageCount: 0,
      pageName: "",
      pagesList: [
        "paporotnik",
        "kerkemeli",
        "swag",
        "orduk",
        "altai",
        "visota",
      ],
      nextPage: null,
      prevPage: null,
      pageUrls: [],
      imageOrder: 0,
    };
  },
  created() {
    this.pageName = this.$route.params.id;
    this.getImageCount();
    this.getNextPrevPages();
    this.createUrls();
  },
  beforeUpdate() {
    this.pageName = this.$route.params.id;
    this.getImageCount();
    this.getNextPrevPages();
    this.createUrls();
  },
  computed: {
    filteredList() {
      return this.pagesList.filter((p) => p !== this.pageName);
    },
  },
  methods: {
    createUrls() {
      for (let i = 0; i < this.imageCount; i++) {
        this.pageUrls[i] = require(`../images/portfolio/${this.pageName}-${
          i + 1
        }.jpg`);
      }
    },
    goNext(p) {
      this.$router.push(`/portfolio/${p}`);
    },
    getImageCount() {
      const illustrations = require.context("../images/portfolio", false);

      this.imageCount = illustrations
        .keys()
        .filter(
          (n) => n.includes(this.pageName) && !n.includes("cover")
        ).length;
    },
    getNextPrevPages() {
      let idx = this.pagesList.indexOf(this.pageName);

      switch (idx) {
        case 0:
          this.prevPage = this.pagesList[this.pagesList.length - 1];
          this.nextPage = this.pagesList[idx + 1];
          break;
        case this.pagesList.length - 1:
          this.nextPage = this.pagesList[0];
          this.prevPage = this.pagesList[idx - 1];
          break;
        default:
          this.nextPage = this.pagesList[idx + 1];
          this.prevPage = this.pagesList[idx - 1];
      }
    },
  },
  components: {
    Lightbox,
    Slider,
  },
};
</script>
