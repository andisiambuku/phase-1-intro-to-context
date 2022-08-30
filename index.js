// Your code here
function createEmployeeRecord(employeeCard){
    
    return {
        firstName: employeeCard[0],
        familyName: employeeCard[1],
        title: employeeCard[2],
        payPerHour: employeeCard[3],
        timeInEvents:[],
        timeOutEvents: []       
    }
    
}

function createEmployeeRecords(employeesCard) {
    return employeesCard.map(function (employeeInfo) {
        return createEmployeeRecord(employeeInfo)
    });
}

function createTimeInEvent(employeeRecord, timeIn) {
    const [date, hour] = timeIn.split(' ');
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, timeOut) {
    const [date, hour] = timeOut.split(' ');
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, dateToBePaid) {
    let clockIn = employeeRecord.timeInEvents.find((e) => e.date == dateToBePaid).hour
   let clockOut = employeeRecord.timeOutEvents.find((e) => e.date == dateToBePaid).hour
   return (clockOut - clockIn)/100
}

// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.
let wagesEarnedOnDate = (employeeRecord, dateOfTheForm) => {
   const payPerHour = parseInt(employeeRecord.payPerHour)
   const hoursWorked = hoursWorkedOnDate(employeeRecord, dateOfTheForm)
   return payPerHour * hoursWorked
}

// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record
let allWagesFor = (employeeRecord) => {
   let employeeWages = []
   let datesWorked = employeeRecord.timeInEvents.map((e) => e.date)
   for (let date of datesWorked) {
      employeeWages.push(wagesEarnedOnDate(employeeRecord, date))
   }
   return employeeWages.reduce((total, wage) => total + wage)
}

// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record 
let calculatePayroll = (AllEmployeeRecords) => {
   return AllEmployeeRecords.reduce((previoutAmount, employee) => {
      return previoutAmount + allWagesFor(employee)
  }, 0)
}




























// // function createEmployeeRecord(worker){
// //     return{
// //         firstName:worker[0],
// //         familyName:worker[1],
// //         title: worker[2],
// //         payPerHour:worker[3],
// //         timeInEvents:[],
// //         timeOutEvents:[],
// //     }
// // }

// // function createEmployeeRecords(workerData){
// //     return workerData.map(function(worker){
// //         return createEmployeeRecord(worker)
// //     })
// // }

// // function createTimeInEvent(workerObj,dateStamp){
// //         let [date, hour] = dateStamp.split(' ')
// //         workerObj.timeInEvents.push({
// //             type:"TimeIn",
// //             hour:parseInt(hour,10),
// //             date
// //         })
// //         return workerObj;
// // }

// // function createTimeOutEvent(workerObj,dateStamp){
// //     let [date, hour] = dateStamp.split(' ')
// //     workerObj.timeOutEvents.push({
// //         type: "TimeOut",
// //         hour: parseInt(hour,10),
// //         date,
// //     })
// //     return workerObj;
// // }

// // function hoursWorkedOnDate(workerObj,date){
// //     let timeIn = workerObj.timeInEvents.find(x => x.date === date)
// //     let timeOut = workerObj.timeInEvents.find(x => x.date === date)
// //     let totalHoursWorked = (timeOut.hour - timeIn.hour) /100

// //     return totalHoursWorked;
    
// // }

// // function wagesEarnedOnDate(workerObj,date){
// //     let workerWage= hoursWorkedOnDate(workerObj,date) * workerObj.payPerHour
// //     return parseFloat(workerWage.toString())
// // }

// // function allWagesFor(workerObj){
// //     let datesTheyworked = workerObj.timeInEvents.map(x=> x.date)
// //     let wageEarnedPerDate = datesTheyworked.map(date => wagesEarnedOnDate(workerObj,date))
// //     return wageEarnedPerDate.reduce((sum,wage) => sum +wage, 0)
    
// // }

// // function calculatePayroll(workerData){
// //     let j = workerData.timeInEvents.map(x=> x.date)
// //     let payroll = j.map(date => wagesEarnedOnDate(workerData,date))
// //     return payroll.reduce((sum,wage) => sum +wage, 0)
// //     // return workerData.reduce(function(memo,rec){
// //     //     return memo + allWagesFor(rec)
// //     // },0)
// // }

// // Your code here
// function createEmployeeRecord(worker){
//     return{
//         firstName:worker[0],
//         familyName:worker[1],
//         title: worker[2],
//         payPerHour:worker[3],
//         timeInEvents:[],
//         timeOutEvents:[],
//     }
// }

// function createEmployeeRecords(workerArrays){
//     return workerArrays.map(worker => createEmployeeRecord(worker))
// }

// function createTimeInEvent(workerObj,timeInStamp){
//     let [date, time] = timeInStamp.split(' ')
//     workerObj.timeInEvents.push({
//         type:"TimeIn",
//         hour:parseInt(time,10),
//         date:date
//     })
//     return workerObj;
// }

// function createTimeOutEvent(workerObj,timeOutStamp){
//     let [date, time] = timeOutStamp.split(' ')
//     workerObj.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(time,10),
//         date:date,
//     })
//     return workerObj;
// }

// function hoursWorkedOnDate(workerObj,date){
//     let timeIn = workerObj.timeInEvents.find(x => x.date === date)
//     let timeOut = workerObj.timeInEvents.find(x => x.date === date)
//     let totalHoursWorked = (timeOut.hour - timeIn.hour) /100

//     return totalHoursWorked;
    
// }

// function wagesEarnedOnDate(workerObj,date){
//     return hoursWorkedOnDate(workerObj,date) * workerObj.payPerHour
// }

// function allWagesFor(workerObj){
//     let datesTheyworked = workerObj.timeInEvents.map(x=> x.date)
//     let wageEarnedPerDate = datesTheyworked.map(date => wagesEarnedOnDate(workerObj,date))
//     return wageEarnedPerDate.reduce((sum,wage) => sum +wage, 0)
    
// }

// function calculatePayroll(workerArrays){
//     let payroll = 0;
//     for(const wkr of workerArrays){
//         payroll += allWagesFor(wkr)
//     }
//     return payroll;
    
// }