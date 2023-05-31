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
  <ButtonComponent variant={variant} onClick={onClick}>
    {text}
  </ButtonComponent>
);
