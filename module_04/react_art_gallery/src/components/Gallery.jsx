import data from '../art.json';
import Painting from './Painting.jsx';

function Gallery() {
    return (
        <div className='gallery'>
            {data.map((el) => (
                <Painting key={el.objectID} painting={el} />
            ))}
        </div>
    );
}

export default Gallery;
