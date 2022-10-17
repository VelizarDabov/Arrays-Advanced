    
    /*
    function bombDetonation(arr1, arr2) {
        let copyArr1 = arr1.slice(0);
        let specialBombNum = arr2.shift();
        let powerBomb = arr2.shift();
    
       
        for (let i = 0; i < copyArr1.length; i++) {

            if (arr1[i] === specialBombNum) {
   

                let lowerRange = i - powerBomb;
                let bombCount = 1 + (powerBomb * 2);
                while (lowerRange < 0) {
                    lowerRange++;
                    bombCount--;
                }
    
                arr1.splice(lowerRange, bombCount);
            i--;
            if(counter === bombCount * 2 + 1 || copyArr1 == 0){
                break;
            }
            }
         
        }
        let reducer = (a, b) => a + b;
        console.log(arr1.reduce(reducer));
       
    }
    
    bombDetonation([1, 4, 4, 2, 8, 9, 1],

        [9, 3])
   





function bombNumbers(arrNumbers, bombArray){

let copyArrNumbers = arrNumbers.slice(0);
let copyBombArray = bombArray.slice(0);
const bombNumber = bombArray[0];
const bombPower = bombArray[1];

for(let i = 0; i < copyArrNumbers.length; i++){
  if(copyArrNumbers[i] === bombNumber){
    let bombIndex = copyArrNumbers.indexOf(bombNumber );
    let startIndex = Math.max(bombIndex - bombPower, 0);
    copyArrNumbers.splice(bombIndex, bombPower +1);
    copyArrNumbers.splice(startIndex, bombPower)
   console.log(`${copyArrNumbers.reduce((a, b) => a + b)}`);
  }
}
}
bombNumbers([1, 7, 7, 1, 2, 3],

[7, 1])
*/