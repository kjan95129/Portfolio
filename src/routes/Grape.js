import React, { useEffect } from 'react'
import BackButton from '../components/CaseStudy/BackButton'
import CaseStudyHeader from '../components/CaseStudy/CaseStudyHeader'
import comp_1 from '../static/grape/comp_1.png'
import comp_2 from '../static/grape/comp_2.png'
import comp_3 from '../static/grape/comp_3.png'
import story_1 from '../static/grape/story_1.jpg'
import story_2 from '../static/grape/story_2.jpg'
import prot_1_1 from '../static/grape/prot_1_1.jpg'
import prot_1_2 from '../static/grape/prot_1_2.jpg'
import prot_1_3 from '../static/grape/prot_1_3.jpg'
import prot_2_1 from '../static/grape/prot_2_1.jpg'
import prot_2_2 from '../static/grape/prot_2_2.jpg'
import prot_2_3 from '../static/grape/prot_2_3.jpg'
import ab_1 from '../static/grape/ab_1.png'
import ab_2 from '../static/grape/ab_2.png'
import ab_3 from '../static/grape/ab_3.png'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-73963331-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function Grape() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='grape'>
      <BackButton />
      <CaseStudyHeader
        theme='grape'
        link='http://grapeapp.herokuapp.com/'
        description='Mobile web application that encourages users to perform and keep track of good deeds'
        projectRole='Web Developer. Winter 2015.'
      />
      <section className='content animated fadeInUp'>
        <div className='content-block'>
          <h1>Problem Space</h1>
          <h3>Being a better person is hard</h3>
          <p>People want to do good deeds, but life gets in the way. We often become so absorbed in our own activities and
              work that we forget to acknowledge others or even ourselves.
          </p>
        </div>

        <div className='content-block'>
          <h1>The idea</h1>
          <h3>Personal informatics on deed tracking</h3>
          <p>By doing good deeds regularly and keeping track of them on a consistent basis, we allow ourselves to make time
              and strive to create a more positive environment around us and increase the overall happiness for others
              as well as ourselves.
          </p>
        </div>

        <div className='content-block'>
          <h1>Competition</h1>
          <h3>Other task-tracking apps in the market</h3>
          <p>We had to poke around a bit to make sure that there wasn't an idea identical to ours already in the marketplace.
              We were aware that there were a myriad of task tracking apps, so we had to try to set ourselves apart.
          </p>
        </div>
        <div className='image-pane'>
          <img src={comp_1} alt='first competitive analysis'/>
          <img src={comp_2} alt='second competitve analysis'/>
          <img src={comp_3} alt='third compettive analysis'/>
        </div>
        <div className='content-block'>
          <p>As expected, we did find a ton of task tracking apps. Some apps motivated people with self-improvement and streaks,
              while other apps gave users a way to remind themselves to perform deeds daily.
          </p>
        </div>

        <div className='content-block'>
          <h1>Storyboards</h1>
          <h3>How would people use our app?</h3>
          <p>Following interviews, we did feel like there was need for personal informatics in regards to doing good deeds.
              However, we had to put ourselves in the shoes of our target audience in order to really understand what functions
              they would need.
          </p>
        </div>
        <div className='image-pane'>
          <img src={story_1} alt='first storyboard' />
          <img src={story_2} alt='second storyboard' />
        </div>
        <div className='content-block'>
          <p>The first idea represents a busy person who isn't necessarily trying to avoid good deeds, but simply doesn't
              have the time to. The second idea represents how friends could do good deeds for each other and record it
              through the app as well.
          </p>
        </div>

        <div className='content-block'>
          <h1>Prototyping</h1>
          <h3>Paper prototyping before diving into development</h3>
          <p>We decided to go with two different prototypes to satisfy two different potential users. The first prototype
              focused on being more text based, while the second prototype focused on visualization and gamification of
              the idea. Here are a selection of the pages:
          </p>
        </div>
        <div className='image-pane'>
          <img src={prot_1_1} alt='prototype 1' />
          <img src={prot_1_2} alt='prototype 1' />
          <img src={prot_1_3} alt='prototype 1' />
          <br/>
          <img src={prot_2_1} alt='prototype 2' />
          <img src={prot_2_2} alt='prototype 2' />
          <img src={prot_2_3} alt='prototype 2' />
        </div>
        <div className='content-block'>
          <p>Asking a couple of colleagues, we concluded that the text-based prototype (pictured on the top row) seemed more
              'professional' and simply got the job done. However, many people seemed to be more fond of the second prototype
              (pictured on the bottom row), as it was much more visual than the first. </p>
        </div>

        <div className='content-block'>
          <h1>Heuristic Testing</h1>
          <h3>Checking for missing heuristics in our prototype</h3>
          <p>Although both protoytpes shared some major flow issues when we conducted the tests, doing a further analysis
              on the heuristics allowed us to realize that prototype 2 could be improved by giving the user some amount
              of freedom with respect to navigation, as well as the way data is handled after data entry. The addition
              of a back button would also help tremendously with navigation for the user. It was time to put our concept
              into code.
          </p>
        </div>

        <div className='content-block'>
          <h1>User Testing</h1>
          <h3>Putting the finishing touches on the design of our app</h3>
          <p>After spending a week converting our prototype into code, it was time to test some more. Our usability script
              consisted of targets we would hope the user would reach, such as being able to navigate properly and add/delete
              entries.
          </p>
          <br/>
          <br/>
          <h3>Breakdowns</h3>
          <p>1) We told the user to edit their entry, but the user didn't know you could just press the text directly in order
              to edit.
          </p>
          <p>2) We told the user to complete the challenge and add it to their data, but the person didn't know where to go
              after completing the challenge. The person just stared at the screen for awhile. Rather than looking for
              help using the help button, the person asked us directly.
          </p>
        </div>

        <div className='content-block'>
          <h1>A/B Testing</h1>
          <h3>Making minute changes to things we couldn't test</h3>
          <p>Based on our feedback, we wanted to test if people would be more inclined to click on the different categories
              of deeds based on whether they were displayed in a list or as buttons. We decided to A/B test this to see
              which particular layout would have more conversions. Using google analytics, we could keep track of how many
              times the users click on each one given one of the two layouts.
          </p>
        </div>
        <div className='image-pane'>
          <img src={ab_1} alt='first ab testing' />
        </div>
        <div className='content-block'>
          <p>There were a total of 42 users. 15 had the dropdown bar and 27 had buttons on their reflection page. 4 out of
              15 people changed categories using the dropdown bar, while 9 out of the 27 people changed categories using
              buttons.
          </p>
        </div>
        <div className='image-pane'>
          <img src={ab_2} alt='second ab testing' />
        </div>
        <div className='content-block'>
            <p>Based on the number of participants in our study, we expected 4.643/10.357 people to convert using the dropdown
                bar and half the people to convert using the buttons. These expected values are very close to what we actually
                observed.
            </p>
        </div>
        <div className='image-pane'>
          <img src={ab_3} alt='third ab testing' />
        </div>
        <div className='content-block'>
          <p>The null hypothesis that we decided on was that there is no difference between buttons and the dropdown bar on
              the reflection page. We used the above chi squared test to test this hypothesis. Based on the test our calculated
              value was .02, which was far off from the 3.84 threshold we needed to consider the change significant. Therefore,
              we failed to reject the null hypothesis that here is no difference between the buttons and the dropdown bar.
          </p>
        </div>

        <div className='content-block'>
          <h1>The Final Product</h1>
          <h3>A small video skit demonstrating our app!</h3>
          <p>
            <a target='_blank' rel='noopener noreferrer' className='btn btn-default btn-lg' href='http://grapeapp.herokuapp.com/'>Click here to check it out!</a>
          </p>
          <br/>
        </div>
        <div className='image-pane no-background'>
          <div className='videoWrapper'>
            <iframe title='grapeAd' width='560' height='315' src='https://www.youtube.com/embed/5oXk7_A4s8o' frameborder='0'></iframe>
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </div>
  )
}

export default Grape
