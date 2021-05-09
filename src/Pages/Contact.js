import React, { useEffect } from "react";
import AOS from "aos";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    {/* <i className="bi bi-geo-alt"></i> */}
                    <i className="fa fa-map"></i>
                    <h3>Address</h3>
                    <p>
                      Mitranagar-19,
                      <br />
                      New Buspark
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="fa fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +977-9851014562
                      <br />
                      +977-9851014562
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="fa fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      mohan@gmail.com
                      <br />
                      mohan@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="fa fa-clock"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Sunday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
      {/* <!-- Start Map --> */}
      <div id="mapid" style={{ width: "100%", height: "300px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.489588618791!2d85.30596071448565!3d27.733041382781234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18de63b16877%3A0xf9b94f93b0b10fb!2smitranagar%20newbuspark!5e0!3m2!1sen!2snp!4v1619681307252!5m2!1sen!2snp"
          width="100%"
          height="100%"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
