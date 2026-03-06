import Headshot from './assets/Headshot.png'

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-lg-6 text-center border py-5">
          <p style={{fontSize: '4rem'}}>Hello! I'm Will</p>
        </div>
        <div className="col-12 col-lg-6 text-center border py-3">
          <img src={Headshot} style={{width: '17rem', height: '17rem'}} />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center border py-3">
          <p>
            For the past five years I've been a Digital Operations Manager at Adidas, focusing on website content and product data management.
            I facilitate communication between business and development teams here in Portland, OR and across the globe.
            You can find some of my work at <a href="https://www.adidas.com" target="_blank" rel="noreferrer">adidas.com</a>
          </p>
          <p>
            In my free time, I build open-source products that can make your life a little easier. Check them out below. 
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-4 text-center border py-3">
          <p>Contact:</p>
          <p>william.harris@externals.adidas.com</p>
          <p>willmharris7@gmail.com</p>
        </div>
        <div className="col-12 col-lg-4 text-center border py-3">
          <p>Links:</p>
          <p><a href="https://www.linkedin.com/in/willharris7" target="_blank" rel="noreferrer">Linkedin</a></p>
          <p><a href="https://github.com/willmharris7" target="_blank" rel="noreferrer">Github</a></p>
        </div>
        <div className="col-12 col-lg-4 text-center border py-3">
          <p>Projects:</p>
          <p>BetterEvents: An improved user interface for Meetup and Eventbrite</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center border py-3">This site is made with React and Bootstrap. Hosted on Vercel.</div>
      </div>
    </div>
  )
}

export default App
