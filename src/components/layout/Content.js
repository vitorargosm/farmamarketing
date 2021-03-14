

function Content(props) {
    return (
        <div className="flex flex-col h-screen">
            {props.children}
        </div>
    )
}

export default Content;