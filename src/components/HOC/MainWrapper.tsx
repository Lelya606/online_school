import React, { ReactNode } from 'react';
import { Header } from 'components/modules/Header/Header';
import { Footer } from 'components/modules/Footer/Footer';

export interface IMainWrapperProps {
  children: ReactNode;
}

export const MainWrapper = ({ children }: IMainWrapperProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
