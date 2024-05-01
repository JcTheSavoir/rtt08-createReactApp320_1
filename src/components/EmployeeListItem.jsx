

const EmployeeListItem = ({ info }) => {
  return (
    <div className="employeeListItem">
      <img className="employeeListItemImage" src={info.image} alt="" />
      <div className="employeeListItemInfo">
        <div className="employeeListItemName">{info.name}</div>
        <div className="employeeListItemTitle">{info.position}</div>
      </div>
    </div>
  )
}
export default EmployeeListItem
