import "./testimonials.css"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Get In Touch</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className="container contact__container">
        {
          Testimonials.map(testimonials => <a key={testimonials.id} href={testimonials.link} target="_blank" rel="noopener noreferrer">{testimonials.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Testimonials
