export function logger(req, res, next) {
    console.log('i am logging something');
    console.log(req.user);
    next();
}

export function logger2(req, res, next) {
    console.log('I am logging something different');
    next();
}
