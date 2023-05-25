
(() => {
    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y
        console.log(`   [@service] returing result`);
        return result;
    }

    function addSyncClient(){
        console.log(`[@client] invoking the service`);
        const result = addSync(100,200);
        console.log(`[@client] result = ${result}`)
    }
    window['addSyncClient'] = addSyncClient;

    //Async
    function addAsyncCallback(x, y, callbackFn) {
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(() => {
            const result = x + y
            console.log(`   [@service] returing result`);
            callbackFn(result);
        }, 5000);
    }

    function addAsyncCallbackClient() {
        console.log(`[@client] invoking the service`);
        addAsyncCallback(100, 200, function(result){
            console.log(`[@client] result = ${result}`)    
        });
    }

    window['addAsyncCallbackClient'] = divideAsyncCallbackClient;

    //Handling failures (using Error-First-Callback pattern)
    function divideAsyncCallback(x, y, callbackFn) {
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(() => {
            if (y === 0){
                const err = new Error('divisor cannot be 0');
                return callbackFn(err)
            }
            const result = x / y
            console.log(`   [@service] returing result`);
            callbackFn(null, result);
        }, 5000);
    }

    function divideAsyncCallbackClient() {
        console.log(`[@client] invoking the service`);
        divideAsyncCallback(200, 0, function (err, result) {
            if (err) {
                console.log('something went wrong :', err)
                return
            }
            console.log(`[@client] result = ${result}`)
        });
    }

    window['divideAsyncCallbackClient'] = divideAsyncCallbackClient;

})()