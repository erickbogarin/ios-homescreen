import { css } from '@emotion/core'
import styled from '@emotion/styled'

const homeScreenStyle = css`
  background-image: url('img/homescreen.webp');
  background-size: cover;
  position: fixed;
  height: 100%;
  width: 100vw;
  border-radius: 25px;
  border: 5px solid black;
  user-select: none;
  @media (min-width: 480px) {
    max-height: 600px;
    width: 300px;
  }
  .body {
    display: flex;
    flex-direction: column;
    max-height: inherit;
    height: calc(100% - 22px);
  }
  .springBoard {
    flex-grow: 1;
    display: flex;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    cursor: move;
    cursor: grab;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .dock {
    margin-bottom: 5px;
  }
`

export const HomeStyles = styled.div`
  ${homeScreenStyle}
`
