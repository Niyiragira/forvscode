let timeOutPromise = new Promise( function printMsg (resolve, reject) {
    setTimeout( () => reject('Time ran out'), 5000)
})
timeOutPromise.then(
    (results) => {
        console.info(results)

    };
     let ourPromise= await printMsg("I\'ll print when time runs out")
    console.info(ourPromise)
)

   

