let HowManyTeam = 6                                            //entering the numbe how many teams you want

//declaring the interface of object where teams are declared
interface Tournament {
  nameOfTournament: string,
  teams: any[],
  startDate: any
}
//declaring object where all detail is there related to the tournament
let theTournament: Tournament = {
  nameOfTournament: "Gokuldham primear leauge",
  teams: [],
  startDate:"2022-08-25"
}
//giving the team names
let counting = 1
for (let i = 0; i < HowManyTeam; i++) {
  theTournament.teams.push("Team-" + counting)
  counting++
}
let itration = theTournament.teams.length - 1;                                          //for running the loop

// checking if the team length is even or not(because of round robin for unique opponents)

if (theTournament.teams.length % 2 !== 0) {
  theTournament.teams.push("emptyValue")                //pushing empty value if the total teams length isi odd
}


if (theTournament.teams.includes("emptyValue")) {
  itration += 1
}
else {
  itration = itration
}

//round robin function starts from here(getting unique team opponents)

let opponents = []
for (let i = 0; i < itration; i++) {

  for (let j = 0; j < theTournament.teams.length / 2; j++) {
    if (theTournament.teams[j] != "emptyValue" && theTournament.teams[theTournament.teams.length - 1 - j] != "emptyValue") {
      opponents.push(theTournament.teams[j] + " vs " + theTournament.teams[theTournament.teams.length - 1 - j]);
    }
  }
  theTournament.teams.splice(1, 0, theTournament.teams.pop());
}
console.log(`Total numbers of matches will be:- ${opponents.length}`)                   //calsulating the matches

if (opponents.length % 2 != 0) {
  opponents.push("None")
}

//generating unique match id for each match

function genrateUniqueId(): any {
  let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let elem_1 = alpha[~~(Math.random() * alpha.length)];
  let elem_2 = alpha[~~(Math.random() * alpha.length)];
  let elem_3 = numeric[~~(Math.random() * numeric.length)];
  let elem_4 = numeric[~~(Math.random() * numeric.length)];
  return [elem_1 + "" + elem_2 + "" + elem_3 + "" + elem_4]
}

//date function starts from here

let daysDeclaration = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];       //declaring days
let  d = new Date(theTournament.startDate)
let sunDay = new Date()
let saturDay = new Date()
let dateList = []

//getting the next date of saturday and sunday from the start date

for (let i = 0; i <= 6; i++) {
    if (d.getDay() + i == 6) {
        sunDay.setDate(d.getDate() + i + 1)
        saturDay.setDate(d.getDate() + i)
    }
}
// console.log(sunDay,saturDay)

// pushing the days and dates in an array
let day=[]
let dt:any = new Date(sunDay);
let dt2:any = new Date(saturDay)
for (let e = 0; e <= 4; e++) {
    dateList.push((new Date(dt2)).toString().substring(4, 15))
    dateList.push((new Date(dt)).toString().substring(4, 15))
    day.push(daysDeclaration[dt2.getDay(saturDay)])
    day.push(daysDeclaration[dt.getDay(sunDay)])
    dt.setDate(dt.getDate() + 7)
    dt2.setDate(dt2.getDate() + 7)
    
}
// console.log(dateList)
// console.log(day)
// console.log(dt)
// console.log(dt2)

// creating objects of each day under an array(creating each day schedule) 

let count = 0
let mainList = []
for (let i = 0; i < opponents.length; i = i + 2) {
    let daySchedule:any = {}
    let d = i
    daySchedule["Tournament Name"]=theTournament.nameOfTournament
    daySchedule["Date"] = dateList[count]
    daySchedule["Day"]=day[count]

    daySchedule["Slot_No"]=1
    daySchedule["Match_No"] = i + 1
    daySchedule["Match_Id"]=genrateUniqueId()    
    daySchedule["Morning Batch"] = opponents[i]
    
    if (opponents[d + 1] != "None") {
        daySchedule["Slot No"]=2
        daySchedule["Match No"] = i + 2
        daySchedule["Match Id"]=genrateUniqueId()

        daySchedule["Evening Batch"] = opponents[d + 1]
    }
    count++
    mainList.push(daySchedule)
}
mainList.forEach((index)=>(console.log(index)))         //consoling each day schedule

