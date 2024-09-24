const obj = {
  a: 45,
  d: 'string',
  e: false
}

const c = 'str';

function func (c, obj){
   if ('c' in obj){
      return true
    } else {
      return false
    }
  };

console.log('c'  in obj)
func('str', obj)
  
  
