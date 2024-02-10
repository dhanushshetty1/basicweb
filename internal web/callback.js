
function fetchDataWithCallback(callback) {
    setTimeout(function () {
    const data = "Async Data";
    callback(data);
    }, 3000); 
   }

   function processCallbackData(data) {
    console.log("Callback Data:", data);
   }

   fetchDataWithCallback(processCallbackData);

   function fetchDataWithAsync() {     
    return new Promise(resolve => {
    setTimeout(function () {
    const data = "Async Data with Async/Await";
    resolve(data);
    }, 1000);
    });
   }

   async function processAsyncData() {
    const data = await fetchDataWithAsync();
    console.log("Async/Await Data:", data);
   }

   processAsyncData();
   