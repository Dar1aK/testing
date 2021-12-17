import React, {FC} from 'react'
import {connect} from 'react-redux'

import { Button, Container } from '@mui/material';

import {getDog} from '../../actions/dogs'

import styles from './styles.module.css'

type DogsProps = {
    isLoading: boolean;
    getDog: () => void;
    url: string;
}

const Dogs: FC<DogsProps> =  ({ isLoading, getDog, url }) => {

    return <Container maxWidth="lg">
        <div>
        {isLoading ? <p>Идёт поиск хорошего мальчика</p> : url && <img className={styles.img} src={url} alt="" />}
        </div>
        
        <Button variant="contained" onClick={getDog} disabled={isLoading}>Обновить</Button>
    </Container>
}

const mapStateToProps = ({ dogsReducer }: any) => ({ url: dogsReducer.url, isLoading: dogsReducer.isLoading })

const mapDispatchToProps = (dispatch: any) => ({
    getDog: () => dispatch(getDog()),
  })

export default connect(mapStateToProps, mapDispatchToProps)(Dogs);