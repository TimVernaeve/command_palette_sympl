'use client';

import { useState } from "react"
import SearchBar from "../searchbar"
import SearchResult from "../searchresult"

import styles from './styles.module.css'

const CommandPalette = () => {

    const [isOpen, setOpen] = useState(false)
    const [filter, setFilter] = useState<string>('')
    const [query, setQuery] = useState<string>('')

    const filterData = (type: string) => {
        setFilter(type)
    }

    const search = (query: string) => {
        setQuery(query)
        if (query !== '') {
            setOpen(true)
        }
        else {
            setOpen(false)
        }
    }

    return (
        <div className={styles.container}>
            <SearchBar isOpen={isOpen} filter={filter} updateFilter={filterData} search={search}/>
            <SearchResult isVisible={isOpen} filter={filterData} activeFilter={filter} query={query}/>
        </div>
    )
}

export default CommandPalette