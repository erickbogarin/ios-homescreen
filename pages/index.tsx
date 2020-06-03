import Head from 'next/head'

import { HomeStyles } from '~/components/HomeStyles'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeStyles>
          <div className="body"></div>
        </HomeStyles>
      </main>
    </div>
  )
}
