import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div className='flex flex-col h-screen w-full'>
      <div className='w-full z-0'>
        <Header />
      </div>
      <div className='flex-col sm:flex-col-reverse min-h-44 sm:min-h-screen items-start sm:items-center main-sec z-10 w-full'>
        <div className="w-full sm:w-6/12">
          <SectionOne />
        </div>
        <div className="w-full sm:w-6/12">
          <SectionTwo />
        </div>
      </div>

    </div>
  );
}

export default App;
