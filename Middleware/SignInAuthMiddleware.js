import joi from "joi";

async function SignUpAuthMiddleware(req, res, next) {
  const {email, password} = req.body;
  
  const SchemaSignUp = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(6).max(20).required(),
  })
  const validation = SchemaSignUp.validate({email, password});
  if (validation.error) {
      res.status(400).send(validation.error.details[0].message);
      return;
  }
  next();
};

export default SignUpAuthMiddleware;