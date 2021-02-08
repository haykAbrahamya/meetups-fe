import styled from 'styled-components'


import { FlexButton, TextArea } from '../../../../../ui'

export const MeetupFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 610px;
  }
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`

export const ErrorText = styled.div`
  color: #FF3642;
  font-size: 11px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 10px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`

export const SubmitButton = styled(FlexButton)`
  margin-top: 30px;
  width: 100%;
  min-height: 20px;

  @media (min-width: 768px) {
    width: 374px;
    margin-top: 40px;
  }
`

export const ResponseError = styled(ErrorText)`
  margin-bottom: 40px;
`

export const DescriptionInput = styled(TextArea)`
`

export const Label = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
  color: #212121;
`

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 10px;

    &:first-of-type {
      margin-top: 0px;
    }
  }


  @media (min-width: 768px) {
    flex-direction: row;

    > div {
      width: 300px;
      margin-left: 10px;
      margin-top: 0px;

      &:first-of-type {
        margin-left: 0px;
      }
    }
  }
`