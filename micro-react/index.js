import App from './app.jsx';
import ReactDom from 'react-dom';


export async function bootstrap() {
  console.log("ReactMicroApp bootstraped");
}

export async function mount(props) {
  console.log("ReactMicroApp mount", props);
  ReactDom.render(<App />, document.getElementById("root"))
}

export async function unmount() {
  console.log("ReactMicroApp unmount");
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}
