const SearchBar = () => {
    return (
        <>

            <div className="relative w-96 pt-2">
  
                <input type="search" id="default-search" className="block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-8" placeholder="Search" required />
                <div className="absolute inset-y-0 right-0 flex items-center pt-2 pointer-events-none pr-3 ">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
            </div>

        </>
    )
}

export default SearchBar