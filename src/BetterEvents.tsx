import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Accordion, Button } from 'react-bootstrap'
import { HouseFill } from 'react-bootstrap-icons'

function BetterEvents() {
  const [message, setMessage] = useState<string | null>(null)

  async function handleGetEvents() {
    const res = await fetch('/api/hello')
    const data = await res.json()
    setMessage(data.message)
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
        <Col xs={12} lg={3} className="mb-3" data-id="date-selector"><input type="date" style={{ backgroundColor: '#211e1b', color: 'white', border: '1px solid white', borderRadius: '4px', padding: '4px', colorScheme: 'dark' }} /></Col>
        <Col xs={12} lg={3} className="mb-3" data-id="time-selector"><input type="time" defaultValue="00:00" style={{ backgroundColor: '#211e1b', color: 'white', border: '1px solid white', borderRadius: '4px', padding: '4px', colorScheme: 'dark' }} /></Col>
        <Col xs={12} lg={2} className="mb-3" data-id="city-selector">
          <select style={{ backgroundColor: '#211e1b', color: 'white', border: '1px solid white', borderRadius: '4px', padding: '4px' }}>
            <option value="portland">Portland</option>
          </select>
        </Col>
        <Col xs={12} lg={2} data-id="blocklist">Blocklist</Col>
      </Row>
      <Row data-id="get-events" className="mt-5">
        <Col data-id="get-events-button"><Button variant="outline-light" size="lg" onClick={handleGetEvents}>Get events</Button></Col>
      </Row>
      <Row data-id="meetup">{message}</Row>
      <Row data-id="eventbrite"></Row>
    </div>
  )
}

export default BetterEvents
