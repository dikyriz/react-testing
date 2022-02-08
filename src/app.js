const root = document.querySelector('#root');

    function App () {
        const [login, setLogin] = React.useState(false);
        const judulRef = React.useRef(null);
        
        React.useEffect(function () {
            const judul = document.getElementById('judul');
            setInterval(() => {
                judul.textContent = 'Aplikasi';
                
            }, 1000);
            // console.log(judul);
        });

        return (
            <>
                <h1 id='judul'>Application</h1>
            </>
        );
    }

    ReactDOM.render(<App />, root);


