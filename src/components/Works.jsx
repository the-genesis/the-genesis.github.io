import WorkItem from './WorkItem'
import { works } from '../data/works'

export default function Works() {
  const published = works.filter((work) => work.published)

  return (
    <section className="section works">
      <h1 className="heading">Featured works</h1>

      {published.map((work, index) => (
        <WorkItem key={work.id} work={work} reversed={index % 2 === 1} />
      ))}

      {/* Scroll target for the hero's "Contact me" button. It sits at the end of
          this section — not on the contact section — to match where the old
          <a name="contact-me"> anchor landed. */}
      <span id="contact-me" />
    </section>
  )
}
