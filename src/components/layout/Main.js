function Main(props) {
    return (
        <main className="bg-gray-100 p-5 flex-grow h-screen">
            {props.children}
        </main>
    )
}

export default Main