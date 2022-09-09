module.exports = async function (context, req) {
    var data = req.body;
    context.bindings.users = data;
    context.done();
}