import Head from 'next/head'

import { HomeStyles } from '~/components/HomeStyles'
import SpringBoard from '~/components/SpringBoard'
import Header from '~/shared/ui/Header'

import apps from 'shared/data/apps.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
          </div>
        </HomeStyles>
      </main>
    </div>
  )
}
