import Vue from 'vue';

const vm = new Vue({
  data: {
    user: 'nossika',
  },
  methods: {
    to(url) {
      history.pushState({}, '', url);
    },
  },
  template: `<div>
    {{user}}
    <div>
      <button @click="to('/')">main</button>
      <button @click="to('/react-micro-app')">react</button>
    </div>
  </div>`,

});

export default vm;