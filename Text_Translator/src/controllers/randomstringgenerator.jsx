

export const randomstringgenerator = (data,setstring)=>{
  

 const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
 let length = Number(data.length);
 let s = []

 for(let i = 0;i<length;i++){
    let idx = Math.floor(Math.random()*(25));
    s += alphabet[idx];
 }
 setstring(s);
}
