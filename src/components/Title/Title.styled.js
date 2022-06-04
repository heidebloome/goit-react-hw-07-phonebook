import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

export const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  margin-bottom: ${props => props.theme.spacing(5)};
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.theme.spacing(props.mt)};
    `};
`;

Title.propTypes = {
  mt: propTypes.number,
};
