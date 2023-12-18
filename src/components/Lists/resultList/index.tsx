import type { ResultType } from "@/helpers/types"
import Image from "next/image"

import styles from "./styles.module.css"

interface ResultListProps {
    results: ResultType[],
    filter: string
}

const ResultList = ({results, filter}: ResultListProps) => {

    const filteredResults = filter === '' ? results : results.filter(result => result.type === filter)

    return (
        <ul className={styles.list}>
            {filteredResults?.map((result, index) => (
                <li key={index} className={styles.list_item}>
                    <Image src={`/img/icons/${result.type}.svg`} alt={result.type} width={24} height={24} />
                    <div className={styles.list_item_container}>
                        <span className={styles.list_item_name}>
                            {result.type === 'user' && result.firstName + ' ' + result.lastName}
                            {result.type === 'file' && result.fileName}
                            {result.type === 'folder' && result.folderName}
                        </span>
                        <span className={styles.list_item_description}>
                            {result.type === 'user' && `Last active ${result.lastLogin} ago`}
                            {result.type === 'file' && `Added by ${result.fileCreator} in ${result.folderName}`}
                            {result.type === 'folder' && `Folder added by ${result.folderCreator} ${result.createdAt}`}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ResultList
