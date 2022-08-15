module.exports = async function (context, req, matters) {
    context.res = {
        body: matters[0]
    }
}
