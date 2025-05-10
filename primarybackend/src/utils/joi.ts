import Joi from "joi";
const rewardBrands = [
  "amazon",
  "flipkart",
  "swiggy",
  "myntra",
  "ajio",
  "zomato",
];

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
    "string.max": `"description" should have a maximum length of {100}`,
  }),
  maxParticipants: Joi.number().integer().min(1).max(30).required().messages({
    "number.base": `"maxParticipants" should be a type of 'number'`,
    "number.empty": `"maxParticipants" cannot be an empty field`,
    "number.integer": `"maxParticipants" should be an integer`,
    "number.min": `"maxParticipants" should be a positive number`,
    "number.max": `"maxParticipants" should be a max of 30`,
  }),
  reward: Joi.object({
    brand: Joi.string()
      .valid(...rewardBrands)
      .required()
      .messages({
        "string.base": `"brand" should be a type of 'text'`,
        "string.empty": `"brand" cannot be an empty field`,
        "any.only": `"brand" must be one of ${rewardBrands.join(", ")}`,
      }),
    voucherCode: Joi.string().required().messages({
      "string.base": `"voucherCode" should be a type of 'text'`,
      "string.empty": `"voucherCode" cannot be an empty field`,
    }),
  })
    .optional()
    .messages({
      "object.base": `"reward" should be a type of 'object'`,
      "object.empty": `"reward" cannot be an empty field`,
    }),
  timePerQuestion: Joi.number().integer().min(5).max(60).required().messages({
    "number.base": `"timePerQuestion" should be a type of 'number'`,
    "number.empty": `"timePerQuestion" cannot be an empty field`,
    "number.integer": `"timePerQuestion" should be an integer`,
    "number.min": `"timePerQuestion" should be a positive number`,
    "number.max": `"timePerQuestion" should be a max of 60`,
  }),
}).required();

export const questionupdateSchema = Joi.object({
  questionText: Joi.string().optional().messages({
    "string.empty": `"questionText" cannot be an empty field`,
  }),
  options: Joi.array()
    .items(
      Joi.object({
        index: Joi.number().integer().min(0).required().messages({
          "number.base": `"index" should be a type of 'number'`,
          "number.empty": `"index" cannot be an empty field`,
        }),
        text: Joi.string().optional().messages({
          "string.empty": `"text" cannot be an empty field`,
        }),
      })
        .required()
        .min(2)
        .messages({
          "object.base": `"options" should be a type of 'object'`,
          "object.empty": `"options" cannot be an empty field`,
        })
    )
    .optional()
    .messages({
      "array.base": `"options" should be a type of 'array'`,
      "array.empty": `"options" cannot be an empty field`,
      "array.includesRequiredUnknowns": `"options" should contain at least one object`,
      "array.min": `"options" should have atleast 2 options`,
    }),
  correctOption: Joi.number().integer().min(1).optional().messages({
    "number.base": `"correctOptionIndex" should be a type of 'number'`,
  }),
})
  .min(1)
  .required()
  .messages({
    "object.min": `"questionText", "options" or "correctOption" should be present`,
    "object.base": `"questionText", "options" or "correctOption" should be a type of 'object'`,
    "object.empty": `"questionText", "options" or "correctOption" cannot be an empty field`,
  });

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
  correctOption: Joi.number().integer().min(1).required().messages({
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

const RewardBrands = {
  amazon: "amazon",
  flipkart: "flipkart",
  swiggy: "swiggy",
  myntra: "myntra",
  ajio: "ajio",
  zomato: "zomato",
};

const quizFieldsSchema = Joi.object({
  title: Joi.string().min(1).optional().messages({
    "string.base": "Title must be a string.",
    "string.empty": "Title cannot be empty if provided.",
    "string.min": "Title cannot be empty if provided.",
  }),
  description: Joi.string().allow("").optional().messages({
    "string.base": "Description must be a string.",
  }),
  maxParticipants: Joi.number()
    .integer()
    .min(1)
    .max(30)
    .positive()
    .optional()
    .messages({
      "number.base": "Max participants must be a number.",
      "number.integer": "Max participants must be an integer.",
      "number.positive": "Max participants must be a positive number.",
    }),
  timePerQuestion: Joi.number()
    .integer()
    .min(5)
    .max(60)
    .positive()
    .optional()
    .messages({
      "number.base": "Time per question must be a number.",
      "number.integer": "Time per question must be an integer.",
      "number.positive": "Time per question must be a positive number.",
    }),
})
  .min(0) // Ensures that if QuizFieldsToUpdate is provided, it's not an empty object
  .optional()
  .messages({
    "object.min":
      "QuizFieldsToUpdate cannot be an empty object if provided. Please provide at least one field to update.",
  });

const rewardFieldsSchema = Joi.object({
  reward: Joi.boolean().optional().messages({
    // 'reward' is key. If RewardFieldsToUpdate is present, 'reward' must be there.
    "any.required":
      'The "reward" field (boolean) is required within RewardFieldsToUpdate.',
    "boolean.base": 'The "reward" field must be a boolean.',
  }),
  brand: Joi.string()
    .valid(...Object.values(RewardBrands))
    .optional()
    .messages({
      "any.required": 'Brand is required when "reward" is true.',
      "any.forbidden":
        'Brand should not be provided when "reward" is false or RewardFieldsToUpdate is not enabling rewards.',
      "string.base": "Brand must be a string.",
      "any.only": `Brand must be one of the allowed values: ${Object.values(RewardBrands).join(", ")}.`,
    }),
  voucherCode: Joi.string().min(1).optional().messages({
    "any.required": 'Voucher code is required when "reward" is true.',
    "any.forbidden":
      'Voucher code should not be provided when "reward" is false or RewardFieldsToUpdate is not enabling rewards.',
    "string.base": "Voucher code must be a string.",
    "string.empty": 'Voucher code cannot be empty if "reward" is true.',
    "string.min": 'Voucher code cannot be empty if "reward" is true.',
  }),
}).optional(); // RewardFieldsToUpdate object itself is optional

// Main schema for req.body
export const updateQuizPayloadSchema = Joi.object({
  QuizFieldsToUpdate: quizFieldsSchema,
  RewardFieldsToUpdate: rewardFieldsSchema,
})
  .or("QuizFieldsToUpdate", "RewardFieldsToUpdate") // Ensures at least one of the update objects is present
  .messages({
    "object.missing":
      "Request body must contain at least QuizFieldsToUpdate or RewardFieldsToUpdate.",
  });
