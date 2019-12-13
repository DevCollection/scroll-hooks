import React from 'react';
import styled from 'styled-components';
import { featureImage } from '../../../assets';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 120px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 580px;
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  List: styled.div`
    width: fit-content;
    margin-bottom: 2rem;
  `,
  ListItem: styled.p`
    ${props => props.theme.typography.description};
    padding: 1rem 1rem 1rem 0;
    border-bottom: 1px solid ${props => props.theme.palette.lightgray};
    span {
      color: ${props => props.theme.palette.secondary};
    }
  `,
  TextButton: styled.button`
    width: fit-content;
    ${props => props.theme.typography.textbutton};
    color: ${props => props.theme.palette.secondary};
    cursor: pointer;
  `,
  Image: styled.div`
    width: 580px;
    height: 580px;
    background: no-repeat center/cover url(${featureImage});
  `,
};

const Feature = () => (
  <S.Wrapper>
    <S.TextWrapper>
      <S.Label>Our Features</S.Label>
      <S.Title>
        Pulvinar elementum <br />
        integer enim neque
      </S.Title>
      <S.Description>
        Senectus et netus et malesuada. Nunc pulvinar sapien et ligula
        ullamcorper malesuada proin. Neque convallis a cras semper auctor.
      </S.Description>
      <S.List>
        <S.ListItem>
          <span>•</span> A lacus vestibulum sed arcu non odio euismod lacinia.
        </S.ListItem>
        <S.ListItem>
          <span>•</span> In tellus integer feugiat scelerisque.
        </S.ListItem>
        <S.ListItem>
          <span>•</span> Feugiat in fermentum posuere urna nec tincidunt
          praesent.
        </S.ListItem>
      </S.List>
      <S.TextButton>Read more about our serives</S.TextButton>
    </S.TextWrapper>
    <S.Image />
  </S.Wrapper>
);

export default Feature;
