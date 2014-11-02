
var len = process.argv.length - 2;
var sum = 0;
var nums = process.argv.splice(2, len);
for (var i = 0; i < nums.length; i++) {
    var num = parseInt(nums[i]);
    sum += num;
}

console.log(sum);




