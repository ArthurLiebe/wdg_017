// You can work here or download the template
const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 50,
    graduate: false,
};

const Grade = ({gpa}) => {
    console.log(gpa);

    switch (true) {
        case gpa >= 97:
            return <li>Grade: A+</li>;
        case gpa >= 93:
            return <li>Grade: A</li>;
        case gpa >= 90:
            return <li>Grade: A-</li>;
        case gpa >= 87:
            return <li>Grade: B+</li>;
        case gpa >= 83:
            return <li>Grade: B</li>;
        case gpa >= 80:
            return <li>Grade: B-</li>;
        case gpa >= 77:
            return <li>Grade: C+</li>;
        case gpa >= 73:
            return <li>Grade: C</li>;
        case gpa >= 70:
            return <li>Grade: C-</li>;
        case gpa >= 67:
            return <li>Grade: D+</li>;
        case gpa >= 63:
            return <li>Grade: D</li>;
        case gpa >= 60:
            return <li>Grade: D-</li>;
        default:
            return <li>Grade: F</li>;
    }
};

const Student = ({
    student: {firstName, lastName, age, course, city, picture, gpa, graduate},
}) => {
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
                <Grade gpa={gpa} />
                {graduate ? <li>graduated</li> : <li>enrolled</li>}
            </ul>
        </div>
    );
};

const App = () => {
    return <Student student={studentData} />;
};

export default App;
