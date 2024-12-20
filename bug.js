const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation without proper error handling
  someAsyncOperation().then(result => {
    res.send(result);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

function someAsyncOperation() {
  // Simulates an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a failure
      reject(new Error('Something went wrong'));
    }, 1000);
  });
}