const root = document.querySelector('#root');

    function Click() {
        alert(1);
    }
    const element = (
        <button onClick={Click}>Click me</button>
    );

    ReactDOM.render(element, root);


