interface player {
    player: number,
    playerID: string
    name: string,
    rank: number,
    noOfMatches: number
}

let tableTennis: player[] = [
    { player: 1, playerID: "vn787", name: "Vijendra Nath", rank: 7, noOfMatches: 787 },
    { player: 2, playerID: "vk654", name: "Vipul Kumar", rank: 3, noOfMatches: 654 },
    { player: 3, playerID: "vk666", name: "Virat Kohli", rank: 2, noOfMatches: 666 },
    { player: 4, playerID: "as354", name: "Abhishek sinha", rank: 4, noOfMatches: 354 },
    { player: 5, playerID: "bs555", name: "Bijay Singh", rank: 5, noOfMatches: 555 },
    { player: 6, playerID: "cr645", name: "Chandan Rajput", rank: 6, noOfMatches: 645 },
    { player: 7, playerID: "dr326", name: "Deepak Raj", rank: 1, noOfMatches: 326 },
    { player: 8, playerID: "sj324", name: "Sarman Joshi", rank: 8, noOfMatches: 324 }
]

//sorting the array with respect to rank

tableTennis = tableTennis.sort((a, b) => a.rank - b.rank)

//pushing the players in quarter Final list

let quarterFinalist: any = []
for (let i = 0; i < tableTennis.length / 2; i++) {
    quarterFinalist.push(tableTennis[i], tableTennis[tableTennis.length - 1 - i])
}

//function for generating a random value which we will take as points

function playerWinningPercentage() {
    let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let elem_1 = numeric[~~(Math.random() * numeric.length)];
    let elem_2 = numeric[~~(Math.random() * numeric.length)];
    return elem_1 + "" + elem_2
}

//getting two array for two Opponents for a match

function gettingOpponents(quarterFinalist: any, quarterFinalOpponent1: any, quarterFinalOpponent2: any) {

    quarterFinalist.forEach((data: number, index: number) => {
        if (index % 2 == 0) {
            quarterFinalOpponent1.push(data)
        } else {
            quarterFinalOpponent2.push(data)
        }
    })
    return [quarterFinalOpponent1, quarterFinalOpponent2]
}

let quarterFinalOpponent1: any = []
let quarterFinalOpponent2: any = []
gettingOpponents(quarterFinalist, quarterFinalOpponent1, quarterFinalOpponent2)


function swappingIndex(tempArr: any) {
    let evenArr: any = []
    let oddArr: any = []

    tempArr.forEach((data: number, index: number) => {
        if (index % 2 == 0) {
            evenArr.push(data)
        } else {
            oddArr.push(data)
        }
    })
    return evenArr.concat(oddArr)
}

//this function will declare the opponent and the result of the match

let count = 1
function result(firstOpponent: any, secondOpponent: any, opponentResult: any) {

    for (let i in firstOpponent) {
        firstOpponent[i]["point"] = playerWinningPercentage()
        firstOpponent[i]["noOfMatches"] = firstOpponent[i].noOfMatches + 1
        secondOpponent[i]["point"] = playerWinningPercentage()
        secondOpponent[i]["noOfMatches"] = secondOpponent[i].noOfMatches + 1

        if (firstOpponent[i].point > secondOpponent[i].point) {
            opponentResult.push(firstOpponent[i])
            console.log(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${firstOpponent[i].name}`)
            count++
        }
        else if (firstOpponent[i].point == secondOpponent[i].point) {
            if (firstOpponent[i].rank > secondOpponent[i].rank) {
                opponentResult.push(secondOpponent[i])
                console.log(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${secondOpponent[i].name}`)
                count++
            } else {
                opponentResult.push(firstOpponent[i])
                console.log(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${firstOpponent[i].name}`)
                count++
            }
        }
        else if (firstOpponent[i].point < secondOpponent[i].point) {
            opponentResult.push(secondOpponent[i])
            console.log(`MATCH:- ${count} Opponents :- ${firstOpponent[i].name} vs ${secondOpponent[i].name}\n WINNER :- ${secondOpponent[i].name}`)
            count++
        }
    }
    return opponentResult
}

//running the result function for the quarter finalist

let semiFinalist: any = []
console.log("\n------------QUARTER FINAL--------------")
result(quarterFinalOpponent1, quarterFinalOpponent2, semiFinalist)

//running the result function for the semi finalist

console.log("\n-------------SEMI FINAL----------------")
let semiFinalOpponent1: any = []
let semiFinalOpponent2: any = []
let finalist: any = []
gettingOpponents(semiFinalist, semiFinalOpponent1, semiFinalOpponent2)
result(semiFinalOpponent1, semiFinalOpponent2, finalist)

//running the result function for the finalist and the winner of the match

console.log("\n-------------FINAL----------------")
let finalOpponent1: any = []
let finalOpponent2: any = []
gettingOpponents(finalist, finalOpponent1, finalOpponent2)
result(finalOpponent1, finalOpponent2, finalist)