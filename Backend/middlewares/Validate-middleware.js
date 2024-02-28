

const Validate = (schema) => async (req, res, next) => {
    try {
        //the schema is the zod schema which will passed from from the in the contreoller
        const paserseBody = await schema.parseAsync(req.body);
        req.body = paserseBody;
        next();

    } catch (e) {
        next({ message: e.errors[0].message })
    }
}

module.exports = Validate;