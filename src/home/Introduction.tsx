import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'

const Introduction: React.FC = () => {
  return (
    <article className="self-end">
      <h2 className="mb-3 text-7xl font-semibold ">Hello! I am</h2>
      <h1 className="text-7xl font-semibold mb-8 text-primary-main">
        Stoil Radkov
      </h1>
      <p className="text-text-main text-xl mb-8">
        A software enginner specializing in full stack web development as well
        as cloud applications.
      </p>
      <div aria-roledescription="Social media accounts" className="flex gap-4">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/stoil-radkov-278361156/"
          className="inline-block"
        >
          <img className="w-14 h-12" src={linkedin} alt="linkedin logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/stoilradkov"
          className="inline-block"
        >
          <img className="w-12 h-12" src={github} alt="github logo" />
        </a>
      </div>
    </article>
  )
}

export default Introduction
