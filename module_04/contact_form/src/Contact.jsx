import {useState} from 'react';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        tel: '',
        message: '',
    });

    function handleChange(event) {
        setFormState((prev) => {
            return {...prev, [event.target.name]: event.target.value};
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Name
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    id='name'
                    value={formState.name}
                />
            </label>
            <label htmlFor='email'>
                Email
                <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    id='email'
                    value={formState.email}
                />
            </label>
            <label htmlFor='tel'>
                Tel
                <input
                    onChange={handleChange}
                    type='tel'
                    name='tel'
                    id='tel'
                    value={formState.tel}
                />
            </label>
            <label htmlFor='message'>
                {' '}
                Message
                <textarea
                    onChange={handleChange}
                    name='message'
                    id='message'
                    value={formState.message}
                ></textarea>
            </label>
            <button>Submit</button>
        </form>
    );
}

export default Contact;
