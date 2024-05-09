<template>
  <body class="bg-gray-800">
    <div class="px-3 py-10 md:px-10">
      <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
        <TodoSpinner />
        <TodoFormAdd />
        <TodoItems />
        <TodoEmpty />
      </div>
    </div>
  </body>
</template>

<script>
import TodoSpinner from "./components/TodoSpinner.vue";
import TodoFormAdd from "./components/TodoFormAdd.vue";
import TodoItems from "./components/TodoItems.vue";
import TodoEmpty from "./components/TodoEmpty.vue";

export default {
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpty,
  },
};
</script>
