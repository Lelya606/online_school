import React from 'react';
import { MainWrapper } from 'components/HOC/MainWrapper';
import { Hero } from 'components/modules/Hero/Hero';
import { Courses } from 'components/modules/Courses/Courses';
import { Teacher } from 'components/modules/ Teacher/Teacher';
import { Buttons } from 'components/modules/Buttons/Buttons';
import { Accordion } from 'components/modules/Accordion/Accordion';

export const HomePage = () => (
  <MainWrapper>
    <Hero />
    <Courses />
    <Teacher />
    <Buttons />
    <Accordion />
  </MainWrapper>
);
