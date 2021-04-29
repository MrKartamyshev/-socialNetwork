import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className='app-wrapper'>
      <heder className='header'>
        <img src="https://www.logodesign.net/images/illustration-logo.png"></img>
      </heder>
      <nav className='nav'>
        <div>
         <a>Profile</a>
        </div>
        <div>
         <a>Massages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://nashvancouver.com/wp-content/uploads/2017/03/10449154_961867807226456_598263691_n-e1489421545779-1024x556.jpg'></img>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My post
            <div>
              New post
            </div>
        <div>
          <div>
          post 1 
        </div>
        <div>
          post 2
        </div>
        </div>
   </div>
    </div>
  );
};
export default App;
