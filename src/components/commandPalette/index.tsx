'use client';

import { useState } from "react"
import SearchBar from "../searchbar"
import SearchResult from "../searchresult"

import styles from './styles.module.css'

const CommandPalette = () => {

    const [isOpen, setOpen] = useState(true)
    const [filter, setFilter] = useState<string>('')

    const filterData = (type: string) => {
        setFilter(type)
    }

    return (
        <div className={styles.container}>
            <SearchBar isOpen={isOpen} filter={filter} updateFilter={filterData}/>
            <SearchResult isVisible={isOpen} filter={filterData} activeFilter={filter}/>
        </div>
    )
}

export default CommandPalette