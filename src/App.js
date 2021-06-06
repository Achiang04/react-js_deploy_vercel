// // import "./App.css";
// import Home from "./Home";
// import Navbar from "./Navbar";

// function App() {
//   // const title = "welcome...";
//   // const likes = 50;
//   // const person = {
//   //   name: "asep",
//   //   age: 20
//   // };
//   // const link = "http://www.google.com";

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         {/* <h1>{title}</h1>
//         <p>Liked: {likes} times</p>
//         <p>{person}</p>
//         <p>{10}</p>
//         <p>{"bambang"}</p>
//         <p>{[1, 2, 3, 4, 5]}</p>
//         <p>{Math.random() * 10}</p>
//         <a href={link}>google</a>
//         <h1>App Component</h1> */}

//         <Home />
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
