/* Your Code Here */
function createEmployeeRecord([firstName,familyName,title,payPerHour]){
    return {
        firstName:firstName,
        familyName : familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents:[],
        timeOutEvents:[]
    }

}

function createEmployeeRecords(employeeData){
    return employeeData.map(employee=>createEmployeeRecord(employee))
}

function createTimeInEvent(dateString){
    
    const [date,hour] = dateString.split(" ")
    const timeInEvent = {
        type : "TimeIn",
        hour : parseInt(hour,10),
        date : date
    }

    this.timeInEvents.push(timeInEvent)

    return this
}

function createTimeOutEvent(dateString){
    
    const [date,hour] = dateString.split(" ")
    const timeOutEvent = {
        type : "TimeOut",
        hour : parseInt(hour,10),
        date : date
    }

    this.timeOutEvents.push(timeOutEvent)

    return this
}

function hoursWorkedOnDate(dateEnt){
    const timeInEvent = this.timeInEvents.find(event => event.date === dateEnt);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === dateEnt);

    if (!timeInEvent || !timeOutEvent) {
        return 0; // If no matching event, assume 0 hours worked
    }

    return (timeOutEvent.hour - timeInEvent.hour) / 100;
} 

function wagesEarnedOnDate(dateEnt){
    const payRate = this.payPerHour
    const hoursWorked = hoursWorkedOnDate.call(this,dateEnt)

    const wages = payRate * hoursWorked

    return wages

}

function findEmployeeByFirstName(srcArray,firstName){
    return srcArray.find(employee=>firstName===employee.firstName)
}

function calculatePayroll(employeeData){
    const payRoll = employeeData.map(employee=>allWagesFor.call(employee))
    const total = payRoll.reduce((acc,sum)=> {return acc + sum},0)

    return total

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

