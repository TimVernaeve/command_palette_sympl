import styles from './styles.module.css'

import Image from 'next/image'

interface SearchBarProps {
    isOpen?: boolean,
    filter: string,
    updateFilter: (type: string) => void,
    search: (query: string) => void
}

const SearchBar = ({isOpen, filter, updateFilter, search}: SearchBarProps) => {

    const removeFilter = () => {
        updateFilter('')
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        search(value)
    }

    return (
        <div className={`${styles.container} ${isOpen && styles.open}`}>
            <Image 
                src='/img/icons/search.svg' 
                alt='searchIcon' 
                width={24} 
                height={24} 
            />
            {filter === 'user' &&
                <span className={styles.label}>
                    people
                    <Image 
                        src='/img/icons/close.svg' 
                        alt='arrowDown' 
                        width={16} 
                        height={16}
                        onClick={() => removeFilter()}
                    />
                </span>
            }
            {filter === 'file' &&
                <span className={styles.label}>
                    files
                    <Image 
                        src='/img/icons/close.svg' 
                        alt='arrowDown' 
                        width={16} 
                        height={16}
                        onClick={() => removeFilter()}
                    />
                </span>
            }
            {
            filter === 'folder' &&
            <span className={styles.label}>
                folders
                <Image 
                    src='/img/icons/close.svg' 
                    alt='arrowDown' 
                    width={16} 
                    height={16}
                    onClick={() => removeFilter()}
                />
            </span>
            }       
            <input 
                className={styles.searchbar}
                type="text" 
                placeholder="Search by keyword" 
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar