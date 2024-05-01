import './App.css';
import EmployeePage from './components/EmployeePage';
import Homepage from './components/Homepage';

// This is the Main [CEO] file --> Primary State Lives Here
// Components are housed here
// Hooks === useState, useEffect  

function App() {
  const topics = ["Employee Directory", "Employee"]
  // ----> Data that will be distributed through to the components below
  
  // 1. Make Employee Data
  let allEmployees = [
    {
      name: "James King",
      position: "President and CEO",
      image: "https://static.vecteezy.com/system/resources/previews/021/353/308/large_2x/user-icon-for-website-and-mobile-apps-png.png"
    },
    {
      name: "Julie Taylor",
      position: "VP of Marketing",
      image: "https://static.vecteezy.com/system/resources/previews/021/353/308/large_2x/user-icon-for-website-and-mobile-apps-png.png"
    },
    {
      name: "Eugene Lee",
      position: "CFO",
      image: "https://static.vecteezy.com/system/resources/previews/021/353/308/large_2x/user-icon-for-website-and-mobile-apps-png.png"
    },
    {
      name: "John Williams",
      position: "VP of Engineering",
      image: "https://static.vecteezy.com/system/resources/previews/021/353/308/large_2x/user-icon-for-website-and-mobile-apps-png.png"
    },
    {
      name: "Ray Moore",
      position: "VP of Sales",
      image: "https://static.vecteezy.com/system/resources/previews/021/353/308/large_2x/user-icon-for-website-and-mobile-apps-png.png"
    },
    {
      name: "Paul Jones",
      position: "QA Manager",
      image: "https://static.vecteezy.com/system/resources/previews/021/353/308/large_2x/user-icon-for-website-and-mobile-apps-png.png"
    }
  ]
  

  return (
    // ----------------> What we wanna see displayed on screen
    <div className="App">

      <Homepage title={topics[0]} workers={allEmployees} />
      {/* ----passing state to other components {props:} */}
      <EmployeePage title={topics[1]} workers={allEmployees}/>
      {/* ---------------------Components */}
      

    </div>
  );
}

export default App;
