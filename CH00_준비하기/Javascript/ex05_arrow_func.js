/**
 *  
 */

const func1 = (창주) => {
  console.log(`help ${창주}`)
}

func1(`창주`);

// map()과 ()=>{}

const materials = [
  `Hydrogen`,
  `Helium`,
  `Lithium`,
  `Berylium`
];

materials.map((e) => {
  console.log(e);
})


// 회문
let palindromes = [
  `기러기`,
  `토마토`,
  `스위스`,
  `인도인`,
  `별똥별`,
  `동그라미`,
  `우영우`,
  `수박이박수`,
  `여보안경안보여`,
];

const contents = palindromes.filter((str) => {
  if (str === str.split('').reverse('').join('')) {
    return str;
  }
})

console.log(contents);




