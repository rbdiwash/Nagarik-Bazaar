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
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>

          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-md-6">
                  <div class="info-box">
                    {/* <i class="bi bi-geo-alt"></i> */}
                    <i class="fa fa-map"></i>
                    <h3>Address</h3>
                    <p>
                      Mitranagar-19,
                      <br />
                      New Buspark
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i className="fa fa-phone"></i>
                    <h3>Call Us</h3>
                    <p>
                      +977-9851014562
                      <br />
                      +977-9851014562
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="fa fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      mohan@gmail.com
                      <br />
                      mohan@gmail.com
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="fa fa-clock"></i>
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

            <div class="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                class="php-email-form"
              >
                <div class="row gy-4">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div class="col-md-6 ">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
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
