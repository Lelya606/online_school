import React from 'react';
import { Box, Typography } from '@mui/material';
import { BigCard } from 'components/common/BigCard/BigCard';
import { ReactComponent as Vkontakte } from 'assets/icons/vk.svg';
import { ReactComponent as Telegram } from 'assets/icons/telegram.svg';
import { ReactComponent as License } from 'assets/icons/license.svg';
import { LEGAL, SAFE } from 'constants/common';
import './footer.scss';

export const Footer = () => (
  <BigCard
    style={{
      borderRadius: '90px 90px 0px 0px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '40px',
    }}
  >
    <Box className="footer-wrapper">
      <Box className="contacts">
        <Typography variant="body1">Контакты</Typography>
        <Typography variant="body2">OOO Спейстустади</Typography>
        <a className="contacts__link" href="tel:+79190074937">
          8 (919) 007 49 37
        </a>
        <a
          className="contacts__link"
          href="mailto:spacetostudyonlineschool@go.ru"
        >
          spacetostudyonlineschool@go.ru
        </a>
        <p className="address">
          602267, Владимирская обл., <br /> г. Муром, ул. Артема, д. 20, кв.63
        </p>
      </Box>
      <Box className="social">
        <Typography variant="body1">Социальные сети</Typography>
        <Box className="social__icons">
          <Vkontakte />
          <Telegram />
        </Box>
      </Box>
      <Box className="license">
        <License />
        <p className="address">
          Образовательная <br />
          лицензия
        </p>
      </Box>
    </Box>
    <Box className="legal-info">
      <Box className="safe">
        {SAFE.map((el: string) => (
          <a className="safe__link" href="/">
            {el}
          </a>
        ))}
      </Box>
      <Box className="legal">
        {LEGAL.map((el: string) => (
          <p className="legal__text">{el}</p>
        ))}
      </Box>
    </Box>
  </BigCard>
);
