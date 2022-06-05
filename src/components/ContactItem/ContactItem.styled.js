import styled, { css } from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Text = styled.span`
  ${props =>
    props.fwb &&
    css`
      font-weight: bold;
    `};
`;
