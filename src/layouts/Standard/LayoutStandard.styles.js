import styled from 'styled-components'

export const LayoutStandard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: ${p => p.isAuth ? 'row' : 'column'};
  position: relative;

  .StandardLayoutHeader {
    position: sticky;
    z-index: 10;
    width: 100%;
    top: 0px;
    transition: top 0.3s ease;
  }

  .StandardLayoutContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
  }
`
