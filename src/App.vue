<script >
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
  },
};
</script>

<template>
  <TheHeader />
  <transition mode="out-in">
    <RouterView />
  </transition>
</template>

<style>
h1,
h2,
p,
ul,
li,
a {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  font-weight: bold;
  text-decoration: none;
  display: block;
}

img {
  display: block;
  max-width: 100%;
}
/* .router-link-exact-active {
  color: darkgrey;
} */
/* a.router-link-active {
  color: blueviolet;
} */

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-from {
  transform: translate3d(0, -20%, 0);
}

.v-leave-to {
  transform: translate3d(0, 20%, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
</style>
