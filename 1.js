const obj = {
  a: 45,
  d: 'string',
  e: false
};

function func(obj) {
 for (let key in obj){
   console.log(key + ' = ' + obj[key])
 } 
 for (let key in func){
  if (func.hasOwnProperty(key)){
    console.log(key + ' = ' + func[key])
  }
}
};

func.b = 8
func.r = true

func(obj)
