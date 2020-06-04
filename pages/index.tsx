import Head from 'next/head'

import { HomeStyles } from '~/components/HomeStyles'
import SpringBoard from '~/components/SpringBoard'
import Dock from '~/components/Dock'
import Header from '~/shared/ui/Header'

import apps from 'shared/data/apps.json'

export default function Home() {
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
            <div className="springBoard">
              {apps.map((appRow, index) => (
                <SpringBoard key={index} apps={appRow} />
              ))}
            </div>

            <Dock className="dock" />
          </div>
        </HomeStyles>
      </main>
    </div>
  )
}
