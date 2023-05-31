import React from 'react';
import { Typography, Box } from '@mui/material';
import { Button } from 'components/common/Button/Button';
import { BigCard } from 'components/common/BigCard/BigCard';
import { Card } from 'components/common/Card/Card';
import { ButtonTypes } from 'types/buttonTypes';
import './hero.scss';

const { OUTLINED, CONTAINED } = ButtonTypes;

export const Hero = () => (
  <Box className="container-px container-py">
    <BigCard
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '35px',
        borderRadius: '90px',
      }}
    >
      <Typography variant="h1">Подготовимся к ЕГЭ вместе</Typography>
      <Typography variant="h2">только до 3 сентября</Typography>
      <Box className="card-wrapper">
        <Card
          title="1 + 1 = 3"
          style={{
            padding: '20px 136px',
            borderRadius: '100px',
            background: '#C8CDFF',
          }}
        />
        <Typography>три курса по цене двух</Typography>
      </Box>
      <Box className="buttons-wrapper">
        <Button text="Подробнее" variant={OUTLINED} onClick={() => {}} />
        <Button text="Купить" variant={CONTAINED} onClick={() => {}} />
      </Box>
    </BigCard>
  </Box>
);
