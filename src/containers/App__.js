import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
const App = () => {
  const [marck, setMarck] = React.useState(0);
  const [markTimePosition, setMarkTimePosition] = React.useState();

  console.log(marck, markTimePosition);

  return (
    <>
      <Vimeo
        video={'https://player.vimeo.com/video/207141236'}
        autoplay
        //onPause={time => setMarkTimePosition({ time: time.seconds })}
        onCuePoint={time => setMarkTimePosition({ time: time })}
      />
      <button onClick={() => setMarck(20)}>mark 1</button>
      <button onClick={() => setMarck(30)}>mark 2</button>
      <button onClick={() => setMarck(40)}>mark 3</button>
      <button onClick={() => setMarck(50)}>mark 4</button>
    </>
  );
};

export default App;
