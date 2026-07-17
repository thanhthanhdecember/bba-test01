// Bài 1
let characters = [
    {
        name: "Amily",
        level: 1,
        health: 200
    },
    {
        name: "Lealia",
        level: 3,
        health: 400
    },
    {
        name: "Henry",
        level: 7,
        health: 600
    },
];

function createCharacters(characters, possibleWinner) {

    let charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });

    let possibleWinners = charactersPowerUp.filter(character => {
        return character.health >= possibleWinner;
    })

    return {
        charactersPowerUp,
        possibleWinners
    }
};

console.log(createCharacters(characters, 1000));

// Bài 2:
const players = [
    { name: "Luigi", score: 900 },
    { name: "Yoshi", score: 800 },
    { name: "Mario", score: 1000 },
    { name: "Phong", score: 500 },
    { name: "Peach", score: 850 },
]

function printLeaderBoard(players) {
    // Sắp xếp 
    players.sort((a, b) => b.score - a.score);

    // In từng mảng
    players.forEach((player, index) => {
            // Thêm số thứ tự
        let rank = index+1;
            // Thêm huân chương
        let medals = "";
            if (index === 0){
                medals = "🥇";
                } else if (index === 1) {
                medals = "🥈";
                } else if (index === 2) {
                medals = "🥉";
                } else {
                medals = "  ";
                };
        console.log(`${medals} ${rank}. ${player.name} - ${player.score} pts`)
    });
return players;
};
printLeaderBoard(players);