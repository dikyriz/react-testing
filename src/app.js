const root = document.querySelector('#root');

    function App () {
        const [diKlik, setDiKlik] = React.useState(false);
        const [count, setCount]= React.useState(0);

        React.useEffect(function () {
            console.log('init carousel');
           
            return function () {
                console.log('destroy carousel');
            }
        });

        return (
            <>
                <h1 id="judul">Ini Judul</h1>
                <button onClick={function () {
                    setDiKlik(true);
                }}>Klik Saya</button>
                <button onClick={function () {
                    setCount(count + 1);
                }}>tambah</button>
                Nilai Saat Ini : {count}
            </>
        );
    }

    ReactDOM.render(<App />, root);


