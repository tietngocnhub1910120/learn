<template>
  <div class="grid grid-cols-4 gap-4">
    <Card v-for="task in tasks" :task="task"></Card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  data() {
    return {
      tasks: [],
    };
  },
  components: { Card },
  async created() {
    await this.$store.dispatch("getTasks");
    this.tasks = this.$store.state.task.tasks;
  },
};
</script>
