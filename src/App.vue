<template>
  <body class="bg-gray-800 h-screen">
    <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
        <TodoSpinner v-if="loading" />
        <template v-else>
          <TodoFormAdd />
          <TodoItems
            v-if="$store.state.todos.length"
            class="max-h-screen max-h-[60vh] overflow-scroll no-scrollbar"
          />
          <TodoEmpty v-else />
        </template>
      </div>
    </div>
  </body>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import TodoSpinner from "@/components/TodoSpinner.vue";
import TodoFormAdd from "@/components/TodoFormAdd.vue";
import TodoItems from "@/components/TodoItems.vue";
import TodoEmpty from "@/components/TodoEmpty.vue";

export default {
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpty,
  },

  setup() {
    const loading = ref(false);
    const store = useStore();

    loading.value = true;
    store.dispatch("getTodos").finally(() => (loading.value = false));

    return {
      loading,
    };
  },
};
</script>
