<template>
  <div class="my__properties">
    <div class="container">
      <div class="my__properties-content">
        <div class="my__properties-content-search">
          <h1>My propererties</h1>
          <form action="#">
            <input type="text" placeholder="Search" v-model="search" />
          </form>
        </div>
        <div class="my__properties-content-table">
          <p v-if="items.length <= 0">Data not available!</p>
          <table v-else>
            <tr>
              <th>Listing Title</th>
              <th>Date Published</th>
              <th>Status</th>
              <th>View</th>
              <th>Action</th>
            </tr>
            <tr v-for="(item, i) in filteredItems" :key="item.id">
              <td>
                <div class="table__properties">
                  <div class="table__properties-img">
                    <span>FEATURED</span>
                  </div>

                  <div class="table__properties-date">
                    <h1>{{ item.title }}</h1>
                    <h2>{{ item.location }}</h2>
                    <p>{{ item.del_prise }}</p>
                    <h1>{{ item.new_prise }}</h1>
                  </div>
                  <div class="table__properties-forSale">
                    <span>{{ item.for_sale }}</span>
                  </div>
                </div>
              </td>

              <td>
                <p>{{ item.date_published }}</p>
              </td>

              <td>
                <p>{{ item.status }}</p>
              </td>

              <td>
                <p>{{ item.view }}</p>
              </td>

              <td>
                <div class="table__trashEdit">
                  <div class="table__trashEdit-parent">
                    <img src="../assets/images/svg/edit.svg" alt="" />
                  </div>
                  <div class="table__trashEdit-parent" @click="removeTodo(item)">
                    <img src="../assets/images/svg/trash.svg" alt="" />
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let elemend_id = 0;
export default {
  name: "Table",
  data() {
    return {
      elementDel: false,
      search: "",
      items: [
        {
          id: elemend_id,
          title: "New Apartment Nice Wiew",
          location: "Quincy St, Brooklyn, NY, USA",
          del_prise: "$2,800/mo",
          new_prise: "$7,500/mo",
          for_sale: "FOR SALE",
          date_published: "30 December 2022",
          status: "Pending",
          view: 5933,
        },
        {
          id: elemend_id++,
          title: "New Apart",
          location: "Uzbekistan, Tahskent, Sergili",
          del_prise: "$4,800/mo",
          new_prise: "$10,500/mo",
          for_sale: "FOR SALE",
          date_published: "18 January 2024",
          status: "Pending",
          view: 1299,
        },
        {
          id: elemend_id++,
          title: "Sobirjon",
          location: "Uzbekistan, Tahskent, Sergili",
          del_prise: "$4,800/mo",
          new_prise: "$10,500/mo",
          for_sale: "FOR SALE",
          date_published: "18 January",
          status: "Pending",
          view: 1299,
        },
      ],
    };
  },
  computed:{
    filteredItems(){
      return this.items.filter(item => item.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()))
    }
  },
  methods:{
    removeTodo(item) {
      // console.log(this.items.length);
      setTimeout(() => {
        this.items = this.items.filter((t) => t !== item)
        
      	// this.removeTodo()
      }, 300)
    },
    
  }

};
</script>
<style lang=""></style>
