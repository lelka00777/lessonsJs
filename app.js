let student = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85,
    },
  
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 89,
    },
    {
      name: "Nicke",
      age: 20,
      isMarried: false,
      scores: 120,
    },
    {
      name: "Jon",
      age: 19,
      isMarried: false,
      scores: 119,
    },
  ];
  
  const getName = (st) => st.name;
  const studentName = (array) => {
    const resalt = [];
  
    for (let i = 0; i < array.length; i++) {
      const newValue = getName(array[i]);
      resalt[i] = newValue;
    }
  
    // console.log(resalt);
    return resalt;
  };
  const getAge = (st) => st.age; // к самописному map
  
  const studenAge = (array) => {
    const resalt = [];
  
    for (let i = 0; i < array.length; i++) {
      const newAge = getAge(array[i]);
      resalt[i] = newAge;
    }
  
    return resalt;
  };
  const getScorese = (st) => st.scores;
  
  const studentScores = (array) => {
    const resalts = [];
  
    for (let i = 0; i < array.length; i++) {
      const newValues = getScorese(array[i]);
      resalts[i] = newValues;
    }
    return resalts;
  };
  // самописный map
  const sMap = (array, func) => {
    const resalt = [];
  
    for (let i = 0; i < array.length; i++) {
      const newValue = func(array[i]);
      resalt[i] = newValue;
    }
  
    return resalt;
  };
  
  // самописный filter
  const sFilter = (array, func) => {
    const resalt = [];
    for (let i = 0; i < array.length; i++) {
      if (func(array[i]) === true) {
        resalt.push(array[i]);
      }
    }
    return resalt;
  };
  
  // const sPop = (array) => {
  //   const resalt = [];
  
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i].length!==array[i].length-1 ) {
  //       resalt.push(array[i])
  //   //   }
  
  //   }
  //   return resalt
  // };
  
  // const sPop = (array) => {
  //   let lastElement = array[array.length - 1];
  
  //   array.length = array.length - 1;
  //   return lastElement;
  // };
  
  const sPush = (array) => {
    let resalt = [];
    let newItem = { name: "lelka", age: 19, isMarried: false, scores: 119 }
            
  
    for (let i = 0; i < array.length; i++) {
      resalt = [newItem, ...array];
    }
  
    return resalt;
  };
  
  const sPush1 =(array,el)=>{
    resalt = array=[el,...array]
  return resalt
  
  }
  
  
  function sFilter1 (func)  {
    const resalt = [];
    for (let i = 0; i < this.length; i++) {
      if (func(this[i]) === true) {
        resalt.push(this[i]);
      }
    }
    return resalt;
  };
   
  Array.prototype.sFilter1 = sFilter1
   
  console.log(student.sFilter1(st => st.scores >= 100));
  console.log(student.filter(el=>el.scores >=100))
  // console.log(sPush1(student,[1,2,3,4,5]));
  // console.log(sMap(student, getName))
  // console.log(sMap(student, getAge))
  // console.log(sMap(student, getScorese))
  // console.log(student.map(getName))
  // console.log(sFilter(student, st => st.scores >= 100))
  // console.log(student.filter(el=>el.scores >=100))
  // console.log(sPop(student));
  // console.log(student.length);
  // console.log(student.length-1);
  
  // сделать самописный метод map,filter,push,pop,join
  