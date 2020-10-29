import Vue from 'vue';
import App from './app.vue';

let vm = null;

const render = (container = document.body) => {
  vm = new Vue({
    render: h => h(App),
  }).$mount(container.querySelector('#vue-app'));
};

export async function bootstrap() {
  console.log("VueMicroApp bootstraped");
}

export async function mount(props) {
  console.log("VueMicroApp mount", props);
  render(props.container);
}

export async function unmount() {
  console.log("VueMicroApp unmount");
  vm && vm.$destroy();
  vm = null;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
