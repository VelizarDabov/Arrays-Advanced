function train(array) {
    let trainWagonPassengers = array.shift().split(" ").map(Number);
    let maxPassengers = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let currentRow = array[i].split(" ");
        if (currentRow[0] === "Add") {
            let newWagonPassengers = Number(currentRow[1]);
            trainWagonPassengers.push(newWagonPassengers);
        } else {
            for (let j = 0; j < trainWagonPassengers.length; j++) {
                let passengersCurrentWagon = trainWagonPassengers[j];
                if (passengersCurrentWagon + Number(currentRow[0]) <= maxPassengers) {
                    trainWagonPassengers[j] += Number(currentRow[0]);
                    break;
                }
            }  
        }
    }
    console.log(trainWagonPassengers.join(' '));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
