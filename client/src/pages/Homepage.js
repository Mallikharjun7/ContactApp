import "./Homepage.css";

function Homepage() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <header className="hero-section">
                <h1 className="head">Effortlessly Manage Your Contacts</h1>
                <p className="para">Organize, access, and secure your contacts with a seamless experience.</p>
            </header>

            {/* Features Section */}
            <section className="features-section">
                <div className="feature-card">
                    <h2 className="head2">📞 Quick Access</h2>
                    <p className="para">Instantly find and manage your contacts with an intelligent search.</p>
                </div>
                <div className="feature-card">
                    <h2 className="head2">🔒 High Security</h2>
                    <p className="para">Your data is encrypted and protected with top-notch security measures.</p>
                </div>
                <div className="feature-card">
                    <h2 className="head2">⚡ Lightning Fast</h2>
                    <p className="para">Optimized for speed and efficiency across all devices.</p>
                </div>
                <div className="feature-card">
                    <h2 className="head2">🌎 Cloud Backup</h2>
                    <p className="para">Access your contacts anywhere with automatic cloud synchronization.</p>
                </div>
                <div className="feature-card">
                    <h2 className="head2">📝 Smart Organization</h2>
                    <p className="para">Categorize your contacts with labels, notes, and reminders.</p>
                </div>
                <div className="feature-card">
                    <h2 className="head2">🔔 Reminders & Notifications</h2>
                    <p className="para">Never forget an important contact or event with timely reminders.</p>
                </div>
            </section>

            {/* Save Contact Block */}
            <div className="save-contact-block">
                <h2 className="head">Save and Organize Effortlessly</h2>
                <p className="para">Store new contacts in seconds and keep your list up to date.</p>
            </div>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2 className="head">What Our Users Say</h2>
                <div className="testimonial">
                    <p className="para">"This app changed the way I manage my contacts. It's so intuitive and secure!"</p>
                    <span>- Alex Johnson</span>
                </div>
                <div className="testimonial">
                    <p className="para">"Fast, reliable, and easy to use. A must-have for professionals!"</p>
                    <span>- Sarah Williams</span>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
