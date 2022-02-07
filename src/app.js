const root = document.querySelector('#root');

    function Click(msg) {
        alert(msg);
    }
    const element = (
        <button onClick={Click.bind(this, 'hello world')}>Click me</button>
    );

    ReactDOM.render(element, root);


