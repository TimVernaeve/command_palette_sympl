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

    const fakeResults = [
        {
            type: 'user',
            firstName: 'John',
            lastName: 'Doe',
            lastLogin: '2 days',
        },
        {
            type: 'user',
            firstName: 'Jane',
            lastName: 'Doe',
            lastLogin: '5 days',
        },
        {
            type: 'user',
            firstName: 'John',
            lastName: 'Smith',
            lastLogin: '1 day',
        },
        {
            type: 'file',
            fileName: 'file-1.png',
            fileCreator: 'John Doe',
            folderName: 'Folder 1'
        },
        {
            type: 'file',
            fileName: 'file-2.png',
            fileCreator: 'Jane Doe',
            folderName: 'Folder 2'
        },
        {
            type: 'file',
            fileName: 'file-3.png',
            fileCreator: 'John Smith',
            folderName: 'Folder 3'
        },
        {
            type: 'folder',
            folderName: 'Folder 1',
            folderCreator: 'John Doe',
            createdAt: '2 days ago'
        },
        {
            type: 'folder',
            folderName: 'Folder 2',
            folderCreator: 'Jane Doe',
            createdAt: '5 days ago'
        },
        {
            type: 'folder',
            folderName: 'Folder 3',
            folderCreator: 'John Smith',
            createdAt: '1 day ago'
        }
    
    ]

    return (
        <div className={styles.container}>
            <SearchBar isOpen={isOpen} filter={filter} updateFilter={filterData} search={search}/>
            <SearchResult results={fakeResults} isVisible={isOpen} filter={filterData} activeFilter={filter} query={query}/>
        </div>
    )
}

export default CommandPalette