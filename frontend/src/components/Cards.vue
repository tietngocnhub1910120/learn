<template>
  <div class="grid grid-cols-4 gap-4">
    <Card v-for="task in getTasks" :task="task" :key="task._id"></Card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  computed: {
    getTasks() {
      return this.$store.state.task.tasks;
    },
  },
  async created() {
    await this.$store.dispatch("getTasks");
  },
};
</script>
