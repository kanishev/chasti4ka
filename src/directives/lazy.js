export default {
  inserted: (el) => {
    function loadImage() {
        el.src = el.dataset.src;
    }

    function callback(entries, observer) {
      entries.forEach(e => {
        if (e.isIntersecting) {
          loadImage()
          observer.unobserve(el)
        }
      })
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: 0
      }
      const observer = new IntersectionObserver(callback, options)
      observer.observe(el)
    }

    if (!window['IntersectionObserver']) {
      loadImage()
    } else {
        createObserver()
    }
  }
}
