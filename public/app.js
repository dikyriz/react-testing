const root = document.querySelector('#root');

function Click() {
  alert(1);
}

const element = /*#__PURE__*/React.createElement("button", {
  onClick: Click
}, "Click me");
ReactDOM.render(element, root);