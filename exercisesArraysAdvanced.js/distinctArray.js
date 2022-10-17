function distinct(nums) {
    let currArr = [];
    nums.forEach((element) => {
        if (!currArr.includes(element)) {
            currArr.push(element);
        }
    });
    console.log(currArr.join(' '));
}
    distinct([7, 8, 9, 7, 2, 3,
        4, 1, 2])