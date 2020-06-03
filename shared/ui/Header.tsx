import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { FaSignal, FaWifi, FaBatteryFull } from 'react-icons/fa'

const headerStyle = css`
  font-size: 11px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  color: white;
  font-weight: bold;
  .bar {
    background: black;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: 22px;
    padding-bottom: 5px;
  }
  .bar__line {
    display: block;
    width: 20%;
    height: 35%;
    background: #171717;
    border-radius: 20px;
    margin: 0;
    padding: 0;
  }
  .bar__circle {
    position: relative;
    display: block;
    width: 12px;
    height: 80%;
    border: 2px solid #171717;
    margin-left: 5px;
    border-radius: 50%;
  }
  .bar__circle::before {
    content: '';
    position: absolute;
    left: 1px;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 2px;
    background-image: linear-gradient(to top, rgba(255, 0, 0, 0), blue);
    border-left-color: blue;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  .bar__circle::after {
    content: '';
    position: absolute;
    right: 1px;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 2px;
    background-image: linear-gradient(to top, rgba(255, 0, 0, 0), blue);
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  .icons {
    display: flex;
    align-items: center;
  }
  .icons svg:not(:first-child) {
    margin-left: 5px;
  }
`

const HomeStyles = styled.header`
  ${headerStyle}
`

function Header() {
  return (
    <HomeStyles>
      <span>9:41</span>
      <span className="bar">
        <span className="bar__line" />
        <span className="bar__circle" />
      </span>
      <span className="icons">
        <FaSignal />
        <FaWifi />
        <FaBatteryFull />
      </span>
    </HomeStyles>
  )
}

export default Header
