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
          <transition-group tag="p"  name="fade" v-if="items.length <= 0">
            <p>Data not available!</p>
          </transition-group>
          <table v-else>
            <tr>
              <th>Listing Title</th>
              <th>Date Published</th>
              <th>Status</th>
              <th>View</th>
              <th>Action</th>
            </tr>
            <tr v-for="(item, i) in filteredItems" :key="item">
              <transition-group tag="td"  name="fade" class="containerEl">
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
              </transition-group>

              <transition-group tag="td"  name="fade" class="containerEl">
                <td>
                  <p>{{ item.date_published }}</p>
                </td>
              </transition-group>

              <transition-group tag="td"  name="fade" class="containerEl">
                <td>
                  <p>{{ item.status }}</p>
                </td>
              </transition-group>

              <transition-group tag="td"  name="fade" class="containerEl">
                <td>
                  <p>{{ item.view }}</p>
                </td>
              </transition-group>

              <transition-group tag="td"  name="fade" class="containerEl">
                <td>
                  <div class="table__trashEdit">
                    <div class="table__trashEdit-parent">
                      <img src="../assets/images/svg/edit.svg" alt="" />
                    </div>
                    <div
                      class="table__trashEdit-parent"
                      @click="removeTodo(item)"
                    >
                      <img src="../assets/images/svg/trash.svg" alt="" />
                    </div>
                  </div>
                </td>
              </transition-group>
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
  computed: {
    filteredItems() {
      return this.items.filter((item) =>
        item.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
      );
    },
  },
  methods: {
    removeTodo(item) {
      // console.log(this.items.length);
      // setTimeout(() => {
        const i = this.items.indexOf(item);
        if (i > -1) {
          this.items.splice(i, 1);
          // this.items = this.items.filter((t) => t !== item);
        }
        // this.removeTodo()
      // }, 100);
    },
  },
};
</script>
<style>
.containerEl {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}


</style>
