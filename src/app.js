const root = document.querySelector('#root');

    function App () {
        const namaRef = React.useRef(null);
        
        function ketikasubmit (event){
            event.preventDefault();
            
            const nama = namaRef.current.value;
            
            console.log("Nama : ", nama);
        }

        return (
            <>
                <form onSubmit={ketikasubmit}>
                    <div>
                        <label>Nama :</label>
                        <input type="text" name="nama" ref={namaRef}/>
                    </div>
                    <button type="submit">Kirim</button>
                </form>
            </>
        );
    }

    ReactDOM.render(<App />, root);


