import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ staff }) => {
  return (
    <div className="employeeList">
      {staff.map(worker => (
        <EmployeeListItem info={worker} />
      ))}
      
    </div>
  );
};


export default EmployeeList;