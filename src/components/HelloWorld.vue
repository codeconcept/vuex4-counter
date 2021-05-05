<template>
<h1>Counter by {{name}}</h1>
<Counter />
<hr>
<div class="small">
  {{msg}}
</div>
</template>

<script setup>
import { defineProps, reactive, computed } from "vue";
import { useStore } from "vuex";
import Counter  from "../components/Counter.vue";

const store = useStore();

const name = computed(() => {
  return store.state.user.name;
});

const counterValue = computed(() => {
  return store.state.counter.counterValue;
});

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
.small {
  font-size: 12px;
}
</style>
