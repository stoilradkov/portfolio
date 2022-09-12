import Head from 'next/head'
import EducationSection from '../components/education/EducationSection'
import education from '../components/education/education.json'

const Education: React.FC = () => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <section className="flex flex-col space-y-10 mb-6 md:items-center md:space-y-20 lg:flex-row lg:items-start lg:justify-between lg:space-x-20 lg:space-y-0">
        <EducationSection title="Education" items={education.education} />
        <EducationSection title="Certificates" items={education.certificates} />
      </section>
    </>
  )
}

export default Education
