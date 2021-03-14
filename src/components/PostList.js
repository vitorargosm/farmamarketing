import PostItem from './PostItem'

function PostList(props) {
    return (
        <ul className='list-of-posts text-gray-300'>
            {props.posts.map(
                (post) => (
                    <PostItem
                        key={post.id}
                        title={post.title}
                        image={post.image}
                        id={post.id}
                    />
                )
            )}
        </ul>
    )
}

export default PostList;