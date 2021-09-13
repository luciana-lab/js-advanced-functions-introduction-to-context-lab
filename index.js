// Your code here
//  populates a record from an Array
// 1) has a function called createEmployeeRecord

// createEmployeeRecord
// 2) populates a firstName field from the 0th element
// 3) populates a familyName field from the 1th element
// 4) populates a title field from the 2th element
// 5) populates a payPerHour field from the 3th element
// 6) initializes a field, timeInEvents, to hold an empty Array
// 7) initializes a field, timeOutEvents, to hold an empty Array
function createEmployeeRecord(array) {
    const employeeInfo = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeInfo;
};

// process an Array of Arrays into an Array of employee records
// 1) has a function called createEmployeeRecords
// createEmployeeRecords
// 2) creates two records
// 3) correctly assigns the first names
// 4) creates more than 2 records
function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
};

// COULDN'T RESOLVE IT BY MYSELF. USED SOLUTION.
// it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
// 1) has a function called createTimeInEvent
// createTimeInEvent
// 2) creates the correct type
// 3) extracts the correct date
// 4) extracts the correct hour
function createTimeInEvent(obj, dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    obj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    });
    return obj;
};

// it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
// 1) has a function called createTimeOutEvent
// createTimeOutEvent
// 2) creates the correct type
// 3) extracts the correct date
// 4) extracts the correct hour
function createTimeOutEvent(obj, dateStamp) {
    let [date, hour] = dateStamp.split(' ');

    obj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    });
    return obj;
};

// COULDN'T RESOLVE IT BY MYSELF. USED SOLUTION.
// Given an employee record with a date-matched timeInEvent and timeOutEvent
// 1) hoursWorkedOnDate calculates the hours worked when given an employee record and a date
// hoursWorkedOnDate
// 2) calculates that the employee worked 2 hours
function hoursWorkedOnDate(employee, date) {
    let inEvent = employee.timeInEvents.find(function (e) {
        return e.date === date
    });

    let outEvent = employee.timeOutEvents.find(function (e) {
        return e.date === date
    });

    return (outEvent.hour - inEvent.hour) / 100
};

// Given an employee record with a date-matched timeInEvent and timeOutEvent
// 1) wagesEarnedOnDate multiplies the hours worked by the employee's rate per hour
// wagesEarnedOnDate
// 2) calculates that the employee earned 54 dollars
function wagesEarnedOnDate(employee, date) {
    return hoursWorkedOnDate(employee, date) * employee.payPerHour;
};

// COULDN'T RESOLVE IT BY MYSELF. USED SOLUTION.
// Given an employee record with MULTIPLE date-matched timeInEvent and timeOutEvent
// 1) allWagesFor aggregates all the dates' wages and adds them together
// allWagesFor
// 2) calculates that the employee earned 378 dollars
function allWagesFor(employee) {
    let datesWorked = employee.timeInEvents.map(function (e) {
        return e.date
    });

    const reducer = (previousValue, currentValue) => previousValue + wagesEarnedOnDate(employee, currentValue);
    return datesWorked.reduce(reducer, 0);
    // const payment = datesWorked.reduce(function (previousValue, currentValue) {
    //     return previousValue + wagesEarnedOnDate(employee, currentValue)
    // }, 0)
    // return payment;
};

// COULDN'T RESOLVE IT BY MYSELF. USED SOLUTION.
// Given an array of multiple employees
// 1) calculatePayroll aggregates all the dates' wages and adds them together
// calculatePayroll
// 2) calculates that the employees earned 770 dollars
// 3) correctly sums the payroll burden to $12,480 when passed an array of employee records
function calculatePayroll(array) {
    const reducer = (previousValue, currentValue) => previousValue + allWagesFor(currentValue);
    return array.reduce(reducer, 0);
};

// COULDN'T RESOLVE IT BY MYSELF. USED SOLUTION.
// Dependent functions: findEmployeeByFirstName
// 3) exists
// 4) finds "Loki" 
function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function (e) {
        return e.firstName === firstName
    });
};