import Vue from 'vue';

const vm = new Vue({
  data: {
    greeter: 'micro-app',
  },
  methods: {
    to(url) {
      history.pushState({}, '', url);
    },
  },
  template: `<div>
    {{greeter}}
    <div>
      <button @click="to('/')">main</button>
      <button @click="to('/react-micro-app')">react</button>
      <button @click="to('/vue-micro-app')">vue</button>
    </div>
  </div>`,

});

export default vm;