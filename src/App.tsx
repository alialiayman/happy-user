import React from 'react';
import HappyUser from './HappyUser';

function App() {
  return (
    <div >
      <HappyUser  user={{ "user-pieces": [{key: 'given_name', values:  ['chris']}] }} />
    </div>
  );
}

export default App;
