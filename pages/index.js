import Head from 'next/head'
import Link from 'next/link'
import { Collapse, Note, Table, useTheme } from '@geist-ui/core'
import { Image, Text, Description, Grid, Spacer, Page, Card, Button } from '@geist-ui/core'
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
              WebkitTextStroke: '1px #FFFFFF',
             }}>Generative AI Hackathon</Text>
            <Text span b align="center" font="1.4em" style={{ color: palette.alert, WebkitTextStroke: '1px #330000', }}>Dec 7-9, 2023</Text>
            <Text span b align="center" font="1.1em" style={{ color: palette.alert, WebkitTextStroke: '1px #330000', }}>Qatar Computing Research Institute, Doha</Text>
          </Card.Content>
        </Card>

        <Spacer h={8} />

      <Page align="center">
          <Text h1 align="center" style={{ color: palette.successLight}}> Why Participate? </Text>
            <Text p>
              <Text span b>Generative AI</Text> stands at the forefront of rapid technological advancement, harnessing machine learning algorithms to create fresh and innovative content, ranging from images and music to complete narratives. Join us as we delve into this dynamic realm for an extraordinary hackathon event that brings together developers, data scientists, and AI enthusiasts.
            </Text>

            <Text p>
              During this hackathon, participants will gain hands-on experience in diverse <Text span b>Generative AI</Text> projects. This includes constructing their own models, experimenting with existing ones, and exploring groundbreaking applications for this cutting-edge technology. Whether you're an accomplished AI expert or just embarking on your journey, our hackathon offers an ideal platform to acquire new skills, connect with kindred spirits, and push the boundaries of generative AI's limitless potential.
            </Text>

            <Text p>
              If you're eager to immerse yourself in this thrilling universe, seize the opportunity to register for the hackathon today. Join us for an unforgettable weekend of <Text span b>innovation</Text>, <Text span b>collaboration</Text>, and <Text span b>creativity</Text>!
            </Text>

        <Spacer h={4} />
          <a href="https://app.micetribe.com/public/workspaces/qcri/events/4429qcri/forms/attendees">
            <Button type="success" disabled>Registration Closed!</Button>
          </a>
        <Spacer h={1} />
          <a href="https://join.slack.com/t/qcrigenaihack2023/shared_invite/zt-28dgxcyv4-w3cMtf1q3VegBdeiTALbFg">
            <Button type="voilet">Join Slack</Button>
          </a>
        <Spacer h={4} />

        <Grid.Container gap={12} justify="center">
          <Grid >
            <div style={{ display: 'flex', flexDirection: 'column', padding: 8, background: palette.successLighter, width: '12em' }}>
              <div style={{ flex: '1' }}>
              <Text h4 align="center" style={{ color: palette.successLight }}>Registrations</Text>
              </div>
              <div style={{ flex: 'none' }}>
              <Text h1 align="center" style={{ color: palette.success }}>277</Text>
              </div>
            </div>
          </Grid>
          <Grid>
            <div style={{ display: 'flex', flexDirection: 'column', padding: 8, background: palette.successLighter, width: '12em' }}>
              <div style={{ flex: '1' }}>
              <Text h4 align="center" style={{ color: palette.successLight }}>Countries</Text>
              </div>
              <div style={{ flex: 'none' }}>
              <Text h1 align="center" style={{ color: palette.success }}>10</Text>
              </div>
            </div>
          </Grid>
        </Grid.Container>

        <Spacer h={4} />

        <Text h1 style={{ color: palette.successLight }}>Pre-Hackathon</Text>
        <Grid.Container gap={2}>
          <Grid xs={24} md={12}>
            <Card width='100%' shadow align="left">
              <Image my={0}
                src="https://media.licdn.com/dms/image/D4D22AQGwPAvGtkk_kw/feedshare-shrink_1280/0/1698005401661?e=1701302400&v=beta&t=VRKRE0nlKzARuqWds7esNb2w-z6YyDAWnaDsfKmhhtw"
              />
              <Text p my={0} small>📅 Date: October 29, 2023</Text>
              <Text p mt={0} mb={1} small>⏰ Time: 10:00 to 12:00 (GMT+3)</Text>
              <div align="right">
                <Link target="_blank" href="https://www.linkedin.com/posts/firoj-alam-0a96206_llms-benchmarking-workshop-activity-7121950851526504448-kDGi/?utm_source=share&utm_medium=member_desktop"><Button scale={.25}>click for details</Button></Link>
              </div>
            </Card>
          </Grid>
          <Grid xs={24} md={12}>
            <Card width='100%' shadow align="left">
              <Image my={0}
                src="/event2.png"
              />
              <Text p my={0} small>📅 Date: November 20, 2023</Text>
              <Text p mt={0} mb={1} small>⏰ Time: 16:00 to 18:00 (GMT+3)</Text>
              <Text p mt={0} mb={1} small>📍 Innovation Cafe at the Pearl - Qatar </Text>
              <div align="right">
                <Link target="_blank" href="http://events.adlqatar.qa/#undefined?fbclid=PAAab34f2k7ZGKoRpL0OmI3yq7ietlMkFrRIL56qdMWJnN9dfULfAUj8MP9gg_aem_AfohzJVRBkzI7Bfaj7GXHKI-wzLD7QVHn3uO0BmUJV9VPL_tkxpN_WBZHuVMyB946Dc"><Button scale={.25}>click for details</Button></Link>
              </div>
            </Card>
          </Grid>
        </Grid.Container>

        <Spacer h={8} />

        <Text h1 align="center" style={{ color: palette.successLight}}>Sponsors</Text>
        <Grid.Container gap={2} justify="center" style={{alignItems: "center"}}>
          <Grid xs={8}>
            <Image src="/shell.svg" style={{minWidth:"80px", maxWidth:"100%", minHeight:"80px", height:"auto"}}/>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center" style={{alignItems: "center"}}>
          <Grid xs={10}>
            <Image src="/google.svg" style={{minWidth:"80px", maxWidth:"100%", minHeight:"80px", height:"auto"}}/>
          </Grid>
          <Grid xs={10}>
            <Image src="/microsoft.svg" style={{minWidth:"80px", maxWidth:"100%", minHeight:"80px", height:"auto"}}/>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center" style={{alignItems: "center"}}>
          <Grid xs={7}>
            <Image src="/logrhythm.png" style={{minWidth:"60px", maxWidth:"100%", minHeight:"60px", height:"auto"}}/>
          </Grid>
          <Grid xs={7}>
            <Image src="/mannai.png" style={{minWidth:"60px", maxWidth:"100%", minHeight:"60px", height:"auto"}}/>
          </Grid>
        </Grid.Container>
        <Grid.Container gap={2} justify="center" style={{alignItems: "center"}}>
          <Grid xs={3}>
            <Image src="/talabat.jpg" style={{maxWidth:"100%", maxHeight:"80px", height:"auto"}}/>
          </Grid>
          <Grid xs={3}>
            <Image src="/unicef.jpg" style={{maxWidth:"100%", maxHeight:"80px", height: "auto"}}/>
          </Grid>
        </Grid.Container>


        <Spacer h={8} />

          <Text h1 align="center" style={{ color: palette.successLight}}>Event Details</Text>
          <Spacer y={2} />
          <Grid.Container gap={8} justify="center">
            <Grid xs={12}>
              <MapPin size={64} color="blue" />
              <Spacer x={0.5} />
              <Description title={<Text h4>In-Person</Text>} content={<Text p align="left">This event will be held locally in QCRI, Doha, Qatar</Text>} />
            </Grid>
            <Grid xs={12}>
              <Calendar size={64} color="blue"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Dec 7-9</Text>} content={<Text p align="left">December 7 - pre-event, December 8-9 - Hackathon</Text>} />
            </Grid>
            <Grid xs={12}>
              <Users size={64} color="blue"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Take Part</Text>} content={<Text p align="left">Participate as a team or join others during the event</Text>} />
            </Grid>
            <Grid xs={12}>
              <Gift size={64} color="blue"/>
              <Spacer x={0.5} />
              <Description title={<Text h4>Prize</Text>} content={<Text p align="left">QAR 40k worth of cash prizes and devices</Text>} />
            </Grid>
          </Grid.Container>

          <Spacer h={2} />

        <Note label="Rules">As an essential part of our commitment to fostering an open, transparent, and collaborative environment, all participating teams in this hackathon are required to create a public repository on GitHub specifically for their project. This repository must be clearly labeled with the name of the hackathon, and should include comprehensive documentation of the project's progress, code, and any resources used. It serves as a digital footprint of your team's work and encourages knowledge sharing within the wider community. Additionally, consistent and active participation throughout the hackathon is mandatory for all team members. Attendance is not only crucial for team dynamics and project progression but also ensures a fair and competitive environment for all participants. Failure to comply with these guidelines may result in disqualification. Let's collaborate, innovate, and build something amazing, while upholding these standards of participation and transparency.</Note>

          <Spacer h={2} />
            <a href="https://app.micetribe.com/public/workspaces/qcri/events/4429qcri/forms/attendees">
              <Button type="success">Register Now!</Button>
            </a>
          <Spacer h={4} />

            <Text h1 align="center" style={{ color: palette.successLight}}>Challenges</Text>
            <Collapse.Group>
              <Collapse title="Socrates Assessment (QCRI)">
                <Text p align="left">
                  Details coming soon...
                </Text>
              </Collapse>
              <Collapse title="Enterprise AI Search (UNICEF)">
                <Text p align="left">
                  Giga's vast institutional knowledge is dispersed across multiple platforms, making timely information retrieval challenging. The absence of a centralized, intelligent system to access this knowledge impedes efficiency and leads to repetitive efforts. 
                </Text>
              </Collapse>
              <Collapse title="Regulatory Analytical Tool for Connectivity (UNICEF)">
                <Text p align="left">
                  The telecommunication sector is governed by a myriad of regulations that vary nationally. Stakeholders, including initiatives like Giga which aims to connect all schools to the Internet, often find it challenging to navigate this complex regulatory landscape. This complexity can lead to potential non-compliance, hindered progress, and missed opportunities for innovation in connecting schools.
                </Text>
              </Collapse>
              <Collapse title="App Reviews Mining (TALABAT)">
                <Text p align="left">
                  <strong>talabat</strong> relies on user feedback to enhance its services continuously. However, the scattered nature of app reviews across various platforms poses a challenge in harnessing meaningful insights promptly. The absence of a centralized system for mining and analyzing app reviews hampers the efficient identification of user concerns and data-driven improvements. 
                </Text>
              </Collapse>
              <Collapse title="Innovation (YOUR TEAM)">
                <Text p align="left">
                  Generative AI's potential is truly limitless, transcending the boundaries of healthcare, social good, and education. As the technology evolves, we'll see it reshaping industries we haven't even considered yet, from entertainment and arts to urban planning and space exploration. Its adaptability and expansive capabilities position it as a tool that can revolutionize not just specific sectors, but the very fabric of our daily lives and future endeavors.
                </Text>
                <Text p align="left">
                  We encourage everyone to harness the power of generative AI, bringing forward your innovative ideas to craft unparalleled value for society. Let's collaborate and shape a brighter, more imaginative future together!
                </Text>
              </Collapse>
            </Collapse.Group>


        <Spacer h={8} />

          <Text h1 style={{ color: palette.successLight }}>Schedule</Text>
          <Spacer y={2} />
          <Grid.Container gap={4} justify="center">
            <Grid xs={8} style={{display: 'flex', flexDirection: 'column'}}>
              <Text>Thursday, December 7, 2023</Text>
              <Table data={[
                { Time: '3:00 PM', Activity: 'Registration' },
                { Time: '4:00 PM', Activity: 'Welcome' },
                { Time: '4:30 PM', Activity: 'Technical Overview' },
                { Time: '5:00 PM', Activity: 'Pitch your Ideas' },
                { Time: '5:30 PM', Activity: 'Team Formation' },
                { Time: '6:00 PM', Activity: 'Dinner' },
              ]}>
                <Table.Column prop="Time" label="Time" />
                <Table.Column prop="Activity" label="Activity" />
              </Table>
            </Grid>

            <Grid xs={8} style={{display: 'flex', flexDirection: 'column'}}>
              <Text>Friday, December 8, 2023</Text>
              <Table data={[
                { Time: '8:00 AM', Activity: 'Registration' },
                { Time: '8:30 AM', Activity: 'Breakfast' },
                { Time: '9:00 AM', Activity: 'Hack' },
                { Time: '12:00 PM', Activity: 'Lunch' },
                { Time: '12:30 PM', Activity: 'Hack' },
                { Time: '3:00 PM', Activity: 'Snack/Break' },
                { Time: '6:00 PM', Activity: 'Dinner' },
                { Time: '6:30 PM', Activity: 'Hack' },
                { Time: '9:00 PM', Activity: 'Snack/Break' },
                { Time: '9:30 PM', Activity: 'Hack' },
              ]}>
                <Table.Column prop="Time" label="Time" />
                <Table.Column prop="Activity" label="Activity" />
              </Table>
            </Grid>

            <Grid xs={8} style={{display: 'flex', flexDirection: 'column'}}>
              <Text>Saturday, December 9, 2023</Text>
              <Table data={[
                { Time: '8:00 AM', Activity: 'Registration' },
                { Time: '8:30 AM', Activity: 'Breakfast' },
                { Time: '9:00 AM', Activity: 'Hack' },
                { Time: '12:00 PM', Activity: 'Lunch' },
                { Time: '12:30 PM', Activity: 'Hack' },
                { Time: '3:00 PM', Activity: 'Snack/Submission' },
                { Time: '4:00 PM', Activity: 'Demos' },
                { Time: '5:00 PM', Activity: 'Dinner/Judges deliberate' },
                { Time: '6:00 PM', Activity: 'Awards ceremony' },
                { Time: '7:00 PM', Activity: 'End' },
              ]}>
                <Table.Column prop="Time" label="Time" />
                <Table.Column prop="Activity" label="Activity" />
              </Table>
            </Grid>
          </Grid.Container>

        <Spacer h={8} />
          <Text h2 style={{ color: palette.successLight }}>Qatar Computing Research Institute</Text>
          <Text p align="center">
            Qatar Computing Research Institute (QCRI) is a national research institute, established in 2010 by Qatar Foundation (QF) for Education, Science and Community Development, a private, non-profit organization that is supporting Qatar’s transformation from a carbon economy to a knowledge economy. QCRI operates under the umbrella of Hamad bin Khalifa University (HBKU).
          </Text>
          <Spacer h={2} />
          <Image src='/qcri.png' width="100%" height="auto" style={{maxWidth:"400px"}} />

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
