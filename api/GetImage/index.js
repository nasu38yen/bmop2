module.exports = async function (context, req, blob) {
    context.res = {
        headers: {
            'Content-Type': 'image/jpeg'
        },
        body: blob
    };
}