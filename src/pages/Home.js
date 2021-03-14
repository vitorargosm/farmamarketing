import { useState, useEffect } from 'react'
import PostList from '../components/PostList'

function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);

    useEffect(
        () => {
            fetch('https://farmamarketing-ef67f-default-rtdb.firebaseio.com/posts.json').then(
                response => {
                    return response.json();
                }).then(
                    data => {
                        let posts = [];

                        Object.keys(data).map(
                            (key, content) => {
                                let post = {
                                    id: key,
                                    ...data[key]
                                }
                                return posts.push(post);
                            }
                        );

                        setIsLoading(false);
                        setLoadedPosts(posts);
                    }
                );
        }, []
    );

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return (
        <section>
            <div>Post List</div>
            <PostList posts={loadedPosts} />
        </section>
    )
}

export default Home;