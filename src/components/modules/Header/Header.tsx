import React, { useMemo } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { Button } from 'components/common/Button/Button';
import { PAGES } from 'constants/common';
import { ReactComponent as Logo } from 'assets/icons/logo.svg';
import { ButtonTypes } from 'types/buttonTypes';
import './header.scss';

const { OUTLINED } = ButtonTypes;

export const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderLinkTab = useMemo(
    () =>
      Object.entries(PAGES).map(([key, data]) => (
        <Tab
          component="a"
          onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            event.preventDefault();
          }}
          label={data.title}
          href={data.href}
          key={key}
        />
      )),
    [value],
  );

  return (
    <div className="container-px container-py">
      <div className="header">
        <Logo />
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            {renderLinkTab}
          </Tabs>
        </Box>
        <Button text="Войти" variant={OUTLINED} onClick={() => {}} />
      </div>
    </div>
  );
};
