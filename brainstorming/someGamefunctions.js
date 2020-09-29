class Card {
    constructor() {
        this.suit = "placeholder";
        this.val = 0;
        this.row = null;
        this.col = null;
        this.position = [];
        this.ownedBy = null; // this will be a Team
    }
    printInfo = () => {
        console.log(`Card ${suit}${val}\n\towner ${ownedBy == null ? "no one" : ownedBy.teamColor}`);
    }
}
class Player {
    constructor(name) {
        this.name = name;
    }
}
class Team {
    constructor(color, mates) {
        this.teamColor = color;
        this.teamMates = mates;
        this.cardsClaimed = [];
    }
    /**
     * @param {Card[]}
     * @returns {boolean}
     */
    hasOneFiveInARow = () => {
        let dict = {},
            len = this.cardsClaimed.length,
            sorted = this.cardsClaimed.sort((a, b) => {
                return (a.position[0] - b.position[0])
            }),
            sortedPairsArr = [];

        for (let i = 0; i < sorted.length; i++) {
            sortedPairsArr.push(sorted[i].position);
        }
        console.log(sortedPairsArr);
        console.log('sortedPairsArr');
        for (let i = 0; i < len; i++) {
            let c = this.cardsClaimed[i];
            if (c.row in dict) {
                dict[c.row].push(c.col);
            } else {
                dict[c.row] = [c.col];
            }
        }
        // console.log(dict);
        // console.log(hasFiveInOneRow(dict));
        return true;
    }
    /**
     * 
     * @param {*} d 
     * @returns {boolean}
     */
    hasFiveInOneRow = (d) => {
        return true;
    }
    /**
     * 
     * @param {*} d 
     * @returns {boolean}
     */
    hasFiveInDiagonal = (d) => {

    }
    /**
     * 
     * @param {*} d 
     * @returns {boolean}
     */
    hasFiveInCol = (d) => {

    }
}


/******creating test area*******/

const testingDummyHands = () => {
    let lia = new Player("Lia"),
        lilie = new Player("Lilie"),
        john = new Player("John"),
        bendy = new Player("Brendan");

    let redTeam = new Team("Red", [john, bendy]),
        blueTeam = new Team("Blue", [lia, lilie]);

    let arrOfCards = [],
        matrixOfCards = [],
        innerArr = [];

    for (let i = 0, j = 0; i < 25; i++) {
        let c = new Card();
        c.row = j;
        c.col = i % 5;
        c.position = [j, i % 5];
        arrOfCards.push(c);
        innerArr.push(c);
        if ((i + 1) % 5 == 0) {
            matrixOfCards.push(innerArr);
            innerArr = [];
            j++;
        }
    }

    let practMat = [
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 2],
        [0, 0, 1, 0, 2],
        [0, 0, 0, 1, 2],
        [0, 0, 0, 0, 2]
    ];
    let redCards = [],
        blueCards = [];
    for (let i = 0; i < practMat.length; i++) {
        for (let j = 0; j < practMat[i].length; j++) {
            let c = new Card();
            c.row = i;
            c.col = j;
            c.position = [i, j];
            if (practMat[i][j] == 1) {
                redCards.push(c);
            } else if (practMat[i][j] == 2) {
                blueCards.push(c);
            }
        }
    }
    console.log(redCards);
    console.log(`redCards`);
    redTeam.cardsClaimed = redCards;
    blueTeam.cardsClaimed = blueCards;

    console.log(redTeam.hasOneFiveInARow());
}

testingDummyHands();