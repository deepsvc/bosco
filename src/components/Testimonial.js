import React from "react";

function Testimonial() {
  return (
    <div className="py-5" style={{ background: "white", height: "50vh" }}>
      <h1
        className="my-5"
        style={{
          color: "rgb(234, 13, 41)",
          fontWeight: "800",
        }}
      >
        TESTIMONIAL
      </h1>
      <div
        id="carouselExampleControls2"
        class="carousel slide items-align-center"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p
              style={{
                fontStyle: "italic",
                fontSize: "1.125rem",
              }}
            >
              Had a pretty good experience in getting my Fuji CrossPro Ultegra
              Cyclocross serviced. Stanley was kind enough to get the bike
              serviced replaced parts as necessary. <br /> *All the service
              requirements are available and done with professional tools on a
              work station.
              <br /> *Service is done at a domestic place. So you can stand next
              to bike, see what work is going on and eat heads with your
              questions.
              <br /> *Parts if not available are procured from outside at no
              extra cost.
              <br /> *Call up and fix your time for bike service to avoid
              delays.
              <br /> Rest assured, your bike is in good hands even if there is a
              slight delay.
            </p>
            <div class="d-none d-md-block">
              <h5>- Chinmaya Halkare</h5>
            </div>
          </div>
          <div class="carousel-item">
            <p
              style={{
                fontStyle: "italic",
                fontSize: "1.125rem",
              }}
            >
              I give ⭐️⭐️⭐️⭐️⭐️ It’s a place where our Bicycles take
              rebirth and you will feel like that your back on your New bike
              riding.
              <br /> Work - Excellent.
              <br /> Parts - Genuine parts are used to fix back.
              <br /> Staff - Stanley explains the issues and advises for the
              Difference and different types of parts.
              <br /> Over my experience - I felt Very Happy, Learnt new things
              about my bike which I can practice and implementing in my daily
              rides.
            </p>
            <div class="d-none d-md-block">
              <h5>- Peter Punith</h5>
            </div>
          </div>
          <div class="carousel-item">
            <p
              style={{
                fontStyle: "italic",
                fontSize: "1.125rem",
              }}
            >
              Bosco Bicycle Works is one of the best bicycle services that I
              have come across.
              <br /> Stanley is knowledgeable, professional, has a good value
              and hard working.
              <br /> I would recommend to people who are passionate bikers to
              get your bicycle serviced here, trust me you will not be
              disappointed.
              <br /> And they also pickup and drop facility!
            </p>
            <div class="d-none d-md-block">
              <h5>- Mathew</h5>
            </div>
          </div>

          <div class="carousel-item">
            <p
              style={{
                fontStyle: "italic",
                fontSize: "1.125rem",
              }}
            >
              Perfect. Lucky to find them. I was referred to them by a pro
              rider.
              <br /> Personal attention. Well trained. Stanly is the man! I
              serviced my cycle before a long tour.
              <br /> And also have taken his help for a few regular maintenance
              on some of my other cycles.
              <br /> I used to service with some of the best bike stores in
              bangalore.
              <br /> They are all very professional but usually need to get on a
              waitlist to find time with them.
              <br /> Also for routine service they can get needlessly expensive.
              <br /> With Stanly, quick work and good value. Highly recommend.
            </p>
            <div class="d-none d-md-block">
              <h5>- Ravi Kittu</h5>
            </div>
          </div>

          <div class="carousel-item">
            <div class="d-block w-100">
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1.125rem",
                }}
              >
                Good value service run by young and passionate team who have
                <br />
                experience working within the bicycle industry for many years.
              </p>
            </div>
            <div class="d-none d-md-block">
              <h5>- Mathew James</h5>
            </div>
          </div>

          <div class="carousel-item">
            <div class="d-block w-100">
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1.125rem",
                }}
              >
                Stanly is the Man behind this... He works with passion in his
                heart!
                <br /> Try his services and you'll never regret 👍🏽
              </p>
            </div>
            <div class="d-none d-md-block">
              <h5>- Maria Precina</h5>
            </div>
          </div>

          <div class="carousel-item">
            <div class="d-block w-100">
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1.125rem",
                }}
              >
                Got my Triban RC500 serviced in December. Cycle still feels
                smooth after 700kms !
              </p>
            </div>
            <div class="d-none d-md-block">
              <h5>- Nishanth N</h5>
            </div>
          </div>

          <div class="carousel-item">
            <div class="d-block w-100">
              <p
                style={{
                  fontStyle: "italic",
                  fontSize: "1.125rem",
                }}
              >
                I had given my bike for service and once I received it back had
                an 100 percent blissfull experience with it!!!!
              </p>
            </div>
            <div class="d-none d-md-block">
              <h5>- Anto Lenin</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls2"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls2"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Testimonial;
