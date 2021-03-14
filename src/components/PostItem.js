function PostItem(props) {
    return (
        <li key={props.id}>
            <div>
                <h3>{props.title}</h3>
                <span></span>
            </div>
        </li>
    )
}

export default PostItem