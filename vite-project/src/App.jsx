import './App.css'

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="nav-logo">SaaSify</div>
        <ul className="nav-links">
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>
        <button className="nav-btn">Get Started</button>
      </nav>

      <section className="hero">
        <div className="hero-badge">🚀 New Feature Released</div>
        <h1 className="hero-title">
          Grow Your Business <br />
          <span className="hero-highlight">10x Faster</span>
        </h1>
        <p className="hero-subtitle">
          The all-in-one platform that helps you manage, scale, 
          and automate your business effortlessly.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started Free</button>
          <button className="btn-secondary">Watch Demo</button>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">Why Choose SaaSify?</h2>
        <p className="section-subtitle">Everything you need to run your business</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Blazing fast performance that keeps your team productive and customers happy.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Reliable</h3>
            <p>Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Smart Analytics</h3>
            <p>Real-time insights and analytics to help you make better business decisions.</p>
          </div>
        </div>
      </section>

    <section className="pricing">
  <h2 className="section-title">Simple Pricing</h2>
  <p className="section-subtitle">Choose the plan that works for you</p>
  <div className="pricing-grid">

    <div className="pricing-card">
      <h3>Starter</h3>
      <div className="price">$0<span>/mo</span></div>
      <ul>
        <li> 5 Projects</li>
        <li> Basic Analytics</li>
        <li> Email Support</li>
        <li> API Access</li>
      </ul>
      <button className="btn-secondary">Get Started</button>
    </div>

    <div className="pricing-card popular">
      <div className="popular-badge">Most Popular</div>
      <h3>Pro</h3>
      <div className="price">$29<span>/mo</span></div>
      <ul>
        <li> Unlimited Projects</li>
        <li> Advanced Analytics</li>
        <li> Priority Support</li>
        <li> API Access</li>
      </ul>
      <button className="btn-primary">Get Started</button>
    </div>

    <div className="pricing-card">
      <h3>Enterprise</h3>
      <div className="price">$99<span>/mo</span></div>
      <ul>
        <li> Unlimited Everything</li>
        <li> Custom Analytics</li>
        <li> 24/7 Support</li>
        <li> Custom API</li>
      </ul>
      <button className="btn-secondary">Contact Us</button>
    </div>

  </div>
</section>

      <footer className="footer">
  <div className="footer-top">
    <div className="footer-brand">
      <div className="nav-logo">SaaSify</div>
      <p>The all-in-one platform to grow your business faster.</p>
    </div>
    <div className="footer-links">
      <div className="footer-col">
        <h4>Product</h4>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Changelog</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Support</h4>
        <ul>
          <li>Help Center</li>
          <li>Contact</li>
          <li>Privacy</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© 2025 SaaSify. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default App