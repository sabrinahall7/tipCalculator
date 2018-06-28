function estimatedTip(bill){
  var percentage;
  if(bill > 50){
    percentage = .2;
  } else if (bill > 50 && bill < 200){
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [estimatedTip(bills[0]),
            estimatedTip(bills[1]),
            estimatedTip(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
