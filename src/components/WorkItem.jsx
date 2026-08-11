export default function WorkItem({ work, reversed }) {
  return (
    <div className={`work-container${reversed ? ' alt-work' : ''}`}>
      <div className={`work-text${reversed ? ' alt-text' : ''}`}>
        <a className="link" target="_blank" rel="noopener noreferrer" href={work.href}>
          {work.title}
        </a>
        <p>{work.description}</p>
      </div>
      <div className={`work-image${reversed ? ' alt-image' : ''}`}>
        <img id={work.imageId} src={work.image} alt={work.alt} />
      </div>
    </div>
  )
}
