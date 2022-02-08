const root = document.querySelector('#root');

function App() {
  const [login, setLogin] = React.useState(false);
  const judulRef = React.useRef(null);
  React.useEffect(function () {
    const judul = document.getElementById('judul');
    setInterval(() => {
      judul.textContent = 'Aplikasi';
    }, 1000); // console.log(judul);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Application"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);