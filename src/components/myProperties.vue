<template>
  <div class="my__properties">
    <div class="container">
      <div class="my__properties-content">
        <div class="my__properties-content-search">
          <h1>My propererties</h1>
          <form action="#">
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div class="my__properties-content-table">
          <propertiesTable v-bind:date="rows"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import propertiesTable from './propertiesTable.vue';
export default {
  name: "Table",
  data() {
    return {
      rows: 10,
    };
  },
  props:[10],
  setup(props) {
    // setup() receives props as the first argument.
    console.log(props.title)
  },
  components:{
    propertiesTable
  }
};
</script>
<style lang=""></style>
