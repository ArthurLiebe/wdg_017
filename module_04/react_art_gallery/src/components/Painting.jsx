import Detail from './Details.jsx';

function Painting({painting}) {
    return (
        <div className='painting'>
            <img src={painting.primaryImage} alt='' />
            <Detail details={painting} />
        </div>
    );
}

export default Painting;
