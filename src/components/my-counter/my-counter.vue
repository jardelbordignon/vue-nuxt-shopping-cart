<script lang="ts">
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();

    const { increment, decrement } = store;
    const count = computed(() => store.count);

    return { increment, decrement, count };
  },
});
</script>

<template>
  <div class="my-counter">
    <button @click="increment">Increment</button>
    <strong>{{ count }}</strong>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
.my-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
.my-counter button {
  background-color: violet;
  padding: 5px 10px;
  border-radius: 4px;
}
</style>
