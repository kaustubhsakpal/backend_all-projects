import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import {Authprovider} from "./features/auth/Store/auth.context";
import { FeedContextprovider } from "./features/posts/context/FeedContext";

const App = () => {
  return (
    <Authprovider>
      <FeedContextprovider>
            <Routes />
      </FeedContextprovider>
      <ToastContainer />
    </Authprovider>
  );
};

export default App;
