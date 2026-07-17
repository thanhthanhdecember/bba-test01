const playerName = "Mario";
let curentLives = 3;
let coins = [
    { level: 1, coin: 25 },
    { level: 2, coin: 30 },
    { level: 3, coin: 45 }
];

let sum = 0;
let average = 0;

for (let i = 0; i < coins.length; i++) {
    sum += coins[i].coin;
    average = sum / coins.length
};

console.log(sum);
console.log(average);
console.log(sum % coins.length);