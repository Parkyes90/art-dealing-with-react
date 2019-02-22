import * as React from 'react';
import { Header, About } from "./components";

const App: React.FC<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
      <About />
    </div>
  );
};

export default App;
