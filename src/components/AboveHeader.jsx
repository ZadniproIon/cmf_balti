import { Clock, Facebook, Phone, Youtube } from 'lucide-react'

const AboveHeader = () => (
  <div className="above-header-wrapper">
    <div className="above-header">
      <div className="left-side">
        <div className="above-header-container">
          <Clock className="icon" />
          <p>
            Luni - Vineri: 8:00 - 19:00
            <br />
            Sâmbătă: 8:00 - 13:00
          </p>
        </div>

        <div className="above-header-container">
          <Phone className="icon" />
          <p>(0231) 7-52-28</p>
        </div>
      </div>

      <div className="right-side">
        <div className="above-header-container">
          <a href="https://www.facebook.com/cmfbalti/" target="_blank" rel="noreferrer">
            <Facebook className="icon" />
          </a>
          <a href="https://www.youtube.com/@cmfbaltiimsp3451" target="_blank" rel="noreferrer">
            <Youtube className="icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default AboveHeader
