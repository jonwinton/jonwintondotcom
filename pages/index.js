import Head from 'next/head'
import styles from '../styles/Layout.module.css'

export default function Index() {
  return (
    <div className={styles.vcenter}>
      <Head>
        <title>Jon Winton</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className="text-5xl md:text-7xl">
          <span className="text-gray-500 font-thin">Dev</span><span className="text-purple-500 font-semibold">Oops</span>
        </h1>
        <div className="links">
          <ol className="flex mt-8 space-x-4">
            {/* <li className="flex-1">
              <a href="#">About</a>
            </li> */}
            {/* <li className="flex-1">
              <a href="#">Blog</a>
            </li> */}
            <li className="flex-1">
              <a href="https://github.com/jonwinton" target="_blank">GitHub</a>
            </li>
            <li className="flex-1">
              <a href="https://www.linkedin.com/in/jonwinton/" target="_blank">LinkedIn</a>
            </li>
          </ol>
        </div>
        <div className="prose lg:prose-xl p-8">
          My name is Jon and I'm a devops engineer based out of New York focusing on observability and cloud infrastructure. In my free time I'm usually hanging out with my dog, May, or burning something in the kitchen.
        </div>
      </main>
    </div >
  )
}
