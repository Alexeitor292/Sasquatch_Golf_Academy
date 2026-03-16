/* eslint-disable @next/next/no-img-element */
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sasquatch Golf Academy | Book Now",
  description:
    "Premium homepage concept for Sasquatch Golf Academy with a cinematic Virtual Golf 3 hero, restored navigation, and polished booking sections.",
};

export default function SiteHomePage() {
  return (
    <>
      <div className="promo-bar">
        <p className="promo-bar__message">
          First 100 Member Special. Just $225 per month with a one-year commitment.
        </p>
      </div>

      <header className="site-header">
        <div className="header-shell">
          <a className="brand-mark" href="#home" aria-label="Sasquatch Golf Academy home" data-logo-target>
            <img src="/site-prototype/sasquatch.png" alt="Sasquatch Golf Academy" />
          </a>

          <nav className="site-nav" id="primary-nav" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#appointments">Book a Tee Time</a>
            <a href="#lessons">Lessons</a>
            <a href="#events">Event Hosting</a>
            <a href="#clubs">Clubs</a>
            <a href="#faq">FAQ</a>
            <a href="#about">About Us</a>
            <a href="https://sasquatchgolfacademy.com/shop">Shop</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
            <span className="nav-toggle__bars" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="nav-toggle__label">Menu</span>
          </button>
        </div>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          aria-label="Virtual Golf 3 trailer hero"
          data-hero-video-src="https://a.storyblok.com/f/117513/x/2fbefc12c0/vg3_explainer_short_optimized_v3.mp4"
          data-hero-poster="https://a.storyblok.com/f/117513/1920x1080/1fb5f1388f/vg3_explainer_short_optimized.jpg"
          data-hero-start="7"
        >
          <div className="hero-media" aria-hidden="true">
            <img
              className="hero-poster"
              src="https://a.storyblok.com/f/117513/1920x1080/1fb5f1388f/vg3_explainer_short_optimized.jpg"
              alt=""
              data-hero-poster-image
            />
            <video
              className="hero-video"
              data-hero-video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://a.storyblok.com/f/117513/1920x1080/1fb5f1388f/vg3_explainer_short_optimized.jpg"
              tabIndex={-1}
            >
              <source
                src="https://a.storyblok.com/f/117513/x/2fbefc12c0/vg3_explainer_short_optimized_v3.mp4"
                type="video/mp4"
              />
            </video>
            <div className="hero-scrim"></div>
            <div className="hero-vignette"></div>
          </div>

          <div className="hero-logo" data-logo-origin aria-hidden="true">
            <img src="/site-prototype/sasquatch.png" alt="" />
          </div>

          <div className="hero-content">
            <a className="hero-cta" href="#appointments">
              Book Now
            </a>
          </div>
        </section>

        <section className="story-scene" id="about" aria-label="Sasquatch coaching story">
          <div className="story-scene__viewport">
            <div className="story-scene__background" aria-hidden="true">
              <img
                src="https://a.storyblok.com/f/117513/1920x1080/98103ede9a/trackman_simualtor_2_experience_sim_for_everybody_optimized.webp"
                alt=""
              />
            </div>
            <div className="story-scene__overlay" aria-hidden="true"></div>

            <div className="content-shell story-scene__content">
              <div className="story-scene__copy">
                <h1 className="story-scene__statement">
                  <span className="story-sentence story-sentence--lead">
                    <span className="story-fragment" data-story-fragment>
                      Whether your goal is to
                    </span>
                    <span className="story-fragment" data-story-fragment>
                      learn the game,
                    </span>
                    <span className="story-fragment" data-story-fragment>
                      play your best golf,
                    </span>
                    <span className="story-fragment" data-story-fragment>
                      or pursue high level performance.
                    </span>
                  </span>
                  <span className="story-sentence story-sentence--closing">
                    <span className="story-fragment" data-story-fragment>
                      Our team and facilities are here to elevate your journey.
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light" id="lessons">
          <div className="content-shell">
            <div className="section-header">
              <p className="eyebrow">Top Golf Skills</p>
              <h2>Lessons, fittings, and simulator sessions that feel organized at a glance.</h2>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <img
                  src="https://a.storyblok.com/f/117513/1920x1080/98103ede9a/trackman_simualtor_2_experience_sim_for_everybody_optimized.webp"
                  alt="Indoor golfer swinging in front of a simulator screen."
                />
                <div className="feature-card__body">
                  <p className="feature-tag">Lessons</p>
                  <h3>Private coaching with cleaner booking paths.</h3>
                  <p>
                    One-on-one instruction, faster scheduling, and a homepage that leads players toward action instead
                    of clutter.
                  </p>
                </div>
              </article>

              <article className="feature-card">
                <img
                  src="https://a.storyblok.com/f/117513/1200x1200/bad2ae56e0/the_engins_simulators_trackman_golf.webp"
                  alt="Trackman simulator hardware."
                />
                <div className="feature-card__body">
                  <p className="feature-tag">Club Services</p>
                  <h3>Custom clubs and repair presented like a premium service.</h3>
                  <p>
                    Sharper service cards, clearer value messaging, and a layout that makes fitting and repair feel
                    specialized.
                  </p>
                </div>
              </article>

              <article className="feature-card">
                <img
                  src="https://a.storyblok.com/f/117513/1200x1200/e3bfb2be17/software_simulators_trackman_golf.webp"
                  alt="Virtual golf data and simulator software display."
                />
                <div className="feature-card__body">
                  <p className="feature-tag">Simulator Play</p>
                  <h3>Indoor golf nights with a better digital first impression.</h3>
                  <p>
                    Make tee times, leagues, and training sessions feel elevated before players ever walk through the
                    door.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--dark split-section" id="clubs">
          <div className="content-shell split-section__grid">
            <div className="split-media">
              <img
                src="https://a.storyblok.com/f/117513/1200x1200/77c91b0e3c/simulator_booking_payments_web.webp"
                alt="Simulator booking interface on a monitor."
              />
            </div>

            <div className="split-copy">
              <p className="eyebrow">Clubs and Fittings</p>
              <h2>A cleaner path from browsing to fitting, repair, and purchase.</h2>
              <p>
                The current site spreads its value across too many simple blocks. This concept tightens the hierarchy,
                gives club services more presence, and makes the brand feel more established without losing the familiar
                logo and colors.
              </p>
              <a className="text-link" href="#appointments">
                View appointments
              </a>
            </div>
          </div>
        </section>

        <section className="section section--blue split-section" id="events">
          <div className="content-shell split-section__grid split-section__grid--reverse">
            <div className="split-media">
              <img
                src="https://a.storyblok.com/f/117513/1920x1080/98103ede9a/trackman_simualtor_2_experience_sim_for_everybody_optimized.webp"
                alt="Indoor golf simulator experience for guests and events."
              />
            </div>

            <div className="split-copy">
              <p className="eyebrow">Event Hosting</p>
              <h2>Make simulator nights, corporate events, and group play feel worth booking.</h2>
              <p>
                This section can sell the vibe instead of just listing the service. Cleaner imagery, stronger contrast,
                and more intentional spacing help event hosting read like a premium experience rather than another
                generic service tile.
              </p>
              <a className="text-link text-link--light" href="#contact">
                Plan an event
              </a>
            </div>
          </div>
        </section>

        <section className="section section--light" id="appointments">
          <div className="content-shell">
            <div className="section-header">
              <p className="eyebrow">Appointments</p>
              <h2>Simple booking cards, cleaner categories, stronger calls to action.</h2>
            </div>

            <div className="appointment-grid">
              <article className="appointment-card">
                <h3>Custom Golf Clubs</h3>
                <p className="appointment-meta">1 hr | Price varies</p>
                <p>Fit players with equipment that matches their swing and goals.</p>
                <a className="card-button" href="#contact">
                  Book
                </a>
              </article>

              <article className="appointment-card">
                <h3>Golf Club Repair</h3>
                <p className="appointment-meta">1 hr | Price varies</p>
                <p>Repairs, adjustments, and tune-ups presented in a cleaner service flow.</p>
                <a className="card-button" href="#contact">
                  Book
                </a>
              </article>

              <article className="appointment-card">
                <h3>Event Hosting</h3>
                <p className="appointment-meta">3 hrs | Price varies</p>
                <p>Corporate outings, private groups, and premium simulator events.</p>
                <a className="card-button" href="#events">
                  Book
                </a>
              </article>

              <article className="appointment-card">
                <h3>Lesson</h3>
                <p className="appointment-meta">1 hr | Price varies</p>
                <p>Private instruction with a premium digital path from first click to session.</p>
                <a className="card-button" href="#lessons">
                  Book
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--dark" id="faq">
          <div className="content-shell">
            <div className="section-header section-header--left">
              <p className="eyebrow">FAQ</p>
              <h2>Answer the big questions without making the page feel busy.</h2>
            </div>

            <div className="faq-list">
              <details className="faq-item">
                <summary>Can the homepage keep the current brand without feeling outdated?</summary>
                <p>
                  Yes. The goal here is not to replace the identity, but to refine it with cleaner layout, stronger
                  imagery, and premium motion.
                </p>
              </details>

              <details className="faq-item">
                <summary>Can booking and shop flows stay separate for now?</summary>
                <p>
                  Yes. This concept can keep the current external booking and shop links while the brand experience gets
                  redesigned first.
                </p>
              </details>

              <details className="faq-item">
                <summary>Will this scale once ecommerce and booking are consolidated?</summary>
                <p>
                  Yes. The structure is already laid out so simulator play, lessons, club services, events, and future
                  ecommerce can live in one polished system.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="section section--light contact-section" id="contact">
          <div className="content-shell contact-grid">
            <div className="contact-card">
              <p className="eyebrow">Connect With Us</p>
              <h2>Sasquatch Golf Academy</h2>
              <p>4415 Granite Drive Suite 1000, Rocklin, CA, USA</p>
              <p>
                <a href="tel:9162609991">(916) 260-9991</a>
              </p>
              <p>Open 24 hours a day, 7 days a week.</p>
              <a className="contact-button" href="https://sasquatchgolfacademy.com/contact">
                Reach Out to Sasquatch
              </a>
            </div>

            <div className="map-card">
              <div className="map-card__overlay">
                <p className="eyebrow">Visit the Academy</p>
                <h3>Rocklin, California</h3>
                <p>Easy access off I-80 with simulator, coaching, fittings, and event space in one place.</p>
                <a
                  className="text-link"
                  href="https://maps.google.com/?q=4415+Granite+Drive+Suite+1000+Rocklin+CA"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-shell site-footer__content">
          <p>Sasquatch Golf Academy</p>
          <p>Premium concept rooted in the current homepage.</p>
        </div>
      </footer>

      <div className="logo-morph" aria-hidden="true">
        <img src="/site-prototype/sasquatch.png" alt="" />
      </div>

      <Script src="/site-prototype/script.js" strategy="afterInteractive" />
    </>
  );
}
