// function App() {
//   return (
//     <div>
//       <h1>Welcome to My React App! 🚀</h1>
//       <p>Let's build something awesome.</p>
//       <p>Let's update. </p>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';

const Heading = React.createElement(
  "h1",
  {id: "heading"},
  "Hello World through React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
