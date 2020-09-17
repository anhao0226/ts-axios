
let promise = Promise.resolve({
    name: '张江海'
})

promise.then((res) => {
    console.log(res.name);
})