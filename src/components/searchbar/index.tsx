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
            <span className={styles.label}>
                people
                <Image 
                    src='/img/icons/close.svg' 
                    alt='arrowDown' 
                    width={8} 
                    height={8}
                />
            </span>
            <span className={styles.label}>
                files
                <Image 
                    src='/img/icons/close.svg' 
                    alt='arrowDown' 
                    width={8} 
                    height={8}
                />
            </span>
            <span className={styles.label}>
                folders
                <Image 
                    src='/img/icons/close.svg' 
                    alt='arrowDown' 
                    width={8} 
                    height={8}
                />
            </span>
            <input 
                className={styles.searchbar}
                type="text" 
                placeholder="Search by keyword" 
            />
        </div>
    )
}

export default SearchBar