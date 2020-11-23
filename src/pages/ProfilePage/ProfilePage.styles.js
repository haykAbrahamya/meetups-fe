import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1280px) {
    padding: 50px 50px 50px 60px;
  }
`

export const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fffaed;
  border-radius: 5px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0px;
  }
`

export const Label = styled.div`
  color: #B5B2BD;
  margin-bottom: 7px;

  > span {
    color: #646464;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`

export const ConnectionList = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const ConnectionCard = styled(Link)`
  display: flex;
  margin-bottom: 3px;
  color: #646464;
  text-decoration: none;
  outline: none;
  align-items: center;
  transition: all 0.3s ease;
  padding: 5px;
  border-radius: 5px;
  width: 300px;

  > span {
    margin-left: 10px;
  }

  &:hover {
    background: #d2c7fd;
  }

  &:last-child {
    margin-bottom: 0px;
  }

`

export const ConnectionContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0px;
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

export const EmptyList = styled.div`
  margin-left: 20px;
  color: #646464;
  font-size: 14px;
`