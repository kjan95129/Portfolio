import React, { useEffect } from 'react'
import BackButton from 'components/CaseStudy/BackButton'
import CaseStudyHeader from 'components/CaseStudy/CaseStudyHeader'
import storyboard_1 from 'static/violet/storyboard_1.jpg'
import storyboard_2 from 'static/violet/storyboard_2.jpg'
import storyboard_3 from 'static/violet/storyboard_3.jpg'
import driver_1 from 'static/violet/driver_1.png'
import driver_2 from 'static/violet/driver_2.png'
import driver_3 from 'static/violet/driver_3.png'
import valet_1 from 'static/violet/valet_1.png'
import valet_2 from 'static/violet/valet_2.png'
import valet_3 from 'static/violet/valet_3.png'
import competition_1 from 'static/violet/competition_1.png'
import branding_1 from 'static/violet/branding_1.png'
import branding_2 from 'static/violet/branding_2.png'
import landing_1 from 'static/violet/landing_1.png'
import landing_2 from 'static/violet/landing_2.png'
import adresults_1 from 'static/violet/adresults_1.png'
import adresults_2 from 'static/violet/adresults_2.png'
import enactments_1 from 'static/violet/enactments_1.png'

function Violet() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='violet'>
      <BackButton />
      <CaseStudyHeader
        theme='violet'
        link=''
        description='Mobile web application concept for a peer-to-peer valet service.'
        projectRole='Product Designer. Winter 2017.'
      />
      <section className='content animated fadeInUp'>
        <div className='content-block'>
          <h1>Initial Problem Space</h1>
          <h3>Electric Vehicle chargers are not easily accessible.</h3>
          <p>With the introduction of the Tesla 3, Ev's are expected to go mainstream by 2030. By this year, electric vehicles
              are expected to make up 40% of total cars sold. However, electric vehicle chargers are extremely hard to
              find while traveling in more rural areas, making driving an electric vehicle impractical.
          </p>
        </div>

        <div className='content-block'>
          <h1>How might we...</h1>
          <h3>Initial questions to potentially solving consumers' problem</h3>
          <ul>
            <li>
                <p>How might we help EV owners residing in less urbanized areas get easier access to charging stations?</p>
            </li>
            <li>
                <p>How might we help EV owners spend their time while waiting for their cars to charge?</p>
            </li>
            <li>
                <p>How might we make the charging process faster?</p>
            </li>
            <li>
                <p>How might we have the user pay for renting out their unused personal chargers?</p>
            </li>
          </ul>
        </div>

        <div className='content-block'>
          <h1>Storyboards</h1>
          <h3>Potential uses cases for EV problems</h3>
          <p>Putting ourselves in the shoes of EV owners, our team came up with a couple of scenarios that EV owners would
              run into. I was tasked with creating one storyboard, as well a google form to survey individuals on /r/electricvehicles,
              as well as a couple of public facebook EV advocate groups. Here are a couple of the storyboards our team
              came up with.
          </p>
        </div>

        <div className='image-pane'>
          <img src={storyboard_1} alt='storyboard'/>
          <img src={storyboard_2} alt='storyboard'/>
          <img src={storyboard_3} alt='storyboard'/>
        </div>

        <div className='content-block'>
          <p>The responses to some storyboards weren't great. Here were some of my favorites:</p>
          <br/>

          <p className='text-center'>
            <em>'Ridiculous. Call an Uber when you F-up.'</em>
          </p>
          <br/>

          <p className='text-center'>
            <em>'Needs a serious amount of trust (e.g. rating system) for me to dare loan my car to a random stranger.'</em>
          </p>
          <br/>

          <p className='text-center'>
            <em>'Elong will need to mow several lawns and perform unspeakable sexual favors along the way to rack up enough
                3 hour charges to make it to SF. He intended to spend the weekend with his parents but it took him until
                Sunday morning to get there and he's going to miss work Monday morning because he cannot get back to
                LA in time unless he changes cars.'
            </em>
          </p>
        </div>

        <div className='content-block'>
          <h1>Dead-ends</h1>
          <h3>EV's won't really work. Lots of problems.</h3>
          <p>After a total of 42 responses on our google survey, we realized that a lot of potential solutions to the problems
              dealing with EV's just aren't very feasible. The main dead-ends we ran into were:
          </p>

          <ul>
            <li>
                <p>People don't want to car swap</p>
            </li>
            <li>
                <p>EV market is small, scalability is the real issue</p>
            </li>
            <li>
                <p>Many big companies could easily implement our proposed solutions if EV-conscious</p>
            </li>
          </ul>
        </div>

        <div className='content-block'>
          <h1>Proposed Pivot</h1>
          <h3>A peer-to-peer valet service</h3>
          <p>We then turned back to brainstorming within the vehicle industry, and came to the idea of parking, specifically
              on campus. Parking is always a huge hassle at my alma-mater UCSD, but we wanted to stray away from the typical
              parking app. Instead, our team came up with an idea of a peer-to-peer valet service, similar to that of Uber.
              People could pay others to get their car parked, and other people could earn money parking peoples' cars.
          </p>
        </div>

        <div className='content-block'>
          <h1>How it works</h1>
          <h3>How does it work for drivers?</h3>
          <p>Need your car parked? When you’re having trouble finding a parking spot, Violet helps you call a valet to park
              your car. You can schedule a valet ahead of time, or right when you find yourself lost in a parking lot.
              Our valets will drive your car to a legal, safe and accessible spot so that you don’t have to worry about
              parking. You will have the option to either provide your valet with a spare key which the valet will store
              somewhere in the car after their service, or we can provide you with a secure lock box with GPS tracking
              that you can unlock using the app or a unique PIN code. Valets will store your keys in this box for you or
              any other valets to pick up later. Still unsure? Violet provides up to $25,000 in insurance for any damages
              done by our valets. Valets will also be rated by other users and you can where your valet is going at any
              time.
          </p>
        </div>

        <div className='image-pane'>
          <img src={driver_1} alt='driver' />
          <img src={driver_2} alt='driver' />
          <img src={driver_3} alt='driver' />
        </div>

        <div className='content-block'>
          <h3>How does it work for valets?</h3>
          <p>Have time on your hands and want to make extra cash? Violet can help you find drivers willing to pay you to find
              them a parking spot. The driver will meet up with you, and all you have to do is park their car for them.
              We’ll automatically add the money to your account. If you run into a problem with their car, don't worry.
              Violet will insure the customer's car, so your problems are our problems. Note: Valets will have to go through
              a background check to ensure they will be a good fit with us. </p>
        </div>

        <div className='image-pane'>
          <img src={valet_1} alt='valet' />
          <img src={valet_2} alt='valet' />
          <img src={valet_3} alt='valet' />
        </div>

        <div className='content-block'>
          <h1>Competitive Analysis</h1>
          <h3>Does this already exist?</h3>
          <p>Diving headfirst into the idea, we decided to compare the idea to some existing companies and refined our proposed
              business model to separate our idea from the rest of the pack.
          </p>
        </div>

        <div className='image-pane'>
          <img src={competition_1} alt='competition' />
        </div>

        <div className='content-block'>
          <p>As shown above, there are a few limitations that some of our competitors had to their product, and it was our
              full intention to alleviate these detriments. We could provide valet services anytime and anywhere.</p>
        </div>

        <div className='content-block'>
          <h1>Branding Probes</h1>
          <h3>Potential brands and color schemes of our concept</h3>
          <p>We decided to conduct some A/B testing with two different brand concepts we refined. Along with this, we used
              a free $50 coupon on google adsense to see which brand would result in the most clickthroughs.
          </p>
        </div>

        <div className='image-pane'>
          <img src={branding_1} alt='branding' />
          <img src={branding_2} alt='branding' />
          <img src={landing_1} alt='landing' />
          <img src={landing_2} alt='landing' />
        </div>

        <div className='content-block'>
          <p>We used a service called unbouncepages to launch our A/B websites, as well as keep track of our google adsense.
              It's a pretty cool service, so I'd encourage anyone to check it out! After allowing ads to run for a week,
              we were ready to see the results. </p>
        </div>

        <div className='image-pane'>
          <img src={adresults_1} alt='ad results' />
          <img src={adresults_2} alt='ad results' />
        </div>

        <div className='content-block'>
          <p>Although Brand B had a higher conversion rate at 7.84%, the majority of the clicks were from searches containing
              the word 'drive', and this was a result of most people searching for the term 'google drive'. Brand A had
              a lower conversion rate, but the clickthrough keywords were much more along the lines of what we were targeting,
              with 'valet' being a highly searched word. We also got some actual signups through this landing page!</p>
        </div>

        <div className='content-block'>
          <h1>Service enactments</h1>
          <h3>Trial runs of how the app would potentially work</h3>
          <p>We conducted a couple of service enactments using a fake mockup of the app, and these were some of our results
          </p>
        </div>

        <div className='image-pane'>
          <img src={enactments_1} alt='enactments' />
        </div>

        <div className='content-block'>
          <h1>The Final Product</h1>
          <h3>A small video skit demonstrating our product!</h3>
        </div>
        <div className='image-pane no-background'>
          <div className='videoWrapper'>
            <iframe title='violetAd' width='560' height='315' src='https://www.youtube.com/embed/jSKom5hG8i4' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Violet
