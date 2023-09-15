import { Counter } from "./features/counter/Counter";
import "./styles.css";
import { BrowserRouter,Router,Route, Switch } from "react-router-dom";
import Blogs from './features/counter/Blogs'
export default function App() {
  return (
    <div className="App">
      <Counter />
      {/* <BrowserRouter> */}
        <Switch>
          <Route path="/" Component={<Counter />}>
            <Route path="blogs" Component={<Blogs />} />
          </Route>
        </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}
