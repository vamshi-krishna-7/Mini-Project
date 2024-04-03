import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      alt="not found"
      src="https://i.ibb.co/m9BGBYf/Group-7520pagenotfound-Desktop.png"
      className="not-found-img-desktop"
    />
    <img
      alt="not found"
      src="https://i.ibb.co/WVTVxs2/Group-7504not-Found-Mobile.png"
      className="not-found-img-mobile"
    />
    <h1 className="heading">Page Not Found</h1>
    <p className="paragraph">
      We are sorry, the page you requested could not be found
    </p>
  </div>
)

export default NotFound
