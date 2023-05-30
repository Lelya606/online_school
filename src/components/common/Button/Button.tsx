import React from 'react';
import { Button as ButtonComponent } from '@mui/material';
import { ButtonTypes } from 'types/buttonTypes';
import './button.scss';

interface IButtonProps {
  text: string;
  variant: ButtonTypes;
  onClick: () => void;
}

export const Button = ({ text, variant, onClick }: IButtonProps) => (
  <ButtonComponent
    variant={variant}
    sx={{
      border: '1px solid #5F43D0',
      borderRadius: '27px',
      padding: '10px 20px',
      '&:hover': {
        borderColor: '#5F43D0',
        backgroundColor: '#5F43D033',
      },
    }}
    onClick={onClick}
  >
    {text}
  </ButtonComponent>
);
