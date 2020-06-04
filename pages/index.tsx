import Head from 'next/head'
import { MutableRefObject } from 'react'

import { HomeStyles } from '~/components/HomeStyles'
import SpringBoard from '~/components/SpringBoard'
import Dock from '~/components/Dock'
import Navigation from '~/components/Navigation'
import Header from '~/shared/ui/Header'
import useScrollDrag from '~/shared/hooks/useScrollDrag'

import apps from 'shared/data/apps.json'

export default function Home() {
  const [base, ref] = useScrollDrag()

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="IOS Homescreen" />
      </Head>

      <main>
        <HomeStyles>
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
        </HomeStyles>
      </main>
    </div>
  )
}
