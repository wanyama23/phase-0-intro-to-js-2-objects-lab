// Write your solution in this file!
var recipes = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return employee.assign(employee, {[key]: value})
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
  return employee
}

function deleteFromObjectByKey(employee, key) {
  var newemployee = employee.assign({}, employee)
  delete employee[key]
  return employee
}

function destructivelyDeleteFromemployeeByKey(employee, key) {
  delete employee[key]
  return employee
}