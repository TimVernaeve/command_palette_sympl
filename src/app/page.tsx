import styles from './styles.module.css'

import CommandPalette from "@/components/commandPalette"

export default function Home() {
  return (
    <main className={styles.container}>
      <CommandPalette />
    </main>
  )
}
