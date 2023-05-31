import React from 'react';
import { Box, Typography } from '@mui/material';
import './card.scss';

type TypeObject = { [key: string]: string };

export interface ICardProps {
  title: string;
  style: { [key: string]: string | TypeObject };
  onClick?: () => void;
}

export const Card = ({ title, style, onClick }: ICardProps) => (
  <Box
    className={onClick ? 'active' : 'inActive'}
    sx={{
      boxShadow: '0px 4px 15px rgba(95, 67, 208, 0.1)',
      ...style,
    }}
  >
    <Typography>{title}</Typography>
  </Box>
);
