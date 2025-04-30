<!-- <script>
export default {
  data() {
    return {
      name: "Egormity",
      status: "pending",
      tasks: ["Task1", "Task2", "Task3"],
      link: "https://google.com",
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") this.status = "pending";
      else if (this.status === "pending") this.status = "active";
      else this.status = "active";
    },
  },
};
</script> -->

<!-- 
<script>
import { ref } from "vue";

//
export default {
  setup() {
    const name = ref("Egormity");
    const status = ref("pending");
    const tasks = ref(["Task1", "Task2", "Task3"]);
    const link = ref("https://google.com");

    //
    const toggleStatus = () => {
      if (status.value === "active") status.value = "pending";
      else if (status.value === "pending") status.value = "active";
      else status.value = "active";
    };

    //
    return {
      name,
      status,
      tasks,
      link,
      toggleStatus,
    };
  },
};
</script> -->

<!--  -->
<script setup>
import { ref } from "vue";

//
const name = ref("Egormity");
const status = ref("pending");
const newTask = ref("");
const tasks = ref(["Task1", "Task2", "Task3"]);
const link = ref("https://google.com");

//
const addTask = () => {
  if (!newTask.value.trim()) return;
  tasks.value.push(newTask.value);
  newTask.value = "";
};
[].splice();
//
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

//
const toggleStatus = () => {
  if (status.value === "active") status.value = "pending";
  else if (status.value === "pending") status.value = "active";
  else status.value = "active";
};
</script>

<!--  -->
<template>
  <div>
    <h1>Hello, {{ name }}</h1>

    <!--  -->
    <p v-if="status === 'active'">Active</p>
    <p v-else-if="status === 'pending'">Pending</p>
    <p v-else>Inactive</p>

    <!--  -->
    <form @submit.prevent="addTask">
      <label for="newTask">Add task</label>
      <input type="text" id="newTask" v-model="newTask" />
      <button>Submit</button>
    </form>

    <!--  -->
    <h3>Tasks:</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>

    <!--  -->
    <a v-bind:href="link">Click for google</a>
    <a :href="link">Click for google</a>

    <!--  -->
    <button v-on:click="toggleStatus">Toggle status</button>
    <button @click="toggleStatus">Toggle status</button>
  </div>
</template>

<!--  -->
<style scoped>
* {
  color: "red";
}
</style>
