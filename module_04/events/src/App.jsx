const App = () => {
    return (
        <div>
            <input onChange={(e) => console.log(e.target.value)} type='text' />
            <button onClick={() => alert('button clicked')}>Click</button>
        </div>
    );
};

export default App;
