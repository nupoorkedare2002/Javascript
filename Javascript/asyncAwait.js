function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: " nupoorkedare", url: "https://google.com" });
    }, 3000);
  });
}
async function getUserData{ 
    try{
  console.log('fetching user data..');
  const userData =   await fetchUserData() // you can only use await in async
console.log("UserData", userData);
}catch (error){
   console.log ("Error fetching data", error);
    }
}

