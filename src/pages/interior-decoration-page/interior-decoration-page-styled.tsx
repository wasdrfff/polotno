import styled from "styled-components";
import {variables} from "../../variables";

export const WorkStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  width: 120px;

  @media screen and (max-width: ${variables.sizes.tablet}) {
    gap: 20px;
    width: 80px;
  }
`

export const WorkStepTitle = styled.div`
  display: flex;
  align-items: center;
  
  height: 80px;
  text-align: center;

  @media screen and (max-width: ${variables.sizes.tablet}) {
    font-size: 15px;
    height: 60px;
  }
  
`