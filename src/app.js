const root = document.querySelector('#root');

    function App () {
        const [login, setLogin] = React.useState(false);
        // console.log(login);

        return (
            <>
                <h1>Application</h1>
                <p>{!login && <b>Sudah Login</b>}</p>
                <button onClick={function () {
                    setLogin(true);
                }}>Login</button>
            </>
        );
    }

    ReactDOM.render(<App />, root);


