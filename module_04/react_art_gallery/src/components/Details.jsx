function Detail({details}) {
    function greet() {
        return 'hello world';
    }
    return (
        <div className='details'>
            <p>Artist: {details.artistDisplayName}</p>
            <p>Title: {details.title}</p>
            <p>Dimension: {details.dimensions}</p>
            {details.objectDate > 1860 ? (
                <p>Year: {details.objectDate}</p>
            ) : (
                <p>unknown</p>
            )}
        </div>
    );
}

export default Detail;
