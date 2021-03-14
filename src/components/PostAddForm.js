import { useRef } from "react"

function PostAddForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const categoriesInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredCategories = categoriesInputRef.current.value;

        const postData = {
            title: enteredTitle,
            image: enteredImage,
            categories: enteredCategories
        }

        props.onAddPost(postData);
        console.log({postData});
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='postTitle'>Post Title</label>
                    <input type='text' required id='postTitle' ref={titleInputRef} />
                </div>
                <div>
                    <label htmlFor='postImage'>Post Image</label>
                    <input type='text' required id='postImage' ref={imageInputRef} />
                </div>
                <div>
                    <label htmlFor='postCategories'>Post Categories</label>
                    <input type='text' required id='postCategories' ref={categoriesInputRef} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div >
    )
}

export default PostAddForm;