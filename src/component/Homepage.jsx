
import { useNavigate, Link } from 'react-router-dom';
import './index.css';

function Homepage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const isSubscribed = localStorage.getItem('isSubscribed') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('isSubscribed');
    navigate('/');
  };

  return (
    <>
      <div className="homepage-background">
      <div className="navbar">
        <p className="FIRST">NETFLIX</p>

        <div className="auth-buttons">
          {user ? (
            <>
              <span className="welcome-msg">Welcome, {user.name || user.email}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/Login"><button>Login</button></Link>
              <Link to="/Signup"><button>Sign Up</button></Link>
            </>
          )}
        </div>
      </div>

      <div className="wrapper">
        <img src="src/assets/horror-movie-collage-2560-x-1600-7rsxip7198v2wynq.jpg" alt="" />
        <div className="text-overlay">Unlimited movies, TV <br /> Shows and more</div>
         {user ? (
            
            <div className="User-Text">"Thank you for your subscription. Enjoy your movie!"</div> 
          ) :(
          <>
        <div className="text-overlay2">Starts at ₹149. Cancel at any time.</div>
        <div className="text-overlay3">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        </>)}
        <div className="email-signup">
           {user ? (
            <>
            </>
          ) :(
          <>
          <input type="email" placeholder="Email Address" />
          <Link to="/Signup"><button type="submit">Get Started</button></Link>
          </>
          )}

        </div>
      </div>

      <div id="movies">
        {isSubscribed ? (
          <>
            {[
              { title: 'Avatar', src: 'Avatar.jpg' },
              { title: 'I Am Legend', src: 'I am Legend.jpg' },
              { title: 'Spartan', src: '300 Movie.jpg' },
              { title: 'The Avengers', src: 'Avengers.jpg' },
              { title: 'The Wolf of Wall Street', src: 'The Wolf.jpg' },
              { title: 'Interstellar', src: 'interstellar.jpg' },
              { title: 'Game of Thrones', src: 'game of thrones.jpg' },
              { title: 'Vikings', src: 'Vikings.jpg' },
              { title: 'Narcos', src: 'Narcos.jpg' },
              { title: 'Breaking Bad', src: 'Breaking Bad.jpg' },
            ].map((movie, index) => (
              <div className="movie" id="A" key={movie.title}>
                <Link to={`/movie/${movie.title}`}>
                  <img src={`src/assets/${movie.src}`} alt={movie.title} />
                </Link>
                <div className="text">{index + 1}</div>
              </div>
            ))}
          </>
        ) : (
          <div className="subscribe-message">
            <h3>Subscribe to access movies.</h3>
            <Link to="/Signup"><button>Subscribe Now</button></Link>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default Homepage;


