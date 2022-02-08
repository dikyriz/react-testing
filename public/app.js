const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false); // console.log(login);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Application"), /*#__PURE__*/React.createElement("p", null, !login && /*#__PURE__*/React.createElement("b", null, "Sudah Login")), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);