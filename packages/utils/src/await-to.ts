/**
 * 异步处理函数
 * 方便使用async-await时做异常处理
 * @param {Promise} promise 
 */
function to<T, U = Error>(promise: Promise<T>): Promise<[U, null] | [null, T]> {
    return promise
    .then<[null, T]>(
        (data: T) => [null, data]
    ).catch<[U, null]>(
        (err: U) => [err, null]
    )
}

export default to