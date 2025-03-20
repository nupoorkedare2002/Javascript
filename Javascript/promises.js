function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}
// chaining

fetchData()
  .then((data) => {
    console.log(data);
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));

//promises are created by keyword new
// promise takes a callback which actually taked 2 parameter like (
// resolve =when everything goes success,  resolve
// reject=when you want to emulate rejection when you dont want data to appear)
