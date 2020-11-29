import styled from 'styled-components'
import { Link } from 'react-router-dom'



export const MeetupDetailsPageContainer = styled.div`
  height: 100%;
  padding: 15px;

  @media (min-width: 768px) {
    padding: 30px
  }
  @media (min-width: 1280px) {
    padding: 50px;
  }
`

export const MeetupCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #c6c3c3;
  border-radius: 7px;
  padding: 20px 20px 10px;
  width: calc(100% - 40px);
  margin-bottom: 10px;
  height: 100%;

  @media (min-width: 1280px) {
    margin: 10px;
  }
`

export const Label = styled.div`
  color: #797584;
  margin: 5px 5px 10px;
  line-height: 23px;

  > span {
    color: #646464;
    margin-left: 5px;
  }
`

export const MeetupInfo = styled.div`
  margin-bottom: 15px;
`

export const UserCard = styled(Link)`
  display: flex;
  width: 100%;
  margin-bottom: 3px;
  color: #646464;
  text-decoration: none;
  outline: none;
  align-items: center;
  transition: all 0.3s ease;
  padding: 5px;
  border-radius: 5px;
  margin-top: auto;

  > span {
    margin-left: 10px;
  }

  &:hover {
    background: #a4a8a8;
  }
`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -1px;
  border-radius: 50%;
  background: ${p => !p.path ? '#d7d7d7' : `url(${p => p.path})`};
  color: #fff;
`