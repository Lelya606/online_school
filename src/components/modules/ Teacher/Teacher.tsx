import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { BigCard } from 'components/common/BigCard/BigCard';
import { Card } from 'components/common/Card/Card';
import { SubjectsType } from 'types/subjectsType';
import { SUBJECT_COLOR, URL_IMG, TEACHER_LIST } from 'constants/common';
import './teacher.scss';

interface ITeacher {
  url: string;
  name: string;
}

export const Teacher = () => {
  const [teacher, setTeacher] = useState<ITeacher>({
    name: '',
    url: URL_IMG,
  });

  const getData = async () => {
    const response = await fetch(
      'https://mocki.io/v1/32e1c37b-c1d9-4427-9ea4-e5fde8eec41b',
    );
    if (response.ok) {
      const data = await response.json();
      setTeacher(data);
    } else {
      console.log(response.status);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderSubjects = () =>
    Object.values(SubjectsType).map((value: SubjectsType) => (
      <Card
        title={value}
        onClick={() => {}}
        style={{
          padding: '20px 50px',
          borderRadius: '100px',
          borderColor: SUBJECT_COLOR[value],
          borderWidth: '2px',
          borderStyle: 'solid',
          '&:active': {
            background: SUBJECT_COLOR[value],
          },
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      />
    ));

  return (
    <Box className="teacher container-py">
      <BigCard
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderRadius: '70px',
          rowGap: '24px',
          padding: '50px 20px',
        }}
      >
        <Typography variant="body1">Преподаватель</Typography>
        <Card
          title="ЕГЭ"
          style={{
            alignSelf: 'center',
            padding: '20px 136px',
            borderRadius: '100px',
            background: '#C8CDFF',
          }}
        />
        <Box className="subjects-wrapper">{renderSubjects()}</Box>
        <Box className="teacher-card">
          <img className="teacher-card__img" src={teacher.url} alt="teacher" />
          <Box className="teacher-card__info">
            <Typography>{teacher.name}</Typography>
            <ul>
              {TEACHER_LIST.map((el: string) => (
                <li className="teacher-card__item" key={el}>
                  {el}
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </BigCard>
    </Box>
  );
};
