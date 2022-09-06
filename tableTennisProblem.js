
let tableTennis = [
    { player: 1, playerID: "vn787", name: "Vijendra Nath", rank: 1, noOfMatches: 787 },
    { player: 2, playerID: "vk654", name: "Vipul Kumar", rank: 2, noOfMatches: 654 },
    { player: 3, playerID: "vk666", name: "Virat Kohli", rank: 3, noOfMatches: 666 },
    { player: 4, playerID: "as354", name: "Abhishek sinha", rank: 4, noOfMatches: 354 },
    { player: 5, playerID: "bs555", name: "Bijay Singh", rank: 5, noOfMatches: 555 },
    { player: 6, playerID: "cr645", name: "Chandan Rajput", rank: 6, noOfMatches: 645 },
    { player: 7, playerID: "dr326", name: "Deepak Raj", rank: 7, noOfMatches: 326 },
    { player: 8, playerID: "sj324", name: "Sarman Joshi", rank: 8, noOfMatches: 324 }
]

let sampleArr = []
for (let i = 0; i < tableTennis.length / 2; i++) {
    sampleArr.push(tableTennis[i], tableTennis[tableTennis.length - 1 - i])
}

function generatingPlayerMatchPoints() {
    let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let elem_1 = numeric[~~(Math.random() * numeric.length)];
    let elem_2 = numeric[~~(Math.random() * numeric.length)];
    return elem_1 + "" + elem_2
}

function gettingOpponents(sampleArr, quarterFinalOpponent1, quarterFinalOpponent2) {

    sampleArr.forEach((data, index) => {
        if (index % 2 == 0) {
            quarterFinalOpponent1.push(data)
        } else {
            quarterFinalOpponent2.push(data)
        }
    })
    return [quarterFinalOpponent1, quarterFinalOpponent2]
}

let quarterFinalOpponent1 = []
let quarterFinalOpponent2 = []
gettingOpponents(sampleArr, quarterFinalOpponent1, quarterFinalOpponent2)

function swappingIndex(tempArr) {
    let evenArr = []
    let oddArr = []

    tempArr.forEach((data, index) => {
        if (index % 2 == 0) {
            evenArr.push(data)
        } else {
            oddArr.push(data)
        }
    })
    return evenArr.concat(oddArr)
}

let count = 1
function result(firstOpponent, secondOpponent, opponentResult) {

    for (let i in firstOpponent) {
        firstOpponent[i]["point"] = generatingPlayerMatchPoints()
        firstOpponent[i]["noOfMatches"] = firstOpponent[i].noOfMatches + 1
        secondOpponent[i]["point"] = generatingPlayerMatchPoints()
        secondOpponent[i]["noOfMatches"] = secondOpponent[i].noOfMatches + 1

        if (firstOpponent[i].point > secondOpponent[i].point) {
            opponentResult.push(firstOpponent[i])
            // console.table(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${firstOpponent[i].name}\n`)
            count++
        }
        else if (firstOpponent[i].point == secondOpponent[i].point) {
            if (firstOpponent[i].rank > secondOpponent[i].rank) {
                opponentResult.push(secondOpponent[i])
                // console.table(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${secondOpponent[i].name}\n`)
                count++
            } else {
                opponentResult.push(firstOpponent[i])
                // console.table(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${firstOpponent[i].name}\n`)
                count++
            }
        }
        else if (firstOpponent[i].point < secondOpponent[i].point) {
            opponentResult.push(secondOpponent[i])
            // console.table(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${secondOpponent[i].name}\n`)
            count++
        }
    }
    return opponentResult
}

let semiFinal = []
console.log("\n------------QUARTER FINAL--------------")
result(quarterFinalOpponent1, quarterFinalOpponent2, semiFinal)
console.table(sampleArr)

console.log("\n-------------SEMI FINAL----------------")
let semiFinalOpponent1 = []
let semiFinalOpponent2 = []
let final = []
gettingOpponents(semiFinal, semiFinalOpponent1, semiFinalOpponent2)
result(semiFinalOpponent1, semiFinalOpponent2, final)
console.table(semiFinal)

console.log("\n-------------FINAL----------------")
let finalOpponent1 = []
let finalOpponent2 = []
let winner = []
gettingOpponents(final, finalOpponent1, finalOpponent2)
console.table(final)
console.log("\n-------------WINNER----------------")
result(finalOpponent1, finalOpponent2, winner)
delete winner[0].point
console.table(winner)
