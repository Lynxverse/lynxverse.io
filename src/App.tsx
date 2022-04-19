import React from "react";
import { LandingPage } from "components/pages/LandingPage";
import { Loader } from "components/layout/Loader";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const RenderLanding = () => {
    return <LandingPage />;
  };

  const RenderLoader = () => {
    return <Loader />;
  };

  return <>{loading ? <RenderLoader /> : <RenderLanding />}</>;
}

export default App;
