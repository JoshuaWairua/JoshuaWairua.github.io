let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('my name is Josh');
    }, 3000);
  })
};

async function asyncFuncExample(){
  try{
    let resolvedValue = await myPromise();
    console.log(resolvedValue);  
  }
  catch(err) {
    console.log(err);
  }
};

asyncFuncExample();