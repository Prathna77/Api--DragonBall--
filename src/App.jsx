import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"
import DragonBallZTitle from "./assets/image/dragonBallTitle.png"

function App() {


  return (
    <section>
      <div className="title-DragonBall" >
        <Link to={"/"}>
          <img src={DragonBallZTitle}
            className="title-DragonBall-inside"
            alt="title-DragonBall"
          />
        </Link>
      </div>
      <Outlet />
    </section>
  );
}

export default App
