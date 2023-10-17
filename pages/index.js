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

      <Page align="center">
        <Card height="500px" style={{
          backgroundImage: "url('/main-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderWidth: '2px', // Set border width
          borderColor: 'transparent',
          borderStyle: 'solid',
          animation: 'signalTravel 4s infinite linear',
        }}>
          <Card.Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: "100%"}}>
            <Text h1 type="default" align="center" style={{ color: palette.accents_2, background: palette.background}}>Generative AI Hackathon</Text>
            <Text span align="center" style={{ color: palette.accents_2, background: palette.background}}>December 7-9, 2023</Text>
            <Text span align="center" style={{ color: palette.accents_2, background: palette.background}}>Multi-purpose Room</Text>
            <Text span align="center" style={{ color: palette.accents_2, background: palette.background}}>Qatar Computing Research Institute, Doha</Text>
          </Card.Content>
        </Card>

        <Spacer h={8} />

          <Text h2 align="center" style={{ color: palette.accents_2}}> What is Generative AI? </Text>
          <Text blockquote align="center">
          Generative AI is an emerging technology that has been growing in popularity due to its tremendous potential for a wide range of applications. At its core, it is an artificial intelligence system designed to generate content, such as text, images, or music, for a variety of purposes. One notable example of such technology is ChatGPT, which has the ability to create human-like responses in the context of a conversation. The advancement of generative AI has enabled more efficient solutions for numerous industries, such as customer service, content creation, and entertainment. Its continued development promises to reshape how we interact with technology, leading to more seamless and efficient AI-driven experiences, and unlocking new opportunities for personalized, engaging, and creative interactions.
          </Text>
          <Button type="success">Register Now!</Button>

        <Spacer h={8} />

            <Text h2 style={{ color: palette.accents_2}}>Event Details</Text>
          <Spacer y={2} />
          <Grid.Container gap={8} justify="center">
            <Grid xs={12}>
              <MapPin size={64} color="green" />
              <Spacer x={0.5} />
              <Description title={<Text h4>In-Person</Text>} content={<Text p align="left">This event will be held at QCRI</Text>} />
            </Grid>
            <Grid xs={12}>
              <Calendar size={64} color="green"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Dec 7-9, 2023</Text>} content={<Text p align="left">December 7 - pre-event, December 8-9 - Hackathon</Text>} />
            </Grid>
            <Grid xs={12}>
              <Users size={64} color="green"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Participants</Text>} content={<Text p align="left">You have to work as teams. Bring your own team or join others.</Text>} />
            </Grid>
            <Grid xs={12}>
              <Gift size={64} color="green"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Prize</Text>} content={<Text p align="left">The product you build will be judged, and the winner team will win a monetory prize</Text>} />
            </Grid>
          </Grid.Container>

        <Spacer h={8} />

            <Text h2 type="secondary">Themes</Text>
            <Collapse.Group>
              <Collapse title="Education">
                <Text p>Use Generative AI for Education</Text>
              </Collapse>
              <Collapse title="Social Good">
                <Text p>Use Generative AI for Social Good</Text>
              </Collapse>
              <Collapse title="Healthcare">
                <Text p>Use Generative AI for Healthcare</Text>
              </Collapse>
              <Collapse title="Innovative Ideas">
                <Text p>Use Generative AI for Entertainment</Text>
              </Collapse>
            </Collapse.Group>


        <Spacer h={8} />


            <Text h2 type="secondary">Partners and Sponsors</Text>
          <Spacer y={2} />
          <Grid.Container gap={2} justify="center">
            <Grid xs={6}>
              <Card shadow width="100%">
                <Text h4>Sponsor Name</Text>
                <Image src="/hackathon-logo.png" width="300px" height="180px" />
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card shadow width="100%">
                <Text h4 type="warning">Sponsor Name</Text>
                <Image src="/hackathon-logo.png" width="300px" height="180px" />
              </Card>
            </Grid>
            <Grid xs={6}>
              <Card shadow width="100%">
                <Text h4 type="link">Sponsor Name</Text>
                <Image src="/hackathon-logo.png" width="300px" height="180px" />
              </Card>
            </Grid>
          </Grid.Container>

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
