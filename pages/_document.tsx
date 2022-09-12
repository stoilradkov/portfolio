import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Stoil Radkov is a software engineer with more than three years of experience. His strongest skills are related to full stack web development as well as cloud applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
