const root = document.querySelector('#root');

function Click(msg) {
  alert(msg);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: Click.bind(this, 'hello world')
}, "Click me");
ReactDOM.render(element, root);