import React, { ReactNode } from 'react';
import { Header } from '../modules/Header/Header';

export interface IMainWrapperProps {
  children: ReactNode;
}

export const MainWrapper = ({ children }: IMainWrapperProps) => (
  <>
    <Header />
    {children}
  </>
);
