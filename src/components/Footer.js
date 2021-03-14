function Footer() {
    const year = new Date().getFullYear()

    return(
        <footer className="p-5 bg-gray-900 text-white text-center">
            &copy; Farma Marketing {year}
        </footer>
    )
}

export default Footer