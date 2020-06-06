import styled from '@emotion/styled'

import Weather from '../../svgs/weather.svg'
import Wallet from '../../svgs/wallet.svg'
import Reminders from '../../svgs/reminders.svg'
import Calendar from '../../svgs/calendar.svg'
import AppStore from '../../svgs/app-store.svg'
import Settings from '../../svgs/settings.svg'
import Maps from '../../svgs/maps.svg'
import Tv from '../../svgs/tv.svg'
import Stocks from '../../svgs/stocks.svg'
import Home from '../../svgs/home.svg'
import Camera from '../../svgs/camera.svg'
import Notes from '../../svgs/notes.svg'
import Clock from '../../svgs/clock.svg'
import Health from '../../svgs/health.svg'
import News from '../../svgs/news.svg'
import Phone from '../../svgs/phone.svg'
import Mail from '../../svgs/mail.svg'
import Itunes from '../../svgs/itunes.svg'

const StyledIcon = styled.div`
  svg {
    width: 48px;
    height: 48px;
  }
`

function Icon({ name }) {
  const icons = {
    weather: <Weather />,
    wallet: <Wallet />,
    reminders: <Reminders />,
    calendar: <Calendar />,
    appStore: <AppStore />,
    settings: <Settings />,
    maps: <Maps />,
    tv: <Tv />,
    stocks: <Stocks />,
    home: <Home />,
    camera: <Camera />,
    notes: <Notes />,
    clock: <Clock />,
    health: <Health />,
    news: <News />,
    phone: <Phone />,
    mail: <Mail />,
    itunes: <Itunes />,
  }

  return <StyledIcon>{icons[name] || null}</StyledIcon>
}

export default Icon
