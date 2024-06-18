// You can work here or download the template
const students = [
    {
        id: 1,
        firstName: 'Testy',
        lastName: 'McTest',
        age: 42,
        course: 'Web Development',
        city: 'Berlin',
        picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        gpa: 50,
        graduate: false,
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        age: 22,
        course: 'Data Science',
        city: 'New York',
        picture: 'https://randomuser.me/api/portraits/women/2.jpg',
        gpa: 95,
        graduate: true,
    },
    {
        id: 3,
        firstName: 'John',
        lastName: 'Smith',
        age: 28,
        course: 'Web Development',
        city: 'Los Angeles',
        picture: 'https://randomuser.me/api/portraits/men/3.jpg',
        gpa: 85,
        graduate: false,
    },
    {
        id: 4,
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 25,
        course: 'Data Science',
        city: 'San Francisco',
        picture: 'https://randomuser.me/api/portraits/women/4.jpg',
        gpa: 78,
        graduate: true,
    },
    {
        id: 5,
        firstName: 'Bob',
        lastName: 'Brown',
        age: 30,
        course: 'Web Development',
        city: 'Chicago',
        picture: 'https://randomuser.me/api/portraits/men/5.jpg',
        gpa: 67,
        graduate: false,
    },
    {
        id: 6,
        firstName: 'Charlie',
        lastName: 'Davis',
        age: 23,
        course: 'Data Science',
        city: 'Austin',
        picture: 'https://randomuser.me/api/portraits/men/6.jpg',
        gpa: 92,
        graduate: true,
    },
    {
        id: 7,
        firstName: 'Emily',
        lastName: 'Wilson',
        age: 27,
        course: 'Web Development',
        city: 'Seattle',
        picture: 'https://randomuser.me/api/portraits/women/7.jpg',
        gpa: 88,
        graduate: true,
    },
    {
        id: 8,
        firstName: 'David',
        lastName: 'Martinez',
        age: 29,
        course: 'Data Science',
        city: 'Miami',
        picture: 'https://randomuser.me/api/portraits/men/8.jpg',
        gpa: 73,
        graduate: false,
    },
    {
        id: 9,
        firstName: 'Fiona',
        lastName: 'Clark',
        age: 26,
        course: 'Web Development',
        city: 'Denver',
        picture: 'https://randomuser.me/api/portraits/women/9.jpg',
        gpa: 81,
        graduate: false,
    },
    {
        id: 10,
        firstName: 'George',
        lastName: 'Miller',
        age: 32,
        course: 'Data Science',
        city: 'Boston',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        gpa: 90,
        graduate: true,
    },
];

const Grade = ({gpa}) => {
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
    return (
        <div className='container'>
            {students.map((student) => (
                <Student key={student.id} student={student} />
            ))}
        </div>
    );
};

export default App;
