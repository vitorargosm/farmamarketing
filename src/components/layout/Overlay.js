function Overlay(props) {

    console.log(props);

    return(
        <div onClick={(event) => props.onClick(event.target.value)} className={`${!props.data ? 'hidden' : 'block'} z-20 absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity transform duration-200 ease-in-out h-screen`}>
            
        </div>
    )
}

export default Overlay;