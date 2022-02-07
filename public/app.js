const root = document.querySelector('#root');

function App() {
  const [diKlik, setDiKlik] = React.useState(false);
  const [count, setCount] = React.useState(0);
  React.useEffect(function () {
    console.log('exec');
  }, [diKlik, count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Ini Judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setDiKlik(true);
    }
  }, "Klik Saya"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "tambah"), "Nilai Saat Ini : ", count);
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);