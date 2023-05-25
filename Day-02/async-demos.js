
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

    window['addAsyncCallbackClient'] = addAsyncCallbackClient;

})()