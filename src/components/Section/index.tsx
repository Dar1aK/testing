import React, {FC, ReactNode} from 'react'

import styles from './styles.module.css'

type SectionProps = {
    children: ReactNode
}

const Section: FC<SectionProps> = ({children}) => (<section className={styles.container}>
{children}
</section>);

export default Section;