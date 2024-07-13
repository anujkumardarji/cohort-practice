import SearchBar from "./SearchBar"

const AppBar = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="text-md inline-flex justify-center">
                    Youtube
                </div>
                <div>
                    <SearchBar></SearchBar>
                </div>
                <div>
                    Sign in
                </div>
            </div>
        </>
    )
}

export default AppBar