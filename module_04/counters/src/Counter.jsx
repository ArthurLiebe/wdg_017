function Counter({count, setCount}) {
    return (
        <div>
            <button onClick={() => setCount((prev) => prev - 1)}>
                decrease
            </button>
            <p>{count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>
                increase
            </button>
        </div>
    );
}

export default Counter;
