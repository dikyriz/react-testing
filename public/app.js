const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoList(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity('');
  }

  function removeTodoList(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoList
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoList.bind(this, todo.id)
    }, "Hapus"));
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);