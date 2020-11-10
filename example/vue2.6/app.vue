<template>
<div>
  vue app
  <div class="counter">
    counr: {{count}}
    <button @click="setCount(count + 1)">+1</button>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    setCount(count) {
      this.count = count;
    },
  },
}
</script>
<style>
body {
  background: #ddd
}
</style>