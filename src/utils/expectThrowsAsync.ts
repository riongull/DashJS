const { expect } = require('chai');

export default async function expectThrowsAsync(method, errorMessage){
    let error = null;
    try {
        const res = await method();
        expect(res).to.be.an('Error');
        if (errorMessage) {
            if (res.message) {
                error = res;
                console.warn('Method resolved with error instead of rejecting', errorMessage);
            }
        }
    } catch (err) {
        error = err;
    }
    expect(error).to.be.an('Error');
    // @ts-ignore
    if (errorMessage && error?.message) {
        // @ts-ignore
        expect(error.message).to.equal(errorMessage);
    }
};
