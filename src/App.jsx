import Footer from "./Footer";
import Header from "./Header";
import Hero_Section from "./Hero_Section";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
      <Hero_Section />
      <TaskBoard />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
