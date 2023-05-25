
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

    //Async (callback)
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

    window['addAsyncCallbackClient'] = addAsyncCallbackClient;

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

    //Async (Promise)
    function addAsyncPromise(x, y) {
        console.log(`   [@service] processing ${x} and ${y}`);
        const p = new Promise((resolveFn, rejectFn) => {
            setTimeout(() => {
                const result = x + y
                console.log(`   [@service] returing result`);
                resolveFn(result)
            }, 5000);
        });
        return p;
    }
    

    /* 
    function addAsyncPromiseClient(){
        console.log(`[@client] invoking the service`);
        const p = addAsyncPromise(100, 200);
        p.then(result => {
            console.log(`[@client] result = ${result}`);
        })
    } 
    */

    async function addAsyncPromiseClient() {
        console.log(`[@client] invoking the service`);
        const result = await addAsyncPromise(100, 200);
        console.log(`[@client] result = ${result}`);
    } 

    async function addAsyncPromiseClient2() {
        console.log(`[@client] invoking the service`);
        const p1 = addAsyncPromise(100, 200);
        const p2 = addAsyncPromise(1000,2000);
        const [result1, result2] = await Promise.all([p1, p2])
        console.log(`[@client] result = ${result1} - ${result2}`);
    }

    
    window['addAsyncPromiseClient'] = addAsyncPromiseClient;
})()

