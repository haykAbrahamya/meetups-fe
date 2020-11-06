import styled from 'styled-components'

export const LayoutStandard = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  position: relative;

  .StandardLayoutHeader {
    position: sticky;
    z-index: 10;
    width: 100%;
    top: 0px;
    border-bottom: 1px solid #d2d2d2;
    transition: top 0.3s ease;
  }

  .StandardLayoutContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    > * {
      flex: 1;
    };
    position: relative;
  }
`
