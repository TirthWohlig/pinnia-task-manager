<template>
  <main>
    <!-- heading -->
    <header>
      <img src="./assets/pinia-seeklogo.com.svg" alt="pinia logo">
      <h1>{{ taskStore.name }}</h1>
    </header>
    <!-- Task -->
    <div class="task-list" v-if="filter === 'all'">
      <p>Tasks</p>
      <div v-for="task in taskStore.task">
        <TaskDetails :task="task" />
      </div>
    </div>
    <!--  -->
    <div class="task-list" v-if="filter === 'favs'">
      <p>Fav Tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue"
import TaskDetails from "./components/TaskDetails.vue"
import { UseTaskStore } from "./stores/TaskStore.js"
export default {
  components: {
    TaskDetails,
  },
  setup() {
    const taskStore = UseTaskStore()

    const filter = ref('all')

    return { taskStore, filter }
  }
}
</script>