import React, {FC, ReactNode} from 'react'

import styles from './styles.module.css'

type WrapperProps = {
    children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({children}) => (<section className={styles.container}>
{children}
</section>);

export default Wrapper;