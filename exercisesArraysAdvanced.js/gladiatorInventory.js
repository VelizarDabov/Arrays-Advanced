function gladiatorInventory(arr) {
  let inventory = arr.shift().split(" ");

  for (let i = 0; i < arr.length; i++) {
    let currentRow = arr[i].split(" ");
    if (currentRow[0] === "Buy") {
      if (!inventory.includes(currentRow[1])) {
        inventory.push(currentRow[1]);
      }
    } else if (currentRow[0] === "Trash") {
      if (inventory.includes(currentRow[1])) {
        let newInventory = inventory.indexOf(currentRow[1]);
        inventory.splice(newInventory, 1);
      }
    } else if (currentRow[0] === "Repair") {
      if (inventory.includes(currentRow[1])) {
        let newInventory = inventory.indexOf(currentRow[1]);
        inventory.splice(newInventory, 1);
        inventory.push(currentRow[1]);
      }
    } else if (currentRow[0] === "Upgrade") {
      let upgradeItem = currentRow[1].split("-");
      if (inventory.includes(upgradeItem[0])) {
        let newInventory = inventory.indexOf(upgradeItem[0]);
        inventory.splice(newInventory + 1, 0, `${upgradeItem[0]}:${upgradeItem[1]}`
        );
      }
    }
  }

  console.log(inventory.join(" "));
}
gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",

  "Trash Shield",

  "Repair Spear",

  "Upgrade SWORD-Steel",
]);
