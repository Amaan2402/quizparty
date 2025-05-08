import Joi from "joi";

//user registration and login validation schema
export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": `"name" should be a type of 'text'`,
    "string.empty": `"name" cannot be an empty field`,
    "string.min": `"name" should have a minimum length of {#limit}`,
    "string.max": `"name" should have a maximum length of {#limit}`,
  }),
  email: Joi.string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required()
    .messages({
      "string.empty": `"email" cannot be an empty field`,
      "string.email": `"email" must be a valid email`,
      "string.pattern.base": `"email" must be a valid email address`,
    }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"password" should be a type of 'text'`,
    "string.empty": `"password" cannot be an empty field`,
    "string.min": `"password" should have a minimum length of {#limit}`,
  }),
}).required();

export const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required()
    .messages({
      "string.empty": `"email" cannot be an empty field`,
      "string.email": `"email" must be a valid email`,
      "string.pattern.base": `"email" must be a valid email address`,
    }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"password" should be a type of 'text'`,
    "string.empty": `"password" cannot be an empty field`,
    "string.min": `"password" should have a minimum length of {#limit}`,
  }),
}).required();

//quiz creation validation schema
export const quizCreationSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": `"title" cannot be an empty field`,
    "string.max": `"title" should have a maximum length of {30}`,
  }),
  description: Joi.string().optional().messages({
    "string.empty": `"description" cannot be an empty field`,
    "string.max": `"description" should have a maximum length of {100}`,
  }),
  reward: Joi.object().unknown(true).optional().messages({
    "object.base": `"reward" should be a type of 'object'`,
    "object.empty": `"reward" cannot be an empty field`,
  }),
  timePerQuestion: Joi.number().integer().min(1).max(60).required().messages({
    "number.base": `"timePerQuestion" should be a type of 'number'`,
    "number.empty": `"timePerQuestion" cannot be an empty field`,
    "number.integer": `"timePerQuestion" should be an integer`,
    "number.min": `"timePerQuestion" should be a positive number`,
    "number.max": `"timePerQuestion" should be a max of 60`,
  }),
}).required();

//quiz question creation schema
export const QuestionSchema = Joi.object({
  questionText: Joi.string().required().messages({
    "string.empty": `"questionText" cannot be an empty field`,
  }),
  options: Joi.array()
    .items(
      Joi.object({
        index: Joi.number().integer().min(0).required().messages({
          "number.base": `"index" should be a type of 'number'`,
          "number.empty": `"index" cannot be an empty field`,
        }),
        text: Joi.string().required().messages({
          "string.empty": `"text" cannot be an empty field`,
        }),
      })
        .required()
        .messages({
          "object.base": `"options" should be a type of 'object'`,
          "object.empty": `"options" cannot be an empty field`,
        })
    )
    .min(2)
    .required()
    .messages({
      "array.base": `"options" should be a type of 'array'`,
      "array.empty": `"options" cannot be an empty field`,
      "array.includesRequiredUnknowns": `"options" should contain at least one object`,
      "array.min": `"options" should have atleast 2 options`,
    }),
  correctOption: Joi.number().integer().min(0).required().messages({
    "number.base": `"correctOptionIndex" should be a type of 'number'`,
  }),
  quizId: Joi.string().required().messages({
    "string.empty": `"quizId" cannot be an empty field`,
  }),
}).required();

//Ai question generation schema
export const aIQuestionGenerationSchema = Joi.object({
  quizId: Joi.string().required().messages({
    "string.empty": `"quizId" cannot be an empty field`,
  }),
  // questionCount: Joi.number().integer().min(1).max(10).required().messages({
  //   "number.base": `"questionCount" should be a type of 'number'`,
  //   "number.empty": `"questionCount" cannot be an empty field`,
  //   "number.integer": `"questionCount" should be an integer`,
  //   "number.min": `"questionCount" should be a positive number`,
  //   "number.max": `"questionCount" should be a max of 10`,
  // }),
  quizTopic: Joi.string().required().messages({
    "string.empty": `"quizTopic" cannot be an empty field`,
  }),
  quizDescription: Joi.string().optional().messages({
    "string.empty": `"quizDescription" cannot be an empty field`,
  }),
});

export const answerSchema = Joi.object({});
