import Image from 'next/image'
import linkedin from '../../public/linkedin.png'
import github from '../../public/github.png'
import { imageLoader } from '../../utils/loader/loader'

const Introduction: React.FC = () => {
  return (
    <article className="self-end text-center">
      <h2 className="mb-3 lg:text-7xl font-semibold text-5xl">Hello! I am</h2>
      <h1 className="text-7xl font-semibold mb-8 text-primary-main">
        Stoil Radkov
      </h1>
      <p className="text-text-main lg:text-xl text-2xl mb-8">
        A software engineer specializing in full stack web development as well
        as cloud applications.
      </p>
      <div
        aria-roledescription="Social media accounts"
        className="flex justify-center lg:justify-start space-x-4"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/stoil-radkov-278361156/"
          className="inline-block"
        >
          <Image
            loader={imageLoader}
            src={linkedin}
            alt="linkedin logo"
            width={56}
            height={48}
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/stoilradkov"
          className="inline-block"
        >
          <Image
            loader={imageLoader}
            src={github}
            alt="github logo"
            width={48}
            height={48}
          />
        </a>
      </div>
    </article>
  )
}

export default Introduction
