import Player from "./components/Player.jsx";
import { TimerChallange } from "./components/TimerChallange.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={1} />
        <TimerChallange title="Not Easy" targetTime={2} />
        <TimerChallange title="Getting Tough" targetTime={4} />
        <TimerChallange title="Pro Only" targetTime={3} />
      </div>
    </>
  );
}

export default App;
