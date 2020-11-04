import styled from 'styled-components'


export const StrengthCheckerContainer = styled.div`
  display: flex;
  > div {
    background: ${p => p.lineColor};
  }
`

export const StrengthLine = styled.div`
  flex: 1;
  height: 3px;
  border-radius: 10px;
  margin-left: 5px;

  &.empty {
    background: #D0D0D0;
  }

  &:first-of-type {
    margin: 0px;
  }

  @media (min-width: 768px) {
    margin-left: 7px;
  }
`