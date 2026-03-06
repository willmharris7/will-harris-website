// import { Link } from 'react-router-dom'
import { Row, Accordion } from 'react-bootstrap'

function BetterEvents() {
  return (
    <div className="container-fluid text-center fs-4">
      <Accordion data-id="tutorial">
        <Accordion.Item eventKey="0">
          <Accordion.Header>About BetterEvents</Accordion.Header>
          <Accordion.Body>
            <Row>
              <p>
                Have you ever stared at a blank calendar wondering what to do with your weekend?
                BetterEvents is an open-source web scraping application that improves the functionality of Meetup.com and Eventbrite.com to help you get out the door.
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
                Your blocklist is stored in your cookies, so please note this app will not work properly in Incognito mode.
                Currently only Portland is supported, but if you want to add another city just shoot me an email.
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Row data-id="ui"></Row>
      <Row data-id="get-events"></Row>
      <Row data-id="meetup"></Row>
      <Row data-id="eventbrite"></Row>
    </div>
  )
}

export default BetterEvents
