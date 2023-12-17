'use client';

import { useState } from "react"
import SearchBar from "../searchbar"
import SearchResult from "../searchresult"

const CommandPalette = () => {

    const [isOpen, setOpen] = useState(true)

    return (
        <div>
            <SearchBar isOpen={isOpen}/>
            <SearchResult isVisible={isOpen} />
        </div>
    )
}

export default CommandPalette