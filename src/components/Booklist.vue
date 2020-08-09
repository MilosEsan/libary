<template>
  <section class="container" :class="{'show': showSidebar}">
    <center>
      <div class="control">
        <i id="pic" class="fas fa-angle-double-left" @click="expand();">
          <p>show list</p>
        </i>
        <br />
      </div>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          placeholder="Search Titles..."
          type="text"
          v-model="search"
        />
      </form>

      <ul class="list-group">
        <p style="border: 0px; max-width: 200px; box-shadow: none;">Click to view description:</p>
        <section v-for="(bookTitle, index) in filteredBooks" v-bind:key="index">
          <p
            style="max-width: 500px;"
            @click="bookTitle.showButton = !bookTitle.showButton"
            class="list-group-item"
            v-if="bookTitle.showButton"
          >
            {{bookTitle.title}}
            <br />
            <small
              v-if="bookTitle.title == rentedValue"
              class="rented"
            >TEMPORARY UNAVAILABLE! Recently rented.</small>
          </p>

          <div
            v-if="!bookTitle.showButton"
            class="list-group-item"
            id="description-showed"
            @click="bookTitle.showButton = true"
          >
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <br />
            <h1 style="color:white;">
              <b>DESCRIPTION:</b>
            </h1>
            <br />
            <h1>
              <i>
                <b>{{bookTitle.title}}</b>
              </i>
            </h1>
            <br />
            <h2>{{bookTitle.description}}</h2>
          </div>
        </section>
      </ul>
    </center>
  </section>
</template>

<script>
export default {
  props: {
    books: Array,
    rentedValue: String,
  },

  data() {
    return {
      hidden: true,
      showSidebar: false,
      rentClass: "false",
      search: "",
    };
  },

  methods: {
    expand() {
      this.showSidebar = !this.showSidebar;
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((units) => {
        return units.title.toUpperCase().match(this.search.toUpperCase());
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");

.container {
  margin: 0;
  overflow: auto;
  text-align: left;
  position: fixed;
  display: flex;
  right: 0;
  padding-top: 20px;
  width: 80px;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
  height: 96vh;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.5s ease-in-out;

  #description-showed {
    margin-left: 1000px;
  }

  input,
  p {
    display: none;
  }

  input {
    background-color: rgb(173, 173, 173);
    color: rgb(14, 13, 13);
    max-width: 240px;
  }

  &.show {
    width: 50%;
    background-color: rgb(219, 217, 217);
    padding-left: 100px;

    #description-showed {
      margin-left: 0;
    }

    #pic p {
      display: none;
    }

    .control > i {
      transform: rotateZ(-180deg);
    }

    input,
    p {
      display: block;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
      border: 2px solid gray;
    }
  }

  #pic {
    left: 5px;
    position: absolute;
    margin-left: 0px;
    font-size: 2rem;
    padding: 10px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #c7bde2;
    }
  }

  #pic p {
    display: block;
    font-size: 13px;
    &:hover {
      color: #c7bde2;
    }
  }

  .rented {
    color: red;
    font-weight: bold;
    text-decoration: underline;
    padding: 1.5px;
  }
}

.list-group {
  max-width: 500px;
  margin-top: 200px;
  overflow: auto;
  margin-bottom: 70px;


  .list-group-item:hover {
    background-color: #e0dbee;
    color: white;
    cursor: pointer;
  }

  .close {
    margin: 3px;
  }

  #description-showed {
    max-width: 500px;
    border: 2px solid gray;
    background-color: #ededee;
    color: rgb(42, 82, 82);
    cursor: pointer;
    padding: 10px;
    margin-bottom: 30px;
  }
}

@media (min-width: 250px) and (max-width: 650px) {
  .container {
    width: 70px;
    padding-left: 10px;

    &.show {
      width: 100%;
      background-color: rgb(219, 217, 217);
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  input {
    margin-left: 70px;
  }

  .list-group {
    width: 280px;
    margin-top: 100px;
    overflow: auto;
    margin-bottom: 70px;
  }

  #description-showed {
    width: 280px;
    margin-right: 100px;
    border: 2px solid gray;
    background-color: #ededee;
    color: rgb(42, 82, 82);
    cursor: pointer;
    padding: 10px;
    margin-bottom: 30px;
    b,
    h2 {
      font-size: 15px;
    }
  }
}

@media (min-width: 650px) and (max-width: 920px) {
  #description-showed {
    max-width: 300px;
    margin-right: 10px;
    b,
    h2 {
      font-size: 15px;
    }
  }
}

@media (min-width: 921px) {
  #description-showed {
    max-width: 700px;
    margin-right: 10px;
    b,
    h2 {
      font-size: 30px;
    }
  }
}
</style>