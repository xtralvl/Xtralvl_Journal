
import Logo from '/logo.png'; 

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-screen-content">
        <div className="effect">
              <p>The world is filled with adventure.</p>
              <p>All you have to do is find it.</p>
          </div>
        <img src={Logo} alt="Xtralvl Journal" className="logo" />
      </div>
    </div>
  );
}
