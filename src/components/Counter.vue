<template>
  <div class="big">
  {{counterValue}}
</div>
<div>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
</div>
<br>
<div>{{$store.getters.getPresentation}}</div>

<hr>
{{$store.state}}
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const counterValue = computed(() => {
  return store.state.counter.counterValue;
});

function increase() {
  store.commit("increase", 5);
}

function decrease() {
  store.commit("decrease", 5);
}
</script>

<style>
.big {
  font-size: 30px;
}
</style>