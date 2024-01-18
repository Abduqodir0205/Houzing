<template>
  <table :date="rows">
    <tr>
      <th>Listing Title</th>
      <th>Date Published</th>
      <th>Status</th>
      <th>View</th>
      <th>Action</th>
    </tr>
    <tr v-for="(row, i) in rows" v-bind:key="i">
      <td>
        <div class="table__properties">
          <div class="table__properties-img">
            <span>FEATURED</span>
          </div>

          <div class="table__properties-date">
            <h1>New Apartment Nice Wiew</h1>
            <h2>Quincy St, Brooklyn, NY, USA</h2>
            <p>$2,800/mo</p>
            <h1>$7,500/mo</h1>
          </div>
          <div class="table__properties-forSale">
            <span>FOR SALE</span>
          </div>
        </div>
      </td>

      <td>
        <p>30 December 2022</p>
      </td>

      <td>
        <p>Pending</p>
      </td>

      <td>
        <p>5933</p>
      </td>

      <td>
        <div class="table__trashEdit">
          <div class="table__trashEdit-parent">
            <img src="../assets/images/svg/edit.svg" alt="" />
          </div>
          <div class="table__trashEdit-parent">
            <img src="../assets/images/svg/trash.svg" alt="" />
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  props: {
    rows: {
      type: Number,
    },
  },
};
</script>
<style lang=""></style>
