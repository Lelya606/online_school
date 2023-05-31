import React from 'react';
import { Box } from '@mui/material';

export interface IBigCardProps {
  children: React.ReactNode;
  style: { [key: string]: string };
}

export const BigCard = ({ children, style }: IBigCardProps) => (
  <Box
    sx={{
      padding: '50px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 15px rgba(95, 67, 208, 0.1)',
      ...style,
    }}
  >
    {children}
  </Box>
);
