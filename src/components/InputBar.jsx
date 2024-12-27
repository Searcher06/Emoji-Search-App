export function InputBar({handleSearch,searchText,setWrapperContent}){
    return <>
       <div className="input-bar">
            <input type="text" placeholder="Search Emoji" onChange={handleSearch} value={searchText}/>
            <span>
                <button>
                    Search
                </button>
            </span>
        </div>
    </>
}