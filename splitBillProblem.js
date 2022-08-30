//--------declaring values---------------

TotalBills = [
    (breakfast = { A: 300, B: 400, C: 100, D: 200 }),
    (lunch = { A: 1000, B: 2000, C: 1000 }),
    (dinner = { A: 3000, B: 100, C: 200 }),
    (brunch = { A: 450, B: 5000, C: 200 }),
  ];
  //////functions////
  
  //average function for an object
  
  const getAverageEachPerson = (obj) => {
    count = 0;
    total = 0;
    for (i in obj) {
      total += obj[i];
      count++;
      avg = total / count;
    }
    return avg;
  };
  //reverse sorting function for an object
  
  const reverseSortingForObject = (ob1) => {
    ob2 = {};
    arr1 = [];
    dum = 0;
    for (let i in ob1) {
      arr1.push(ob1[i]);
      function sert(a, b) {
        return a - b;
      }
      arr1.sort(sert);
      arr1.reverse(sert);
    }
    for (j of arr1) {
      for (k in ob1) {
        if (j == ob1[k]) {
          ob2[k] = ob1[k];
        }
      }
    }
    return ob2;
  };
  //sorting function for an object
  
  const sortingForObject = (ob1) => {
    ob2 = {};
    arr1 = [];
    dum = 0;
    for (let i in ob1) {
      arr1.push(ob1[i]);
      function sert(a, b) {
        return a - b;
      }
      arr1.sort(sert);
    }
    for (j of arr1) {
      for (k in ob1) {
        if (j == ob1[k]) {
          ob2[k] = ob1[k];
        }
      }
    }
    return ob2;
  };
  //-------remove '0' function for object---------
  
  const removeZerofun = (obj1) => {
    obj = {};
    for (i in obj1) {
      if (obj1[i] != 0) {
        obj[i] = obj1[i];
      }
    }
    return obj;
  };
  //------------Running the array in loop and get the share of each person-------------------
  
  blankArr = [];
  for (let m in TotalBills) {
    function billForPerPerson(objectOfArray, blankArr) {                           //This function will get each person's share
      sampleObject = {};
      returnObject = {};
      sampleObject = objectOfArray;
      getAverageEachPerson(sampleObject);
      for (let j in sampleObject) {
        returnObject[j] = sampleObject[j] - getAverageEachPerson(sampleObject);
      }
      blankArr.push(returnObject);                                                 //pusing each bills share in an array
      return blankArr;
    }
    billForPerPerson(TotalBills[m], blankArr);                                     
  }
  //----------adding each bill share of a person in single bill--------------------------------------------
  
  tempObj = {};
  tempObj1 = {};
  
  for (let i in blankArr) {
    tempObj = blankArr[i];
    for (let j in tempObj) {
      if (j in tempObj1) {
        tempObj1[j] += tempObj[j];
      } else {
        tempObj1[j] = tempObj[j];
      }
    }
    i++;
  }
  //----------separating who will get the money and who have to give the money---
  
  whoGetMoneyObj = {};
  whoPayMoneyObj = {};
  
  for (let i in tempObj1) {
    if (tempObj1[i] < 0) {
      whoPayMoneyObj[i] = tempObj1[i];                                             //pushing into an object (the person who have to pay money)
    } else if (tempObj1[i] > 0) {
      whoGetMoneyObj[i] = tempObj1[i];                                             //pushing into an object (the person who have to get money)
    }
  }
  // ---------sorting the values ------------------------
  
  console.log("Who will get the money:-");
  console.log(reverseSortingForObject(whoGetMoneyObj));                            //sorting the values in desending order (who will get the money)
  console.log("--------------------------------------------\n");
  console.log("Who have to give the money:-");
  console.log(sortingForObject(whoPayMoneyObj));                                  //sorting the values in assending order (who have to pay the money)
  console.log("--------------------------------------------\n");
  console.log("Who have to pay whome:-\n");
  
  // -----------final settlement--------------------------
  
  for (let i in sortingForObject(whoPayMoneyObj)) {                               
    for (let j in reverseSortingForObject(whoGetMoneyObj)) {
      if (Math.abs(whoPayMoneyObj[i]) > whoGetMoneyObj[j]) {
        console.log(`${i} have to pay Rs.${whoGetMoneyObj[j]} to ${j}`);            //printing the message who have to pay whome 
        whoPayMoneyObj[i] = whoPayMoneyObj[i] + whoGetMoneyObj[j];
        whoGetMoneyObj[j] = 0;
        sortingForObject(whoPayMoneyObj);                                           
        whoGetMoneyObj = removeZerofun(whoGetMoneyObj);
      } else if (Math.abs(whoPayMoneyObj[i]) < whoGetMoneyObj[j]) {
        console.log(`${i} have to pay Rs.${Math.abs(whoPayMoneyObj[i])} to ${j}`);  //printing the message who have to pay whome
        whoGetMoneyObj[j] = whoPayMoneyObj[i] + whoGetMoneyObj[j];
        whoPayMoneyObj[j] = 0;
        reverseSortingForObject(whoGetMoneyObj);
        whoPayMoneyObj = removeZerofun(whoPayMoneyObj);
      } else if (Math.abs(whoPayMoneyObj[i]) == whoGetMoneyObj[j]) {
        console.log(`${i} have to pay Rs.${whoGetMoneyObj[j]} to ${j}`);             //printing the message who have to pay whome
        whoPayMoneyObj[j] = 0;
        whoGetMoneyObj[j] = 0;
        whoGetMoneyObj = removeZerofun(whoGetMoneyObj);
        whoPayMoneyObj = removeZerofun(whoPayMoneyObj);
      }
    }
  }
  