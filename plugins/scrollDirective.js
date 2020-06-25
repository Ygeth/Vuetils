// https://vuejs.org/v2/cookbook/creating-custom-scroll-directives.html#Base-Example
import Vue from "vue";

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  },
});

/** ScrollShrink:
shrinkNav() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollPosition, nav);
    if (scrollPosition >= 150) {
        this.shrinked = true;
    } else {
        this.shrinked = false;
    }
}

 */
