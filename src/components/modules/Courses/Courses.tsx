import React, { useMemo } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { BigCard } from 'components/common/BigCard/BigCard';
import { DATA_CARDS } from 'constants/common';
import './courses.scss';

interface IDataCard {
  title: string;
  text: string[];
}

export const Courses = () => {
  const renderCard = ({ title, text }: IDataCard, index: number) => (
    <BigCard
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '70px',
        rowGap: '24px',
        maxWidth: '900px',
      }}
    >
      <div className="card-index">{index + 1}</div>
      {title && <Typography variant="body1">{title}</Typography>}
      {text.map((element, idx) => (
        <>
          <Typography variant="body2">{element}</Typography>
          {idx !== text.length - 1 && <Divider light />}
        </>
      ))}
    </BigCard>
  );

  const renderCards = useMemo(
    () => DATA_CARDS.map((data, index) => renderCard(data, index)),
    [],
  );

  return (
    <Box className="courses container-px container-py">
      <Typography variant="body1">О курсках</Typography>
      <Typography variant="body2">
        Все обучающие материалы находятся на одной платформе
      </Typography>
      <Box className="courses-cards">{renderCards}</Box>
    </Box>
  );
};
