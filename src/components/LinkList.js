import React from "react";
import styled from "styled-components";

const ListWrapper = styled.section`
  padding: 20px;
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 55px;
  & > * {
    line-height: 1.5em;
    margin-bottom: 0.5em;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: ${(props) => props.theme.size.mmd};
  color: ${(props) => props.theme.color.grayB2};
`;

const Section = styled.div`
  font-size: 28px;
  font-weight: 700;
`;

const LinkList = () => {
  return (
    <ListWrapper>
      <Title>내 모금함 만들기</Title>
      <Section>사연 신청하기</Section>
      <Title>프로젝트 둘러보기</Title>
      <Section>주목할 만한 사연</Section>
      <Section>방금 시작된 모금</Section>
    </ListWrapper>
  );
};

export default LinkList;
