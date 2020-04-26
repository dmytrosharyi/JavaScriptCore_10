function show(data){
  console.log(data);
}
var student = [];
student.push({
  name:'Alex',
  sex:'male',
  age:19
});
student.push({
  name:'Juliia',
  sex:'female',
  age:17
});
student.push({
  name:'Kate',
  sex:'female',
  age:21
});
student.push({
  name:'Andrew',
  sex:'male',
  age:21
});
student.push({
  name:'Denis',
  sex:'male',
  age:20
});
student.forEach(show);
show('\n');
show ('Male students under 21: ')
var student2 = student.filter(function(x){return x.age<21 && x.sex=='male'});
student2.forEach(show);

var student3 = student2.map(function(y){y.yearsUnderAge = 21 - y.age; return y
});
show('\n');
show('Under age difference:');
student3.forEach(show);
show('\n');


function getSorted(obj1,obj2){
  var obj1Name = obj1.name.toLowerCase();
  var obj2Name = obj2.name.toLowerCase();
  if(obj1.age!=obj2.age){return obj1.age-obj2.age;}
  else if(obj1Name!=obj2Name){
    if(obj1Name>obj2Name){return 1;}
    else{return -1;}
  }
}

student.sort(getSorted);
student.forEach(show);