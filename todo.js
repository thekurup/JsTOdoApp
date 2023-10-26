const list=[]
let array= " ";
function todoapp(){
  const y =document.querySelector('.val'); 
  const x = y.value;
  list.push(x);
  console.log(list);
  y.value='';
  
  for(count=0;count<list.length;count++){
    let p=list[count];
    let m = `<p>${p}</p>`;
    array = m;
    console.log(array);
    document.querySelector('.hi').innerHTML=array;
  }
  
  
}