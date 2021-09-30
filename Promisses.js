function rand (min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function waitAMoment (msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE');

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
 waitAMoment('Database conection.', rand(1, 3))
  .then(response => {
    console.log(response);
    return waitAMoment('Search data in database.', rand(1, 3))
  })
  .then(response => {
    console.log(response);
    return waitAMoment(2222, rand(1, 3))
  })
  .then(response => {
    console.log(response);
  }).then(() => {
    console.log('Show data on screen')
  })
  .catch(e => {
    console.log('ERROR:', e)
  });

console.log('Isso aqui será exibido antes de qualquer Promise.')