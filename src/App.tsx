import Headshot from './assets/Headshot.png'

function App() {
  return (
    <>
    <div className="container-fluid vh-100">
      <div className="row h-50 border">
        <div className="col-6 border d-flex align-items-center justify-content-center">Hi, I'm Will. For the past five years I've been a Digital Operations Manager at Adidas, focusing on website content and product data management. I facilitate communication between business and development teams here in Portland, OR and across the globe. You can find some of my work at adidas.com</div>
       <div className="col-6 border d-flex align-items-center justify-content-center"><img className="w-25 h-30" src={Headshot} /></div>
      </div>
      <div className="row h-50 border">
        <div className="col-4 border d-flex align-items-center justify-content-center">Email: william.harris@externals.adidas.com, willmharris7@gmail.com</div>
        <div className="col-4 border d-flex align-items-center justify-content-center">Links: Linkedin, Github</div>
        <div className="col-4 border d-flex align-items-center justify-content-center">Projects: BetterEvents</div>
      </div>
    </div>
    </>
  )
}

export default App
