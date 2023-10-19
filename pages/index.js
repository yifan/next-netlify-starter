import Head from 'next/head'
import { Collapse, useTheme } from '@geist-ui/core'
import { Image, Display, Divider, Text, Description, Grid, Spacer, Page, Card, Button } from '@geist-ui/core'
import { Calendar, MapPin, Gift, Users } from '@geist-ui/icons'

export default function HomePage() {
  const { palette } = useTheme()

  return (
    <div className="container">
      <Head>
        <title>Join us at QCRI Generative AI Hackathon!</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"/>
      </Head>

        <Card height="500px" width="100%" style={{
          backgroundImage: "url('/main-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderWidth: '2px', // Set border width
          borderColor: 'transparent',
          borderStyle: 'solid',
          animation: 'signalTravel 4s infinite linear',
        }}>
          <Card.Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', }}>
            <Text p className="logo" b align="center" style={{ 
              color: palette.violetDark,
              webkitTextStroke: '1px #FFFFFF',
             }}>Generative AI Hackathon</Text>
            <Text span b align="center" font="1.4em" style={{ color: palette.alert, webkitTextStroke: '1px #330000', }}>Dec 7-9, 2023</Text>
            <Text span b align="center" font="1.1em" style={{ color: palette.alert, webkitTextStroke: '1px #330000', }}>Qatar Computing Research Institute, Doha</Text>
          </Card.Content>
        </Card>

        <Spacer h={8} />

      <Page align="center">
          <Text h1 align="center" style={{ color: palette.successLight}}> Why Participate? </Text>
            <Text p>
              Generative AI stands at the forefront of rapid technological advancement, harnessing machine learning algorithms to create fresh and innovative content, ranging from images and music to complete narratives. Join us as we delve into this dynamic realm for an extraordinary hackathon event that brings together developers, data scientists, and AI enthusiasts.
            </Text>

            <Text p>
              During this hackathon, participants will gain hands-on experience in diverse generative AI projects. This includes constructing their own models, experimenting with existing ones, and exploring groundbreaking applications for this cutting-edge technology. Whether you're an accomplished AI expert or just embarking on your journey, our hackathon offers an ideal platform to acquire new skills, connect with kindred spirits, and push the boundaries of generative AI's limitless potential.
            </Text>

            <Text p>
              If you're eager to immerse yourself in this thrilling universe, seize the opportunity to register for the hackathon today. Join us for an unforgettable weekend of innovation, collaboration, and creativity!
            </Text>

        <Spacer h={4} />
          <a href="https://app.micetribe.com/public/workspaces/qcri/events/4429qcri/forms/attendees">
            <Button type="success">Register Now!</Button>
          </a>
        <Spacer h={1} />
          <a href="https://join.slack.com/t/hbku-global/shared_invite/zt-23u6q4r4z-iohL9TZlqNuHuMl_gC4LoQ">
            <Button type="voilet">Join Slack</Button>
          </a>
        <Spacer h={4} />

          <Text h1 align="center" style={{ color: palette.successLight}}>Event Details</Text>
          <Spacer y={2} />
          <Grid.Container gap={8} justify="center">
            <Grid xs={12}>
              <MapPin size={64} color="green" />
              <Spacer x={0.5} />
              <Description title={<Text h4>In-Person</Text>} content={<Text p align="left">This event will be held locally in QCRI, Doha, Qatar</Text>} />
            </Grid>
            <Grid xs={12}>
              <Calendar size={64} color="green"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Dec 7-9</Text>} content={<Text p align="left">December 7 - pre-event, December 8-9 - Hackathon</Text>} />
            </Grid>
            <Grid xs={12}>
              <Users size={64} color="green"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Take Part</Text>} content={<Text p align="left">Participate as a team or join others during the event</Text>} />
            </Grid>
            <Grid xs={12}>
              <Gift size={64} color="green"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Prize</Text>} content={<Text p align="left">Amazing prizes will be brought by you by our partners</Text>} />
            </Grid>
          </Grid.Container>

        <Spacer h={4} />
          <a href="https://app.micetribe.com/public/workspaces/qcri/events/4429qcri/forms/attendees">
            <Button type="success">Register Now!</Button>
          </a>
        <Spacer h={4} />

            <Text h1 align="center" style={{ color: palette.successLight}}>Ideas</Text>
            <Collapse.Group>
              <Collapse title="Education">
                <Text p align="left">
                  Developing generative AI applications for education is essential because it can revolutionize personalized learning, tailoring educational content to individual student needs, strengths, and learning styles. Furthermore, it offers scalable solutions to address educational disparities by providing consistent, high-quality resources to diverse learners globally.
                </Text>
                <Text p align="left">
                  Unlock the future of personalized learning with generative AI! Tailor education to every student's unique strengths and bridge global educational gaps with consistent, top-tier resources. Dive into the revolution today!
                </Text>
              </Collapse>
              <Collapse title="Social Good">
                <Text p align="left">
                  The complexities of modern society, from managing vast data sets in healthcare to addressing urban infrastructure needs, often surpass human analytical capacities. AI can step in as a transformative tool, enabling precise predictions in climate change modeling, optimizing resource allocation in social programs, and fostering global collaborations through real-time language translations.
                </Text>
                <Text p align="left">
                  Empower change with generative AI for Social Good! Harness the power of technology to drive impactful solutions, uplift communities, and create a brighter, more equitable world. Join the movement and make a difference today!
                </Text>
              </Collapse>
              <Collapse title="Healthcare">
                <Text p align="left">
                  The healthcare sector grapples with the overwhelming task of processing vast amounts of patient data, often leading to diagnostic delays and treatment inefficiencies. AI can assist by enabling swift and accurate diagnostics, predicting patient-specific treatment outcomes, and optimizing hospital resource allocation, ensuring timely and personalized care for all.
                </Text>
                <Text p align="left">
                  Transform healthcare with generative AI! Dive into a new era of swift diagnostics, personalized treatments, and optimized patient care.
                </Text>
              </Collapse>
              <Collapse title="Innovation">
                <Text p align="left">
                  Generative AI's potential is truly limitless, transcending the boundaries of healthcare, social good, and education. As the technology evolves, we'll see it reshaping industries we haven't even considered yet, from entertainment and arts to urban planning and space exploration. Its adaptability and expansive capabilities position it as a tool that can revolutionize not just specific sectors, but the very fabric of our daily lives and future endeavors.
                </Text>
                <Text p align="left">
                  We encourage everyone to harness the power of generative AI, bringing forward your innovative ideas to craft unparalleled value for society. Let's collaborate and shape a brighter, more imaginative future together!
                </Text>
              </Collapse>
            </Collapse.Group>


        <Spacer h={8} />


            <Text h2 style={{ color: palette.successLight }}>Sponsor Us</Text>
          <Spacer y={2} />
            <Collapse.Group>
              <Collapse title="Why Sponsor?">
                <ul align="left">
                  <li>
                    <Text b>Foster Regional Talent:</Text> Position your company as a champion of local innovation and talent development.
                  </li>
                  <li>
                    <Text b>Drive Innovation:</Text> Stay at the cutting-edge by supporting and catalyzing new technological breakthroughs.
                  </li>
                  <li>
                    <Text b>Promote Products & Image:</Text> Utilize the hackathon as a platform to showcase your products and enhance brand visibility.
                  </li>
                  <li>
                    <Text b>Build Connections:</Text> Establish valuable relationships with participants, potential future collaborators, and innovators.
                  </li>
                  <li>
                    <Text b>Invest in the Future:</Text> Play an active role in shaping the technological landscape and community growth.
                  </li>
                </ul>
              </Collapse>
              <Collapse title="Technology Partner">
              </Collapse>
              <Collapse title="Platinum Sponsor">
              </Collapse>
              <Collapse title="Gold Sponsor">
              </Collapse>
            </Collapse.Group>

        <Spacer h={8} />

        <Page.Footer>
          <Text type="secondary" align="center" small>
            Copyright &copy; 2023, Qatar Computing Research Institute
          </Text>
        </Page.Footer>
      </Page>
    </div>
  )
}
