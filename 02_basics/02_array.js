const marvel_heros=['Thor','IronMan','SpiderMan']
const dc_heros=['SuperMan','Splash','BatMan']

const all_Heros=marvel_heros.concat(dc_heros);
// console.log(all_Heros);

const all_heros=[...dc_heros,...marvel_heros]
// console.log(all_heros);

const another_arr=[1,2,3,[4,5,6],7,8,[9,10],11]
const usable_arr=another_arr.flat(Infinity)
// console.log(usable_arr)

console.log(Array.isArray("Saurabh"));
console.log(Array.from("Saurabh"));

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3));

