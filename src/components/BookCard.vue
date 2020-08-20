<template>
  <main class="custom-card">
    <h3>To rent the book, fill out the form:</h3>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Book Title:</label>
        <br />
        <select v-model="selectedBook">
          <option value disabled>--Select--</option>
          <option
            v-for="(item, index) in books"
            v-bind:key="index"
            :value="item.title"
          >{{item.title}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>User Name:</label>
        <input ref="userName" class="form-control" />
        <label>Password:</label>
        <input type="password" ref="passwd" class="form-control" />
      </div>
      <section
        class="rent_info"
        v-if="this.user.user_name && this.user.password && this.selectedBook"
      >
        <button @click="closeTheReport()" type="button" class="close" aria-label="Close">
          <span @click="closeTheReport()" aria-hidden="true">&times;</span>
        </button>
        <p style="margin-top: 30px; text-decoration: underline; color: black;">NEW REPORTS:</p>Book:
        <h2>{{this.selectedBook}}</h2>assigned for:
        <h2>{{this.user.user_name}}</h2>at:
        <h2>{{x.getMonth()+'.'+x.getDate()+'.'+x.getFullYear()}}</h2>
      </section>
      <button
        @click="rent(); passTheSelection()"
        type="submit"
        class="btn btn-primary bg-dark"
      >Submit</button>
      <div class="list-group"></div>
    </form>
  </main>
</template>

<script>
export default {
  props: {
    books: Array,
  },

  data() {
    return {
      user: {
        user_name: "",
        password: "",
      },
      showInfo: false,
      selectedBook: "",
      x: new Date(),
    };
  },

  methods: {
    rent() {
      this.user.password = this.$refs["passwd"].value;
      this.user.user_name = this.$refs["userName"].value;

      this.$refs["passwd"].value &&
      this.$refs["userName"].value &&
      this.selectedBook
        ? alert(
            `Book '${this.selectedBook}' rented by ${this.user.user_name} at ` +
              "<<" +
              this.x.getMonth() +
              "." +
              this.x.getDate() +
              "." +
              this.x.getFullYear() +
              ">>"
          )
        : alert(
            "Selected opotion, User Name or Password is missing! Please, check your input."
          );
    },

    passTheSelection() {
      this.$refs["userName"].value = "";
      this.$refs["passwd"].value = "";
      this.$emit("valueChanged", this.selectedBook);
    },

    closeTheReport() {
      this.$refs["userName"].value = "";
      this.$refs["passwd"].value = "";
      this.selectedBook = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-card {
  width: 650px;
  margin-top: 6vh;
  padding: 20px;
  font-family: Roboto Condensed, san-serif;
  color: rgb(32, 32, 32);
  border: 1px solid white;
  border-radius: 1.5px;
  overflow: auto;
  text-align: center;
  position: fixed;
  display: inherit;
  height: 80vh;
  left: 90px;
  background-color: rgba(255, 255, 255, 0.5);


  .rent_info {
    margin-top: 40px;
  }
}

h3 {
  padding-bottom: 80px;
}

.rent_info {
  overflow: auto;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.267);
  border: 5px solid #c7bde2;
  border-radius: 5px;
  color: red;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.658);
  margin-bottom: 10px;
}

.rent_info h2 {
  color: rgb(11, 112, 11);
  font-weight: bold;
  text-decoration: underline;
}

@media (min-width: 300px) and (max-width: 500px) {
  .custom-card {
    left: 30px;
    right: 30px;
    width: 280px;
   
  }

  select {
    font-size: 13px;
    width: 200px;
  }

  .rent_info {
    font-size: 15px;
    h2 {
      font-size: 20px;
    }
  }

   .close {
      margin: 3px;
    }
}

@media (min-width: 500px) and (max-width: 950px) {
  .custom-card {
    left: 75px;
    width: 450px;
  }

  select {
    font-size: 13px;
    width: 200px;
  }

  .rent_info {
    font-size: 15px;
    h2 {
      font-size: 20px;
    }
  }
}
</style>