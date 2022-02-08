const root = document.querySelector('#root');

    function App () {
        const [activity, setActivity] = React.useState('');
        const [todos, setTodos] = React.useState([]);
        
        function generateId () {
            return Date.now();
        }
        
        function addTodoList (event) {
            event.preventDefault();
            setTodos([
                ... todos, 
                {
                    id: generateId(),
                    activity
                }
            ]);
            setActivity('');

        }

        function removeTodoList (todoId) {
            const filteredTodos = todos.filter(function (todo) {
                return todo.id !== todoId;
            });
            setTodos(filteredTodos);
        }

        return(
            <>
                <h1>Simple Todo List</h1>
                <form onSubmit={addTodoList}>
                    <input type="text" placeholder="Nama Aktifitas" value={activity} onChange={function (event) {
                        setActivity(event.target.value);
                    }}/>
                    <button type="submit">Tambah</button>
                </form>
                <ul>
                    {todos.map(function (todo) {
                        return (
                                <li key={todo.id}>
                                {todo.activity}
                                <button onClick={removeTodoList.bind(this, todo.id)}>Hapus</button>
                                </li>
                            
                            );
                    })}
                    
                </ul>
            </>
        );
    }

    ReactDOM.render(<App />, root);


