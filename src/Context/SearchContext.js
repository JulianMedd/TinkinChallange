import React, { useState } from 'react';

export const SearchContext = React.createContext([])

export const SearchProvider = ({children}) =>{
    const [search, setSearch] = useState()
    const [filterCooked, setFilterCooked] = useState()

    const searchResult = (res) =>{
        let name = res.toLowerCase()
        setSearch(name)
    }

    const filterResult = (res)=>{
        if(res === "active") setFilterCooked(true)
        if(res === "inactive") setFilterCooked(false)
        if(res === "all") setFilterCooked("all")
    }

    return <SearchContext.Provider value={{searchResult,search,filterResult,filterCooked}}>{children}</SearchContext.Provider>
}