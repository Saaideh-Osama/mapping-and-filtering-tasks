let numbers=[2,40,80,500]
map1=numbers.map(n=>n*2) 
console.log(map1)


// task 2



let vans=[1,2,3,4]
map2=vans.map(n => n.toString())
console.log(map2)


// task 3



let nicknames=['spectre' , 'savage' , 'cole']
map3=nicknames.map(
    n => n.toUpperCase()
)
console.log(map3)


// task4 

function namesOnly(arr) {
    return arr.map(i => i.name)
  }
  var res = namesOnly([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
  console.log(res);

// task 5 

function makeStrings (arr) { 
  let strings = arr.map(function (string) {

  if (string.age >= 18) {
  
  return string.name + 'can go to The Matrix';
  
  }
   else {
  return string.name + 'under age!';
  }})
return strings ;
}


  console.log(makeStrings([
   {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]))


//   task 6  


function readyToPutInTheDOM(arr) {
    arr.map(c=> {
       document.write("<h1>" + c.name + "</h1>");
       document.write("<h2>" + c.age+ "</h2>");
    });

    arr.forEach(c=> {
       document.write("<h1>" + c.name + "</h1>");
       document.write("<h2>" + c.age+ "</h2>");
    });
  }

  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])

//   task 7



function doubleValues(arr){

console.log(arr.map(c => c*2))
}
doubleValues([2,3,8])


// // task 8 



    var array = [1, 2, 3]
var result = array.map((x,i) => x*i);
console.log(result);


// task 9 

function extractKey(arr, key) {
  return arr.map(a => a[key]);
}

console.log(
  extractKey(
    [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
    "name"
  )
);
//   task 10 

function extractFullName(namesarray){
  return namesarray.map(c =>`${c.first} ${c.last}`)} 

console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) )





// task 11 


var multiplyFour = [11,2,6,8,4,9,5,12,]
var filter1=multiplyFour.filter(n => n%4===0)
console.log(filter1)



//  task 12 

function containChar(arr, str) {
  return arr.filter(a => {
    if (a[0] || a[index]  == str) {
      return a;
    }
  });
}
console.log(containChar(["hello", "world","wing","web","rewind"], "w"));

// task13 
function evenIndexOddLength(arr) {
  return arr.filter((n, i) => {
    if (n.length % 2 == 1 && i % 2 == 0) {
      return n;
    }
  });
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]

 console.log(evenIndexOddLength(strings))



  // task 14 

  function olderThan(arr, age) {
    return arr.filter(a =>a.age > age) 
      
      }
  console.log(olderThan([{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }], 56));



  // task 15 

  function shorterThan(arr, num) {
    return arr.filter(a => {
      if (a.length < num) {
        return a;
      }
    });
  }
  console.log(shorterThan(['this','that','them','there','it','how','or'],3))