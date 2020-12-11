import Vue from 'vue'
import App from './app.vue'

let vm = null

const render = (container = document.body) => {
  vm = new Vue({
    render: (h) => h(App)
  }).$mount(container.querySelector('#vue-app'))
}

export async function bootstrap () {
}

export async function mount (props) {
  render(props.container)
}

export async function unmount () {
  vm && vm.$destroy()
  vm.$el.innerHTML = ''
  vm = null
}

if (!window.__POWERED_BY_QIANKUN__) { // eslint-disable-line
  render()
}
