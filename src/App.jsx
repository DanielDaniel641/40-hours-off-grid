import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const fundraisingGoal = 1000;
  const [currentDonations, setCurrentDonations] = useState(248);

  const percentRaised = Math.min(
    (currentDonations / fundraisingGoal) * 100,
    100
  );

  return (
    <div className="site">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Whangārei Boys' High School</p>

            <h1>
              40
              <span>HOURS</span>
              <span>OFF GRID</span>
            </h1>

            <div className="title-line"></div>

            <h3>40 hours. One challenge. A bigger purpose.</h3>

            <p className="hero-description">
              Daniel Pollard and Dylan Mansell are taking on a 40-hour bush
              camping challenge at Nihotetea Stream to raise money and awareness
              for communities in the Solomon Islands through the 40 Hour
              Challenge.
            </p>

            <div className="hero-buttons">
              <a
                className="button primary"
                href="https://fundraise.worldvision.org.nz/fundraisers/danielp131/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate Now
              </a>

              <a className="button secondary" href="#info">
                Learn More
              </a>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <p>Fundraising Goal</p>
              <h3>${fundraisingGoal}</h3>
            </div>

            <div className="stat-card">
              <p>Raised So Far</p>
              <h3>${currentDonations}</h3>
              <div className="progress-bar">
                <div style={{ width: `${percentRaised}%` }}></div>
              </div>
            </div>

            <div className="stat-card">
              <p>Location</p>
              <h3>Nihotetea Stream</h3>
            </div>

            <div className="stat-card">
              <p>Date</p>
              <h3>Friday, 19th June</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section notice-section">
        <div className="notice-card">
          <span>
          </span>
        </div>
      </section>

      <section id="info" className="section">
        <div className="section-heading">
          <p className="eyebrow">Learn more</p>
          <h2>The Challenge & Why It Matters</h2>
        </div>

        <div className="card-grid two">
          <div className="card">
            <h3>The Challenge</h3>
            <p>
              For 40 hours, we will be camping in the bush with minimal gear.
              The challenge is designed to push us outside our comfort zone
              while raising money for people facing much harder challenges every
              day.
            </p>
          </div>

          <div className="card">
            <h3>Why We’re Doing It</h3>
            <p>
              We want this challenge to be more than just camping. By filming
              the experience and sharing the fundraiser, we hope to raise
              awareness and encourage more people to support the 40 Hour
              Challenge.
            </p>
          </div>
        </div>
      </section>

      <section className="section darker">
        <div className="section-heading">
          <p className="eyebrow">Where donations go</p>
          <h2>Supporting Families In Solomon Islands</h2>
        </div>

        <div className="card-grid two">
          <div className="card">
            <h3>What Donations Help With</h3>
            <ul>
              <li>Food and nutrition support for families</li>
              <li>Seeds, farming tools, and support for growing food</li>
              <li>Clean water and community support</li>
              <li>Climate-smart agriculture training</li>
              <li>Long-term support for children and communities</li>
            </ul>
          </div>

          <div className="card">
            <h3>Our Goal</h3>
            <p>
              Our goal is to raise $1,000 for the 40 Hour Challenge. Every
              donation, no matter the amount, helps us get closer to that goal.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">The crew</p>
          <h2>Meet The Team</h2>
        </div>

        <div className="card-grid three">
          <div className="card">
            <h3>Daniel Pollard</h3>
            <p className="role">Age 14</p>
            <p>
              Co-leading the challenge, helping with filming, planning, and
              promoting the fundraiser.
            </p>
          </div>

          <div className="card">
            <h3>Dylan Mansell</h3>
            <p className="role">Age 14</p>
            <p>
              Taking on the 40-hour challenge and helping document the full
              experience.
            </p>
          </div>

          <div className="card">
            <h3>Sam Hoddle</h3>
            <p className="role">Support Crew</p>
            <p>
              Helping with daily check-ins, GoPro batteries, and safety support.
            </p>
          </div>
        </div>
      </section>

     <section className="section darker">
  <div className="section-heading">
    <p className="eyebrow">Location</p>
    <h2>Nihotetea Stream</h2>
  </div>

  <div className="gallery-grid">
    <img src="/40-hours-off-grid/images/drone1.png" alt="Drone shot 1" />
    <img src="/40-hours-off-grid/images/drone2.png" alt="Drone shot 2" />
    <img src="/40-hours-off-grid/images/drone3.png" alt="Drone shot 3" />
    <img src="/40-hours-off-grid/images/drone4.png" alt="Drone shot 4" />
  </div>
</section>


      <section className="section darker">
        <div className="section-heading">
          <p className="eyebrow">Planning checklist</p>
          <h2>Challenge Item List</h2>
        </div>

        <div className="card-grid three">
          <div className="card">
            <h3>Shelter & Sleep</h3>
            <ul>
              <li>Tent, tarp, or hammock</li>
              <li>Sleeping bag and sleeping mat</li>
              <li>Pegs, ropes, and ground sheet</li>
              <li>Warm layers and rain protection</li>
            </ul>
          </div>

          <div className="card">
            <h3>Safety & Water</h3>
            <ul>
              <li>Water bottles or water container</li>
              <li>First aid kit</li>
              <li>Headlamp or torch</li>
              <li>Phone and emergency power bank</li>
              <li>Offline map and daily check-in plan</li>
            </ul>
          </div>

          <div className="card">
            <h3>Filming Gear</h3>
            <ul>
              <li>GoPros and charged batteries</li>
              <li>SD cards and charging plan</li>
              <li>Drone footage</li>
              <li>Tripod or selfie stick</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="donate" className="donate-section">
        <div className="donate-box">
          <p className="eyebrow">Support the fundraiser</p>
          <h2>Help Us Reach Our $1,000 Goal</h2>

          <p>
            Every donation helps support communities in the Solomon Islands
            through the 40 Hour Challenge. Even a small donation helps us get
            closer to our goal.
          </p>

          <div className="donation-progress">
            <div>
              <strong>${currentDonations}</strong>
              <span>raised so far</span>
            </div>

            <div>
              <strong>${fundraisingGoal}</strong>
              <span>goal</span>
            </div>
          </div>

          <a
            className="button primary big"
            href="https://fundraise.worldvision.org.nz/fundraisers/danielp131/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Here
          </a>
        </div>
      </section>

      <footer>
        <p>40 Hours Off Grid • 2026</p>
      </footer>
    </div>
  );
}