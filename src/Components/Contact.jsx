import MainLayout from "./Layout/MainLayout";
import "./Contact.css";
const Contact =()=>{
    return (
    <div>
        <MainLayout>
        <div className="contact-page">
      <h1>Contact Me</h1>
      <p>If you have any questions or inquiries, feel free to get in touch!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>

        <button type="submit" className="contact-btn">Send</button>
      </form>
    </div>
        </MainLayout>
    </div>
    )
};
 export default Contact;  