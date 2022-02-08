const root = document.querySelector('#root');

function App() {
  const [nama, setNama] = React.useState('Default');

  function ketikasubmit(event) {
    event.preventDefault();
    console.log("Nama : ", nama);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikasubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: function (event) {
      setNama(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);