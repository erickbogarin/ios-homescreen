import { useEffect, useState, useCallback, MutableRefObject } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const navigationStyle = css`
  .menu__list {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .menu__item {
    color: rgba(255, 255, 255, 0.4);
    font-size: 40px;
    line-height: 0.5;
    margin: 0;
    padding: 0;
  }
  .menu__item.active {
    color: white;
  }
`

type NavigationProps = {
  scrollRef: MutableRefObject<HTMLDivElement>
}

const StyledNavigation = styled.nav`
  ${navigationStyle}
`

function Navigation({ scrollRef }: NavigationProps) {
  const [total, setTotal] = useState(0)
  const [current, setCurrent] = useState(0)

  const setNavigation = useCallback(() => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

    setTotal(Math.floor(scrollWidth / clientWidth))
    setCurrent(Math.floor(scrollLeft / clientWidth))
  }, [scrollRef])

  useEffect(() => {
    scrollRef.current.addEventListener('scroll', setNavigation)
  }, [scrollRef, setNavigation])

  useEffect(setNavigation, [])

  return (
    <StyledNavigation>
      <ul className="menu__list">
        {Array(total)
          .fill(0)
          .map((_, index) => (
            <li
              key={index}
              className={`menu__item ${current === index && 'active'}`}
            >
              <span role="link">·</span>
            </li>
          ))}
      </ul>
    </StyledNavigation>
  )
}

export default Navigation
