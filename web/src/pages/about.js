import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import seoData from "../data/seo"
import Container from "../components/v1/container"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO {...seoData} title="About | Patrick Johnson" />
      <Container>
        <h1>About</h1>
        <h2>High School</h2>
        <p>
          In high school I knew one thing: I was going to college. I picked my
          major based on the “cool factor” of each major. I entered my freshman
          year of college as a Journalism Major because free clothes sounded
          pretty awesome (fashion journalism was the goal).
        </p>

        <h2>College</h2>
        <p>
          I quickly realized Journalism is hard and not guaranteed. The opposite
          of what people told me life would be like with a college degree so I
          changed to Public Relations because I heard it was a more reliable
          career and paid more overtime.
        </p>
        <p>
          My junior year of college I did one semester at NYU to get a taste of
          the city. I figured since New York City is the #1 media market I
          should probably go there for work. This was a perfect way to see if I
          could make it work in New York considering I never visited before that
          winter semester.
        </p>

        <h2>Real World Pt. 1</h2>
        <p>
          My NYU plan worked out. I had a job immediately after graduating at a
          small advetising agency in Chelsea. I was an account executive and
          couldn’t be happier. I worked with a big name client, American Express
          and felt like gold. Then I realized all we did were emails. And
          sometimes banner ads.
        </p>

        <h2>Real World Pt. 2</h2>
        <p>
          After the first agency I ran through a few more. Trying to find the
          perfect balance of agency life, clients, projects (and project budget)
          and colleagues. But nothing ever really fit. In fact I pretty much
          hated what I was doing. Not because we were stealing from people or
          telling lies but because I wasn’t stimulated and felt like I was
          unable to give my best effort in any capacity. Partly due to company
          politics on the account-team side and partly because my heart wasn’t
          in it.
        </p>

        <p>
          <strong>On February 13, 2013 I was laid off from Digitas.</strong>
        </p>

        <h2>The Decision</h2>
        <p>
          At that point I was faced with a decision: go get another job I hated
          or change my career. Out of shock I applied to one place for a
          strategist position but then realized it was worthless. Luckily I
          landed one last freelance gig as a strategist and created some cushion
          in my bank account. At that point I knew I was going to focus on what
          would make me happy in my professional life: web development.
        </p>

        <h2>The Current</h2>
        <p>
          And thats’s where I am now. I’m a web developer and I love what I do.
          Everyday I get to do what I really enjoy doing. Everyday I get to
          really challenge myself mentally and provide value to people who
          appreciate what I do.
        </p>
        <p>
          I build at work, I build for freelance clients, I build for personal
          projects and just to learn new things. I wouldn’t have it any other
          way.
        </p>

        <h3>How To Reach Me</h3>
        <p>
          Want to reach out? Maybe to just chat? Maybe becauase you’d like to
          work together? You can <a href="mailto:p@pbj.me">email me</a>,{" "}
          <a href="https://www.twitter.com/patrickbjohnson">tweet me</a>,{" "}
          <a href="https://www.github.com/patrickbjohnson">find me on github</a>
          .
        </p>
      </Container>

      <Footer />
    </Layout>
  )
}

export default IndexPage
