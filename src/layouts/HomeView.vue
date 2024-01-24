<template>
  <div class="view">
    <navbar />
    <div class="router">
      <!-- <myProperties /> -->
      <router-view></router-view>
    </div>
    <Footer> </Footer>
  </div>
</template>
<script>
import navbar from "../components/navbar.vue";
import myProperties from "../components/myProperties.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    navbar,
    myProperties,
    Footer,
  },
};
</script>
<style>
.router {
  padding: 34px 0 96px 0;
}
</style>
