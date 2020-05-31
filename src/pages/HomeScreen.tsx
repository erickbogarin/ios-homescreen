/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import Dock from 'components/Dock'
import SpringBoard from 'components/SpringBoard'
import Navigation from 'components/Navigation'
import Header from 'shared/ui/Header'
import useScrollDrag from 'shared/hooks/useScrollDrag'
import { MutableRefObject } from 'react'

import apps from 'shared/data/apps.json'

const homeScreenStyle = css`
  background-image: url('https://i.pinimg.com/originals/7c/33/f7/7c33f78ca6c13ab76714a9ac634f53e7.png');
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

const HomeScreen = () => {
  const [base, ref] = useScrollDrag()

  return (
    <div css={homeScreenStyle}>
      <Header />
      <div className="body">
        <div className="springBoard" {...base}>
          {apps.map((appRow, index) => (
            <SpringBoard key={index} apps={appRow} />
          ))}
        </div>

        <Navigation scrollRef={ref as MutableRefObject<HTMLDivElement>} />
        <Dock className="dock" />
      </div>
    </div>
  )
}

export default HomeScreen
