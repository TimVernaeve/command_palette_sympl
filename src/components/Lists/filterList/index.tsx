import Image from 'next/image'

import styles from './styles.module.css'

interface FilterListProps {
    people?: number,
    files?: number,
    folders?: number
}

const FilterList = ({people, files, folders}: FilterListProps) => {
    return (
        <ul className={styles.filter_list}>
            <li className={styles.filter_list_item}>
                <div className={styles.filter_list_item_container}>
                    <Image src='/img/icons/users.svg' alt='users' width={24} height={24} />
                    <span>People</span>
                </div>
                <div className={styles.filter_list_item_container}>
                    <span className={styles.number}>{people ? people : 0}</span>
                    <Image src='/img/icons/arrow-right.svg' alt='right-arrow' width={16} height={16} />
                </div>
            </li>
            <li className={styles.filter_list_item}>
                <div className={styles.filter_list_item_container}>
                    <Image src='/img/icons/file.svg' alt='users' width={24} height={24} />
                    <span>Files</span>
                </div>
                <div className={styles.filter_list_item_container}>
                    <span className={styles.number}>{files ? files : 0}</span>
                    <Image src='/img/icons/arrow-right.svg' alt='right-arrow' width={16} height={16} />
                </div>
            </li>
            <li className={styles.filter_list_item}>
                <div className={styles.filter_list_item_container}>
                    <Image src='/img/icons/folder.svg' alt='users' width={24} height={24} />
                    <span>Folders</span>
                </div>
                <div className={styles.filter_list_item_container}>
                    <span className={styles.number}>{folders ? folders : 0}</span>
                    <Image src='/img/icons/arrow-right.svg' alt='right-arrow' width={16} height={16} />
                </div>
            </li>
        </ul>
    )
}

export default FilterList