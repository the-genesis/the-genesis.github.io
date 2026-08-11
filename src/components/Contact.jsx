export default function Contact() {
  return (
    <section className="section contact-me">
      <h1 className="heading">Contact me</h1>

      <div className="form-div">
        <form action="https://formspree.io/xlewqkgv" method="POST">
          <input name="name" type="text" placeholder="What's your name?" />
          <br />
          <input name="_replyto" type="email" placeholder="What's your email address?" />
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Please leave a message"
          />
          <br />
          <button className="btn submit" type="submit" value="Send">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
