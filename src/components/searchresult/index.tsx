import styles from './styles.module.css'
import Image from 'next/image'

import FilterList from '@/components/Lists/filterList'
import ResultList from '@/components/Lists/resultList'

interface SearchResultProps {
    isVisible?: boolean,
    filter: (type: string) => void
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

const SearchResult = ({isVisible, filter}: SearchResultProps) => {

    const filterData = (type: string) => {
        filter(type)
    }

    return (
        <div className={`${styles.container} ${isVisible && styles.visible}`}>
            <FilterList results={fakeResults} filterData={filterData}/>
            <ResultList results={fakeResults}/>
        </div>
    )
}

export default SearchResult