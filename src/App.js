import './App.css';
// import EmployeeList from './components/EmployeeList';
// import EmployeeListItem from './components/EmployeeListItem';
import EmployeePage from './components/EmployeePage';
import Homepage from './components/Homepage';
// import SearchBar from './components/SearchBar';

// This is the Main [CEO] file --> Primary State Lives Here
// Components are housed here
// Hooks === useState, useEffect  

function App() {
  const topics = ["Employee Directory", "Employee"]

  return (
    <div className="App">
      <Homepage title={topics[0]}/>
      <EmployeePage title={topics[1]}/>
      {/* <SearchBar/>
      <EmployeeList/>
      <EmployeeListItem/> */}
      
        
    </div>
  );
}

export default App;
