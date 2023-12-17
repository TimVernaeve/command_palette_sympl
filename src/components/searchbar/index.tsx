import styles from './styles.module.css'

import Image from 'next/image'

interface SearchBarProps {
    isOpen?: boolean
}

const SearchBar = ({isOpen}: SearchBarProps) => {

    return (
        <div className={`${styles.container} ${isOpen && styles.open}`}>
            <Image 
                src='/img/icons/search.svg' 
                alt='searchIcon' 
                width={16} 
                height={16} 
            />
            <input 
                className={styles.searchbar}
                type="text" 
                placeholder="Search by keyword" 
            />
        </div>
    )
}

export default SearchBar