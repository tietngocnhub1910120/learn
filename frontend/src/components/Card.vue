<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg" v-if="task">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ task?.title }}</div>
      <p class="text-gray-700 text-base">
        {{ task?.body }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        @click="handleDelete(task?._id)"
        class="cursor-pointer inline-block bg-rose-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >Xóa</span
      >
      <span
        @click="handleEdit(task?._id)"
        class="cursor-pointer inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2"
        >Chỉnh sửa</span
      >
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#{{ task?.status }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: { type: Object },
  },
  methods: {
    async handleEdit(id) {
      this.$store.dispatch("showModal");
      await this.$store.dispatch("getTask", id);
    },
    async handleDelete(id) {
      this.$store.dispatch("showModalDelete");
      await this.$store.dispatch("getTask", id);
    },
  },
};
</script>
