<template>
  <Header></Header>
  <main class="w-[1200px] mx-auto">
    <div class="mb-4">
      <button
        @click="handleShowModal"
        type="button"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Thêm task
      </button>
    </div>
    <Cards></Cards>
  </main>
  <Modal></Modal>
</template>

<script>
import Header from "../components/Header.vue";
import Cards from "../components/Cards.vue";
import Modal from "../components/Modal.vue";
export default {
  components: {
    Header,
    Cards,
    Modal,
  },
  methods: {
    handleShowModal() {
      this.$store.dispatch("showModal");
    },
  },
  async created() {
    if (!this.$store.state.user.isLogged) {
      this.$router.push("/");
    }
  },
};
</script>
