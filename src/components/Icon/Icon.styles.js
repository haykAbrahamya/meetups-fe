import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

export const Icon = styled(ReactSVG)`
  z-index: 1;
  > div {
    display: flex;
    > svg {
      width: ${p => p.width};
      height: ${p => p.height};
  }

  * {
    fill: ${p => p.filltoset};
  }
`
