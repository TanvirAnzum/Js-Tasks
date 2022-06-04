var uniqueInOrder=function(iterable){
    let arr = [];
    let x = iterable[0];
    arr.push(x);
    for(let i=1;i<iterable.length;i++) {
      if(iterable[i] != x) {
        x = iterable[i];
        arr.push(x);
      }
    }
    if(iterable.length === 0) return '[]';
    return arr;
  }

let A = [];

console.log(uniqueInOrder(A));