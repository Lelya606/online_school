import React from 'react';
import { Button } from 'components/common/Button/Button';
import { Box } from '@mui/material';
import { ButtonTypes } from 'types/buttonTypes';
import './buttons.scss';

const { OUTLINED, CONTAINED } = ButtonTypes;

export const Buttons = () => (
  <Box className="buttons container-px container-py">
    <Button text="Начать учиться" variant={CONTAINED} onClick={() => {}} />
    <Button text="Перейти к курсам" variant={OUTLINED} onClick={() => {}} />
  </Box>
);
