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
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
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
