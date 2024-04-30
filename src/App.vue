<script >
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<template>
  <TheHeader />
  <main id="main">
  <transition mode="out-in">
    <RouterView />
  </transition>
</main>
  <TheFooter />
</template>

<style>

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#id {
  flex: 1;
}

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
