import * as React from 'react';
import {
  Box,
  Accordion as AccordionComponent,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { DATA_ACCORDION } from 'constants/common';
import './accordion.scss';

export const Accordion = () => {
  const renderItem = () =>
    DATA_ACCORDION.map((el, index) => (
      <AccordionComponent>
        <AccordionSummary
          expandIcon={<Plus />}
          aria-controls={`panel${index + 1}a-content`}
          id={`panel${index + 1}a-header`}
        >
          <Typography>{el.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{el.text}</Typography>
        </AccordionDetails>
      </AccordionComponent>
    ));

  return (
    <Box className="accordion container-px container-py">
      <Typography variant="body1">FAQ</Typography>
      {renderItem()}
    </Box>
  );
};
