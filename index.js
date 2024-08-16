const fs = require('fs');
const superagent = require('superagent');

////////////
/*
const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(' I could not find that file 🤔');
      resolve(data);
    });
  });
};

readFilePromise(`${__dirname}/dog.txt`).then((data) => {
  console.log(`Bread: ${data}`);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile('dog-image.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log('Random dog image to save to the file');
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
///////////////

/////////
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Bread: ${data}`);

solution: 1
superagent
  .get(`https://dog.ceo/api/breed/${data}/images/random`)
  .end((err, res) => {
    if (err) return console.log(err.message);
    console.log(res.body.message);
    fs.writeFile('dog-image.txt', res.body.message, (err) => {
      if (err) return console.log(err.message);
      console.log('Random dog image to save to the file');
    });
  });

//   solution: 2
superagent
  .get(`https://dog.ceo/api/breed/${data}/images/random`)
  .then((res) => {
    console.log(res.body.message);

    fs.writeFile('dog-image.txt', res.body.message, (err) => {
      if (err) return console.log(err.message);
      console.log('Random dog image to save to the fil');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
});

const filePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('this is need to check');
      resolve(data);
    });
  });
};

filePro(`${__dirname}/dog.txt`).then((data) => {
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      fs.writeFile('dog-image.txt', res.body.message, (err) => {
        console.log(res.body.message);
        if (err) console.log(err.message);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
//
const promiseFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('this an error for data reading');
      resolve(data);
    });
  });
};

promiseFile(`${__dirname}/dog.txt`).then((data) => {
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);
      fs.writeFile('dog-test.txt', res.body.message, (err) => {
        if (err) console.log(err.message);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
/////////////////////////
////  write file

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject(' I could not find that file 🤔');
      resolve(data);
    });
  });
};
const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject(' this is a promises error');
      resolve('success');
    });
  });
};

readFilePromise(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`read: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-writePro.txt', res.body.message);
  })
  .then(() => {
    console.log(' random save file in file system');
  })
  .catch((err) => {
    console.log(err.message);
  });

 */
