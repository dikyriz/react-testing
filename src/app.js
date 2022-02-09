const root = document.querySelector('#root');

    function App () {
        const [activity, setActivity] = React.useState('');
        const [todos, setTodos] = React.useState([]);
        const [edit, setEdit] = React.useState({});
        const [message, setMessage] = React.useState('');
        
        function generateId () {
            return Date.now();
        }
        
        function saveTodoList (event) {
            event.preventDefault();

            if(!activity) {
               return setMessage('Aktivitas tidak boleh kosong');
            }

            setMessage('');

            if(edit.id) {
                const updateTodo = {
                    ... edit,
                    activity,
                    done: false
                };

                const editTodoIndex = todos.findIndex(function (todo) {
                    return todo.id === edit.id;
                }) ;
                
                const updatedTodos = [... todos];

                updatedTodos[editTodoIndex] = updateTodo;

                setTodos(updatedTodos);

                return cancelTodoList();
            }

            

            setTodos([
                ... todos, 
                {
                    id: generateId(),
                    activity,
                    done: false
                }
            ]);
            
            setActivity('');

        }

        function editTodoList (todo) {
            setActivity(todo.activity);
            setEdit(todo);
        }

        function removeTodoList (todoId) {
            const filteredTodos = todos.filter(function (todo) {
                return todo.id !== todoId;
            });
            setTodos(filteredTodos);

            if(edit.id) cancelTodoList();
        }

        function cancelTodoList () {
            setEdit({});
            setActivity('');
        }

        function doneTodoList(todo) {
            const updateTodo = {
                ... todo,
                done: todo.done ? false : true
            };

            const editTodoIndex = todos.findIndex(function (currentTodo) {
                    return currentTodo.id === todo.id;
                }) ;
                
                const updatedTodos = [... todos];

                updatedTodos[editTodoIndex] = updateTodo;

                setTodos(updatedTodos);
            
        }

        return(
            <>
                <h1>Simple Todo List</h1>
                {message && <div style={{ color: 'red' }}>{message}</div>}
                <form onSubmit={saveTodoList}>
                    <input type="text" placeholder="Nama Aktivitas" value={activity} onChange={function (event) {
                        setActivity(event.target.value);
                    }}/>
                    <button type="submit">
                        {edit.id ? "Simpan" : "Tambah"}
                    </button>
                    {edit.id && <button onClick={cancelTodoList}>Cancel</button>}
                    
                </form>
                {todos.length > 0 ? (
                    <ul>
                    {todos.map(function (todo) {
                        return (
                                <li key={todo.id}>
                                <input type="checkbox" checked={todo.done} onChange={doneTodoList.bind(this, todo)}/>
                                {todo.activity} {todo.done ? '(Selesai)' : '(Belum Selesai)'}
                                <button onClick={editTodoList.bind(this, todo)}>Edit</button>
                                <button onClick={removeTodoList.bind(this, todo.id)}>Hapus</button>
                                </li>
                            
                            );
                    })}
                    
                </ul> )
                : ( <p><i>Belum Ada Data Aktivitas</i></p> )
                }
                
            </>
        );
    }

    ReactDOM.render(<App />, root);


