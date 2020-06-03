import Head from 'next/head'

import { HomeStyles } from '~/components/HomeStyles'
import Header from '~/shared/ui/Header'

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
          <div className="body"></div>
        </HomeStyles>
      </main>
    </div>
  )
}
