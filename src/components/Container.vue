<template>
  <div class="content-holder">
    <nav class="navbar navbar-light bg-light" style="top: 0;">
      <div class="container">
        <h1>
          <i
            style="font-weight: bold;
  color: rgb(221, 214, 204); left: 10px;"
          >Coding-School-Library</i>
        </h1>
        <button
          style="padding: 5px; font-size:12px; border: 5px solid #c7bde2; right: 10px; position: absolute; box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);"
          @click="showSidebarMain = !showSidebarMain"
          type="button"
          class="btn btn-primary navbar-brand bg-light"
        >
          <p
            style="color: #c7bde2; font-weight: bolder; margin-bottom: 0;"
            v-if="!this.showSidebarMain"
          >HIDE CONTENT</p>
          <p style="color: green; font-weight: bolder; margin-bottom: 0;" v-else>SHOW CONTENT</p>
        </button>
      </div>
    </nav>

    <BookCard @valueChanged="setRentedValue" :books="bookData" />

    <div v-if="!showSidebarMain">
      <Booklist
        style="transition: all 0.5s ease-in-out;"
        :rentedValue="rentedValue"
        :books="bookData"
      />
    </div>
  </div>
</template>


<script>
import Booklist from "./Booklist.vue";
import BookCard from "./BookCard.vue";

export default {
  props: {
    books: Array,
  },

  data() {
    return {
      bookData: [],
      rentedValue: "",
      showSidebarMain: false,
    };
  },

  mounted() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=%22coding%22", {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        let title;
        let description;
        let id;
        for (var i = 0; i < result.items.length; i++) {
          title = result.items[i].volumeInfo.title;
          description = result.items[i].volumeInfo.description;
          id = result.items[i].id;
          this.bookData.push({
            title,
            id,
            description,
            showButton: true,
          });
        }
      });
  },

  methods: {
    setRentedValue(value) {
      this.rentedValue = value;
    },
  },

  components: {
    Booklist,
    BookCard,
  },
};
</script>

<style lang="scss" scoped>
.content_holder {
  height: 100vh;
  position: absolute;
}
.feature {
  margin-top: 30px;
  width: 300px;
  height: 800px;
  background-color: bisque;
}

@media (min-width: 250px) and (max-width: 650px) {
  h1 {
    font-size: 15px;
    left: 5px;
  }
}
</style>