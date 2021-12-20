import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import { Button, ButtonGroup, Container } from '@mui/material';

import { getCoffee, changeCoffeeCount } from '../../actions/coffee';
import { useAppDispatch, useAppSelector } from '../../reducers';

import styles from './styles.module.css';

type CoffeeProps = {
  isLoading: boolean,
  getCoffee: () => void,
  changeCoffeeCount: (count: number) => {},
  items: CoffeItem[],
  count: number,
};

type CoffeItem = {
  blend_name: string,
  id: number,
  variety: string,
  intensifier: string,
  notes: string[],
};

const Coffee: FC<CoffeeProps> = ({
  isLoading,
  getCoffee,
  changeCoffeeCount,
  items,
  count,
}) => {
  useEffect(() => {
    getCoffee();
  }, []);

  const handleChangeCount = async (newCount: number) => {
    await changeCoffeeCount(newCount);
    getCoffee();
  };
  return (
    <Container maxWidth="lg">
      <Button variant="contained" onClick={getCoffee} disabled={isLoading}>
        Обновить
      </Button>

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        sx={{
          marginLeft: 1,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => handleChangeCount(5)}
          disabled={isLoading || count === 5}
        >
          По 5
        </Button>

        <Button
          variant="outlined"
          onClick={() => handleChangeCount(10)}
          disabled={isLoading || count === 10}
        >
          По 10
        </Button>
      </ButtonGroup>

      <div>
        {isLoading ? (
          <p>...</p>
        ) : (
          <div className={styles.container}>
            {items.map(
              ({ blend_name, id, variety, intensifier, notes }: CoffeItem) => (
                <div key={id} className={styles.card}>
                  <h2>{blend_name}</h2>
                  <p>{variety}</p>
                  <p>{intensifier}</p>

                  <ul>
                    {notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ coffeeReducer }: any) => {
  const { items, isLoading, count } = coffeeReducer;
  return {
    items,
    isLoading,
    count,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getCoffee: () => dispatch(getCoffee()),
  changeCoffeeCount: (count: number) => dispatch(changeCoffeeCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Coffee);
