import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 60px 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1110px;
  width: 100%;
  gap: 60px;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.span`
  font-size: 25px;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 540px;
  max-height: 400px;
`;
