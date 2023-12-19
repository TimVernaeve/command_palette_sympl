import type { ResultType } from "@/helpers/types"
import styles from './styles.module.css'

import FilterList from '@/components/Lists/filterList'
import ResultList from '@/components/Lists/resultList'

interface SearchResultProps {
    isVisible?: boolean,
    filter: (type: string) => void,
    activeFilter: string,
    query: string,
    results: ResultType[]
}

const SearchResult = ({isVisible, filter, activeFilter, query, results}: SearchResultProps) => {

    const filterData = (type: string) => {
        filter(type)
    }

    const search = query === '' ? [] : results.filter(
        result => result.fullName?.toLowerCase().includes(query.toLowerCase()) 
        || result.fileName?.toLowerCase().includes(query.toLowerCase()) 
        || result.folderName?.toLowerCase().includes(query.toLowerCase()) 
        || result.fileCreator?.toLowerCase().includes(query.toLowerCase()) 
        || result.folderCreator?.toLowerCase().includes(query.toLowerCase())
    )

    const filteredResults = activeFilter === '' ? search : search.filter(result => result.type === activeFilter)

    return (
        <div className={`${styles.container} ${isVisible && styles.visible}`}>
            <FilterList results={filteredResults} filterData={filterData} activeFilter={activeFilter}/>
            <ResultList results={filteredResults} />
        </div>
    )
}

export default SearchResult