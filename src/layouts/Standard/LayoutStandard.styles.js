import styled from 'styled-components'

export const LayoutStandard = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  position: relative;
  overflow-y: hidden;
  background: #EEE;
  overflow-y: scroll;
  scrollbar-color: #5E36FF transparent;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
    padding-right: 10px;
  }
  ::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius: 5px;
    background-color: #5E36FF;
    border-top: 1px solid white;
    background-clip: content-box;
  }

  &.loading {
    filter: blur(5px);
  }

  .StandardLayoutHeader {
    position: sticky;
    z-index: 10;
    width: 100%;
    top: 0px;
    transition: top 0.3s ease;
  }

  .StandardLayoutRightPart {
    padding-left: 10px;
  }

  .StandardLayoutContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: ${p => p.isAuth ? '80px' : '0px'};

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

export const LoaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(18, 19, 29, 0.05);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`