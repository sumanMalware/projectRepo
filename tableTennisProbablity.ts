interface PlayerDetails {
    player: number,
    playerID: string
    name: string,
    rank: number,
    noOfMatches: number
}

//You can use as many player of 2 to the power

let tableTennis: PlayerDetails[] = [
    { player: 1, playerID: "vn787", name: "Vijendra Nath", rank: 10, noOfMatches: 787 },
    { player: 2, playerID: "vk654", name: "Vipul Kumar", rank: 2, noOfMatches: 654 },
    { player: 3, playerID: "vk666", name: "Virat Kohli", rank: 4, noOfMatches: 666 },
    { player: 4, playerID: "as354", name: "Abhishek sinha", rank: 6, noOfMatches: 354 },
    { player: 5, playerID: "bs555", name: "Bijay Singh", rank: 5, noOfMatches: 555 },
    { player: 6, playerID: "cr645", name: "Chandan Rajput", rank: 11, noOfMatches: 645 },
    { player: 7, playerID: "dr326", name: "Deepak Raj", rank: 8, noOfMatches: 326 },
    { player: 8, playerID: "sj324", name: "Sarman Joshi", rank: 5, noOfMatches: 324 },
    { player: 9, playerID: "vt901", name: "Vikas Tripathi", rank: 9, noOfMatches: 700 },
    { player: 10, playerID: "ss673", name: "Sourav Shukla", rank: 1, noOfMatches: 654 },
    { player: 11, playerID: "ps888", name: "Pan Singh", rank: 7, noOfMatches: 666 },
    { player: 12, playerID: "rd996", name: "Rajesh Das", rank: 14, noOfMatches: 354 },
    { player: 13, playerID: "ps555", name: "Pan Singh", rank: 16, noOfMatches: 555 },
    { player: 14, playerID: "rs897", name: "Rajeev Sinha", rank: 12, noOfMatches: 645 },
    { player: 15, playerID: "sk326", name: "Sardar Khan", rank: 15, noOfMatches: 326 },
    { player: 16, playerID: "sp324", name: "Sukhatme Panday", rank: 13, noOfMatches: 324 }
]

//sorting the array with respect to rank

tableTennis = tableTennis.sort((a, b) => a.rank - b.rank)

let storingOpponents = []
for (let i = 0; i < tableTennis.length / 2; i++) {
    storingOpponents.push(tableTennis[i], tableTennis[tableTennis.length - 1 - i])
}

//this function will create a point which a player got on each match 

function generatingPlayerMatchPoints() {
    let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let elem_1 = numeric[~~(Math.random() * numeric.length)];
    let elem_2 = numeric[~~(Math.random() * numeric.length)];
    return elem_1 + "" + elem_2
}

//in this function this function will divide opponents in different arrays

function gettingOpponents(storingOpponents: any, opponent1: any, opponent2: any) {
    storingOpponents.forEach((data: any, index: any) => {
        if (index % 2 == 0) {
            opponent1.push(data)
        } else {
            opponent2.push(data)
        }
    })
    return [opponent1, opponent2]
}

let firstOpponent: any = []
let secondOpponent: any = []

gettingOpponents(storingOpponents, firstOpponent, secondOpponent)

//this function will swap the opponents because we dont want rank 1 vs rank 2 will eliminate in round 1

function swappingIndex(tempArr: any) {
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

//concatinating for result function for ease of code

let concatinating = swappingIndex(firstOpponent).concat(swappingIndex(secondOpponent))

let match = 1                           //for counting the matches
let round = 1                           //for counting the rounds

//this is a recursive function it will show the rounds and matchs

function result(concatinating: any) {
    let opponentResult = []
    let opponent1: any = []
    let opponent2: any = []
    gettingOpponents(concatinating, opponent1, opponent2)                   //calling the function for dividing the opponents in different arrays
    console.log(`\n---------------------Round :- ${round}-------------------\n`)
    round++

    for (let i in opponent1) {
        opponent1[i]["point"] = generatingPlayerMatchPoints()
        opponent1[i]["noOfMatches"] = opponent1[i].noOfMatches + 1
        opponent2[i]["point"] = generatingPlayerMatchPoints()
        opponent2[i]["noOfMatches"] = opponent2[i].noOfMatches + 1

        if (opponent1[i].point > opponent2[i].point) {
            opponentResult.push(opponent1[i])
            console.log(`MATCH:- ${match} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent1[i].name}\n`)
            match++
        }
        else if (opponent1[i].point == opponent2[i].point) {
            if (opponent1[i].rank > opponent2[i].rank) {
                opponentResult.push(opponent2[i])
                console.log(`MATCH:- ${match} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent2[i].name}\n`)
                match++
            } else {
                opponentResult.push(opponent1[i])
                console.log(`MATCH:- ${match} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent1[i].name}\n`)
                match++
            }
        }
        else if (opponent1[i].point < opponent2[i].point) {
            opponentResult.push(opponent2[i])
            console.log(`MATCH:- ${match} Opponents :- ${opponent1[i].name} vs ${opponent2[i].name}\n WINNER :- ${opponent2[i].name}\n`)
            match++
        }
    }

    if (opponentResult.length > 1) {
        result(opponentResult)                                 //recusrsion for printing rounds again and again
    }
}
result(concatinating)


