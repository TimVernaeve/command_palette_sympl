import Image from 'next/image'

import styles from './styles.module.css'
import { ResultType } from '@/helpers/types'

interface FilterListProps {
    results: ResultType[],
    filterData: (type: string) => void,
    activeFilter: string
}

const FilterList = ({results, filterData, activeFilter}: FilterListProps) => {
    const people = results.filter(result => result.type === 'user').length
    const files = results.filter(result => result.type === 'file').length
    const folders = results.filter(result => result.type === 'folder').length

    const filterType = (type: string) => {
        if (type === 'user') {
            filterData('user')
        } else if (type === 'file') {
            filterData('file')
        } else if (type === 'folder') {
            filterData('folder')
        }
    }
    
    return (
        <ul className={`${styles.filter_list} ${activeFilter !== '' && styles.hidden}`}>
            <span>{activeFilter}</span>
            <li className={styles.filter_list_item} onClick={() => filterType('user')}>
                <div className={styles.filter_list_item_container}>
                    <Image src='/img/icons/users.svg' alt='users' width={24} height={24} />
                    <span>People</span>
                </div>
                <div className={styles.filter_list_item_container}>
                    <span className={styles.number}>{people}</span>
                    <Image src='/img/icons/arrow-right.svg' alt='right-arrow' width={16} height={16} />
                </div>
            </li>
            <li className={styles.filter_list_item} onClick={() => filterType('file')}>
                <div className={styles.filter_list_item_container}>
                    <Image src='/img/icons/file.svg' alt='files' width={24} height={24} />
                    <span>Files</span>
                </div>
                <div className={styles.filter_list_item_container}>
                    <span className={styles.number}>{files}</span>
                    <Image src='/img/icons/arrow-right.svg' alt='right-arrow' width={16} height={16} />
                </div>
            </li>
            <li className={styles.filter_list_item} onClick={() => filterType('folder')}>
                <div className={styles.filter_list_item_container}>
                    <Image src='/img/icons/folder.svg' alt='folders' width={24} height={24} />
                    <span>Folders</span>
                </div>
                <div className={styles.filter_list_item_container}>
                    <span className={styles.number}>{folders}</span>
                    <Image src='/img/icons/arrow-right.svg' alt='right-arrow' width={16} height={16} />
                </div>
            </li>
        </ul>
    )
}

export default FilterList