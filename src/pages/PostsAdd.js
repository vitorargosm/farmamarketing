import PostAddForm from '../components/PostAddForm'

function PostsAdd() {
    function addPostHandler(postData) {
        fetch(
            'https://farmamarketing-ef67f-default-rtdb.firebaseio.com/posts.json',
            {
                method: 'POST',
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return(
        <div>
            <div>Post Add</div>
            <PostAddForm onAddPost={addPostHandler} />
        </div>
    )
}

export default PostsAdd;