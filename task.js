//1
const num=n=>n+1
const numbers=[1,3,5,7,9]
const result=numbers.map(num)
console.log(result);

//2
const num2=n=>n%10==0
const numbers2=[14,32,50,77,90]
const result2=numbers2.filter(num2)
console.log(result2);

//2.1
const result3=numbers2.find(num2)
console.log(result3);

//3
const instructor=[
    {name:'Yeamin', age:22,position:'senior'},
    {name:'Shakil', age:23,position:'junior'},
    {name:'Tamim', age:21,position:'senior'},
    {name:'Tomal', age:20,position:'junior'}
]
//const name=n1=>n1.position=='senior'
const result4=instructor.filter(n1=>n1.position=='senior')
console.log(result4);

//4
const sum=n=>{
    let s=0
for(const ins of instructor){
 s=s+ins.age
}
return s
}
console.log(sum(instructor));

//4.1
const sum2=instructor.reduce((p,c)=>p+c.age,0)
console.log(sum2);



    
