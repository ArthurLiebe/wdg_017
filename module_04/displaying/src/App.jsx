// You can work here or download the template
const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

const Student = ({firstName, lastName, age, course, city, picture}) => {
    return (
        <div className='card'>
            <img src={picture} alt={firstName} />
            <ul>
                <li>
                    Name : {firstName} {lastName}
                </li>
                <li>Age: {age}</li>
                <li>Course: {course}</li>
                <li>City: {city}</li>
            </ul>
        </div>
    );
};

const App = () => {
    return <Student {...studentData} />;
};

export default App;
