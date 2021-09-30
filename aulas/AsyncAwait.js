function rand (min=0, max=3){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitAMoment (msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
      reject('BAD VALUE');
      return;
      }

      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, time);
  });
}

async function execute(){
  try{
    const fase1 = await waitAMoment('Fase1', rand())
    console.log(fase1)

    const fase2 = await waitAMoment('Fase2', rand())
    console.log(fase2)

    const fase3 = await waitAMoment('Fase3', rand())
    console.log(fase3)
  } 
  catch(e) {
    console.log(e)
  }
}
execute()