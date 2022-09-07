module.exports = async function (context, req, users) {
    context.res = {
        body: users[0]
    };
}