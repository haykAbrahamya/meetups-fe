import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AvatarCard = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
`

export const AvatarImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${p => !p.path ? '#a4a4a4' : `url(${p => p.path})`};
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -1px;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const Fullname = styled.div`
  font-size: 14px;
  color: #555;
`

export const Username = styled.div`
  font-size: 13px;
  color: #555;
  margin-top: 4px;
  opacity: 0.7;
`