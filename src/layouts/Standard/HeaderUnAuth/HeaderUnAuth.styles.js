import styled from 'styled-components'
import { Link } from 'react-router-dom'


import { FlexButton } from '../../../ui/FlexButton'

export const HeaderUnAuthContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`

export const HeaderUnAuthWrapper = styled.div`
  display: flex;
  background: #eee;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0px 50px;    
  }

  @media (min-width: 1280px) {
    padding: 0px 150px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  width: 30px;
  height: 25px;
  background: url('/images/icons/logo.svg');
`

export const ProjectName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-left: 15px;
  margin-top: 2px;
  display: none;

  @media (min-width: 1280px) {
    display: block;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const HelperText = styled.div`
  font-size: 13px;
  color: #7D7A86;
  display: none;

  @media (min-width: 1280px) {
    display: block;
  }
`

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 5px;
  padding: 20px 0px;
  width: 146px;
  max-height: 50px;
  color: #5E36FF;
  background: transparent;
  font-size: 13px;
  text-decoration: none;
  outline: none;
  &:hover {
    background: transparent;
  }

  ${FlexButton};

  @media (min-width: 1280px) {
    margin-left: 30px;
    color: #fff;
    background: #5E36FF;

    &:hover {
      background: #7E5EFD;
    }    
  }
`

export const LinksContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const PageLink = styled(Link)`
  text-decoration: none;
  outline: none;
  margin-left: 30px;
  color: #7D7A86;
  font-size: 13px;

  &:first-of-type {
    margin-left: 0px;
  }
`

export const MenuToggler = styled.div`
  width: 18px;
  height: 14px;
  cursor: pointer;
  background: url('/images/icons/toggler.svg');
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`