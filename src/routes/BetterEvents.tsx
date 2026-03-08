import { Link } from 'react-router-dom'
import { Row, Col, Accordion, Button, Card, Spinner } from 'react-bootstrap'
import { HouseFill } from 'react-bootstrap-icons'
import { useImmer } from 'use-immer'

function BetterEvents() {
  const [state, setState] = useImmer({
    date: new Date().toISOString().split('T')[0],
    time: "00:00",
    city: "Portland",
    loading: false,
    card_data: [] as { href: string; img: string; title: string; time: string; group: string; attendees: string }[]
  });

  async function testPing() {
    setState(draft => { draft.loading = true; draft.card_data = []; });
    const res = await fetch(`/api/scrapeMeetup?date=${state.date}&time=${state.time}&city=${state.city}`)
    const data = await res.json()
    setState(draftState => { draftState.card_data = data; draftState.loading = false; });
  }

  return (
    <div className="container-fluid text-center fs-4">
      <Accordion data-id="tutorial">
        <Accordion.Item eventKey="0">
          <Accordion.Header>About BetterEvents</Accordion.Header>
          <Accordion.Body>
            <Row>
              <p>
                Have you ever stared at a blank calendar wondering what to do with your weekend?
                BetterEvents is an open-source web scraping tool that improves the functionality of Meetup.com and Eventbrite.com
              </p>
            </Row>
            <Row>
              <p>Here's what it does:</p>
              <ul style={{listStylePosition: 'inside'}}>
                <li>Consolidates all events between Meetup and Eventbrite in one place</li>
                <li>Adds a start time filter so you can see what events fit your schedule</li>
                <li>Adds a block button so you can ignore events you're not interested in</li>
              </ul>
            </Row>
            <Row>
              <p>
                Your blocklist is stored in your cookies, so this tool will not work properly in Incognito mode or across different browsers.
                Currently only Portland is supported, but if you want to add another city just shoot me an email.
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Row data-id="ui">
        <Col xs={12} lg={2} className="mb-3" data-id="home-button"><Link to="/"><Button variant="outline-light" size="lg"><HouseFill /></Button></Link></Col>
        <Col xs={12} lg={3} className="mb-3" data-id="date-selector"><input type="date" value={state.date} onChange={e => setState(draft_state => { draft_state.date = e.target.value })} style={{ backgroundColor: '#211e1b', color: 'white', border: '1px solid white', borderRadius: '4px', padding: '4px', colorScheme: 'dark' }} /></Col>
        <Col xs={12} lg={3} className="mb-3" data-id="time-selector"><input type="time" value={state.time} onChange={e => setState(draft_state => { draft_state.time = e.target.value })} style={{ backgroundColor: '#211e1b', color: 'white', border: '1px solid white', borderRadius: '4px', padding: '4px', colorScheme: 'dark' }} /></Col>
        <Col xs={12} lg={2} className="mb-3" data-id="city-selector">
          <select style={{ backgroundColor: '#211e1b', color: 'white', border: '1px solid white', borderRadius: '4px', padding: '4px' }}>
            <option value="portland">Portland</option>
          </select>
        </Col>
        <Col xs={12} lg={2} data-id="blocklist">Blocklist</Col>
      </Row>
      <Row data-id="get-events" className="mt-5">
        <Col data-id="get-events-button"><Button variant="outline-light" size="lg" onClick={testPing}>Get events</Button></Col>
      </Row>
      <Row data-id="meetup" className="justify-content-center mt-4">
        {state.loading && (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '6rem' }}>
            <div className="me-3">Loading Meetup Events (30 seconds) </div>
            <Spinner animation="border" variant="light" style={{ width: '3rem', height: '3rem' }} />
          </div>
        )}
        {state.card_data.map((item, i) => (
        <Card key={i} bg="dark" text="white" style={{width: '35rem'}}>
            <Card.Img variant="top" style={{height: '17rem', objectFit: 'cover'}} src={item.img}/>
            <Card.Body>
              <Card.Text style={{fontSize: '2.5rem'}}><strong>{item.title}</strong></Card.Text>
              <Card.Text>{item.time}</Card.Text>
              <Card.Text>{item.group}</Card.Text>
              <Card.Text>{item.attendees}</Card.Text>
              <Card.Link href={item.href} target="_blank">View Event</Card.Link>
            </Card.Body>
          </Card>
        ))}</Row>
      <Row data-id="eventbrite"></Row>
    </div>
  )
}

export default BetterEvents
