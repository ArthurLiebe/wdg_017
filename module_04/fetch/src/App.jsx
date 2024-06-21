// You can work here or download the template
// Your components go here
import {useEffect, useState} from 'react';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let ignore = false;
        const getPosts = async () => {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts`
                );
                if (!res.ok) throw new Error('Something went wrong');
                const data = await res.json();
                if (!ignore) {
                    setPosts(data);
                }
            } catch (e) {
                console.error(e);
            }
        };
        getPosts();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <ul>
            {posts.map((p) => {
                return (
                    <li key={p.id}>
                        <span>{p.title}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default App;
