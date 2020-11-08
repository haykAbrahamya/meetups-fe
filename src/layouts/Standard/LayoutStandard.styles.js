import styled from 'styled-components'

export const LayoutStandard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  position: relative;
  overflow-y: hidden;

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
    overflow-y: scroll;
    margin-bottom: ${p => p.isAuth ? '80px': '0px'};

    @media (min-width: 768px) {
      margin: 0px;
    }
  }
`

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 120px;
`