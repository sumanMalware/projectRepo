interface player {

    player: number,
    playerID: string
    name: string,
    rank: number,
    noOfMatches: number
}
let tableTennis: player[] = [
    { player: 1, playerID: "vn787", name: "Vijendra Nath", rank: 1, noOfMatches: 787 },
    { player: 2, playerID: "vk654", name: "Vipul Kumar", rank: 2, noOfMatches: 654 },
    { player: 3, playerID: "vk666", name: "Virat Kohli", rank: 3, noOfMatches: 666 },
    { player: 4, playerID: "as354", name: "Abhishek sinha", rank: 4, noOfMatches: 354 },
    { player: 5, playerID: "bs555", name: "Bijay Singh", rank: 5, noOfMatches: 555 },
    { player: 6, playerID: "cr645", name: "Chandan Rajput", rank: 6, noOfMatches: 645 },
    { player: 7, playerID: "dr326", name: "Deepak Raj", rank: 7, noOfMatches: 326 },
    { player: 8, playerID: "sj324", name: "Sarman Joshi", rank: 8, noOfMatches: 324 }
]

let sampleArr: any = []
for (let i = 0; i < tableTennis.length / 2; i++) {
    sampleArr.push(tableTennis[i], tableTennis[tableTennis.length - 1 - i])
}

function playerWinningPercentage() {
    let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let elem_1 = numeric[~~(Math.random() * numeric.length)];
    let elem_2 = numeric[~~(Math.random() * numeric.length)];
    return elem_1 + "" + elem_2
}

let opponent1: any = []
let opponent2: any = []
sampleArr.forEach((data: any, index: any) => {
    if (index % 2 == 0) {
        opponent1.push(data)
    } else {
        opponent2.push(data)
    }
})

function swap(tempArr: any) {
    let evenArr: any = []
    let oddArr: any = []

    tempArr.forEach((data: any, index: any) => {
        if (index % 2 == 0) {
            evenArr.push(data)
        } else {
            oddArr.push(data)
        }

    })
    return evenArr.concat(oddArr)
}
swap(opponent1)
swap(opponent2)

console.log("------------QUARTER FINAL--------------")

let quarterfinal: any = []
let count = 1

for (let i in opponent1) {

    opponent1[i]["point"] = playerWinningPercentage()
    opponent1[i]["noOfMatches"] = opponent1[i].noOfMatches + 1
    opponent2[i]["point"] = playerWinningPercentage()
    opponent2[i]["noOfMatches"] = opponent2[i].noOfMatches + 1

    if (opponent1[i].point > opponent2[i].point) {
        quarterfinal.push(opponent1[i])
        console.log(`MATCH:- ${count} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent1[i].name}`)
        count++
    }
    else if (opponent1[i].point == opponent2[i].point) {
        if (opponent1[i].rank > opponent2[i].rank) {
            quarterfinal.push(opponent2[i])
            console.log(`MATCH:- ${count} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent2[i].name}`)
            count++
        } else {
            quarterfinal.push(opponent1[i])
            console.log(`MATCH:- ${count} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent1[i].name}`)
            count++
        }
    }
    else if (opponent1[i].point < opponent2[i].point) {
        quarterfinal.push(opponent2[i])
        console.log(`MATCH:- ${count} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent2[i].name}`)
        count++
    }
}

console.log("-------------SEMI FINAL----------------")

let semiFinalOpponent1: any = []
let semiFinalOpponent2: any = []
quarterfinal.forEach((data: any, index: any) => {
    if (index % 2 == 0) {
        semiFinalOpponent1.push(data)
    } else {
        semiFinalOpponent2.push(data)
    }
})

let semiFinal: any = []

for (let i in semiFinalOpponent1) {

    semiFinalOpponent1[i]["point"] = playerWinningPercentage()
    semiFinalOpponent1[i]["noOfMatches"] = semiFinalOpponent1[i].noOfMatches + 1
    semiFinalOpponent2[i]["point"] = playerWinningPercentage()
    semiFinalOpponent2[i]["noOfMatches"] = semiFinalOpponent2[i].noOfMatches + 1

    if (semiFinalOpponent1[i].point > semiFinalOpponent2[i].point) {
        semiFinal.push(semiFinalOpponent1[i])
        console.log(`MATCH:- ${count} Opponents :- ${semiFinalOpponent1[i].name} vs ${semiFinalOpponent2[i].name}\n WINNER :- ${semiFinalOpponent1[i].name}`)
        count++
    }
    else if (semiFinalOpponent1[i].point == semiFinalOpponent2[i].point) {
        if (semiFinalOpponent1[i].rank > semiFinalOpponent2[i].rank) {
            semiFinal.push(semiFinalOpponent2[i])
            console.log(`MATCH:- ${count} Opponents :- ${semiFinalOpponent1[i].name} vs ${semiFinalOpponent2[i].name}\n WINNER :- ${semiFinalOpponent2[i].name}`)
            count++
        } else {
            semiFinal.push(semiFinalOpponent1[i])
            console.log(`MATCH:- ${count} Opponents :- ${semiFinalOpponent1[i].name} vs ${semiFinalOpponent2[i].name}\n WINNER :- ${semiFinalOpponent1[i].name}`)
            count++
        }
    }
    else if (semiFinalOpponent1[i].point < semiFinalOpponent2[i].point) {
        semiFinal.push(semiFinalOpponent2[i])
        console.log(`MATCH:- ${count} Opponents :- ${semiFinalOpponent1[i].name} vs ${semiFinalOpponent2[i].name}\n WINNER :- ${semiFinalOpponent2[i].name}`)
        count++
    }
}

console.log("-------------FINAL----------------")


let finalOpponent1: any = []
let finalOpponent2: any = []
semiFinal.forEach((data: any, index: any) => {
    if (index % 2 == 0) {
        finalOpponent1.push(data)
    } else {
        finalOpponent2.push(data)
    }
})

let final: any = []

for (let i in finalOpponent1) {

    finalOpponent1[i]["point"] = playerWinningPercentage()
    finalOpponent1[i]["noOfMatches"] = finalOpponent1[i].noOfMatches + 1
    finalOpponent2[i]["point"] = playerWinningPercentage()
    finalOpponent2[i]["noOfMatches"] = finalOpponent2[i].noOfMatches + 1

    if (finalOpponent1[i].point > finalOpponent2[i].point) {
        final.push(finalOpponent1[i])
        console.log(`MATCH:- ${count} Opponents :- ${finalOpponent1[i].name} vs ${finalOpponent2[i].name}\n WINNER :- ${finalOpponent1[i].name}`)
        count++
    }
    else if (finalOpponent1[i].point == finalOpponent2[i].point) {
        if (finalOpponent1[i].rank > finalOpponent2[i].rank) {
            final.push(finalOpponent2[i])
            console.log(`MATCH:- ${count} Opponents :- ${finalOpponent1[i].name} vs ${finalOpponent2[i].name}\n WINNER :- ${finalOpponent2[i].name}`)
            count++
        } else {
            final.push(finalOpponent1[i])
            console.log(`MATCH:- ${count} Opponents :- ${finalOpponent1[i].name} vs ${finalOpponent2[i].name}\n WINNER :- ${finalOpponent1[i].name}`)
            count++
        }
    }
    else if (finalOpponent1[i].point < finalOpponent2[i].point) {
        final.push(finalOpponent2[i])
        console.log(`MATCH:- ${count} Opponents :- ${finalOpponent1[i].name} vs ${finalOpponent2[i].name}\n WINNER :- ${finalOpponent2[i].name}`)
        count++
    }
}