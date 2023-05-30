import React from 'react';
import { MainWrapper } from 'components/HOC/MainWrapper';
import { Hero } from 'components/modules/Hero/Hero';
import { Courses } from 'components/modules/Courses/Courses';

export const HomePage = () => (
  <MainWrapper>
    <Hero />
    <Courses />
  </MainWrapper>
);
