/**
 * 
 * @param {any[]} units 
 * @returns 
 */
function uniqueMiddleware(units) {
    return (req, res, next) => {
        const { name } = req.body;

        const unit = units.find(it => it.name === name);

        if (unit) {
            next("Name already exist, please choose a difference name");
        }

        next();
    }
}

module.exports = uniqueMiddleware;