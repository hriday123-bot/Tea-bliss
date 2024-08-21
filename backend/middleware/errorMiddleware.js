//This middleware will handle any routes that are not found (404 errors).
const notFound = (req, res, next) => {
    const error = `Product not found - ${req.originalUrl}`;
    res.status(404);
    next(error);
}

//This middle ware will handle any other errors and format the response.

const errorHandler = (err,req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });

}





export { notFound,errorHandler }