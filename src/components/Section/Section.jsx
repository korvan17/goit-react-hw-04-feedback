import React from 'react';
import { SectionStyle } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
}
