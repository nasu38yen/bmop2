module.exports = async function (context, req, matter) {
    context.res = {
        body: matter
    };
}