const root = document.querySelector('#root');

function App() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [message, setMessage] = React.useState('');

  function generateId() {
    return Date.now();
  }

  function saveTodoList(event) {
    event.preventDefault();

    if (!activity) {
      return setMessage('Aktivitas tidak boleh kosong');
    }

    setMessage('');

    if (edit.id) {
      const updateTodo = { ...edit,
        activity,
        done: false
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updateTodo;
      setTodos(updatedTodos);
      return cancelTodoList();
    }

    setTodos([...todos, {
      id: generateId(),
      activity,
      done: false
    }]);
    setActivity('');
  }

  function editTodoList(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function removeTodoList(todoId) {
    const filteredTodos = todos.filter(function (todo) {
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) cancelTodoList();
  }

  function cancelTodoList() {
    setEdit({});
    setActivity('');
  }

  function doneTodoList(todo) {
    const updateTodo = { ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updateTodo;
    setTodos(updatedTodos);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoList
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktivitas",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "Simpan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelTodoList
  }, "Cancel")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: doneTodoList.bind(this, todo)
    }), todo.activity, " ", todo.done ? '(Selesai)' : '(Belum Selesai)', /*#__PURE__*/React.createElement("button", {
      onClick: editTodoList.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoList.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Belum Ada Data Aktivitas")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);