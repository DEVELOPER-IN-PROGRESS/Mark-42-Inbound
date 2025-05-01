import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-info text-dark pt-5 pb-3">
  <div className="container">
    <div className="row">

      {/* <!-- Logo and Tagline --> */}
      <div className="col-md-4 mb-3">
        <h5 className="text-uppercase">TrackMyCrypto</h5>
        <p>Stay ahead in crypto, always.</p>
      </div>

      {/* <!-- Quick Links --> */}
      <div className="col-md-4 mb-3">
        <h6>Quick Links</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-primary-emphasis text-decoration-none">Home</a></li>
          <li><a href="#" className="text-primary-emphasis text-decoration-none">Features</a></li>
          <li><a href="#" className="text-primary-emphasis text-decoration-none">Top Coins</a></li>
        </ul>
      </div>

      {/* <!-- Contact Info --> */}
      <div className="col-md-4 mb-3">
        <h6>Contact</h6>
        <p className='m-0'>Email: <a href="mailto:trackmycrypto@gmail.com" className="text-primary-emphasis text-decoration-none">elbaheleng@gmail.com</a></p>
        <p className='m-0'>GitHub: <a href="https://github.com/yourusername" target="_blank" className="text-primary-emphasis text-decoration-none">elbaheleng</a></p>
        <p className='m-0'>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-primary-emphasis text-decoration-none">elbaheleng</a></p>
      </div>

    </div>
    



    {/* <!-- Disclaimer and Copyright --> */}
    <div className="text-center mt-4">
      <small className="d-block mb-2">
        ⚠️ Prices and data are fetched from <a href="https://www.coingecko.com" target="_blank" className="text-light text-decoration-underline">CoinGecko</a>. This site is for informational purposes only and not financial advice.
      </small>
      <small>© 2025 TrackMyCrypto. All rights reserved.</small>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer