import type { Request, Response, NextFunction } from "express";
import { param, validationResult } from "express-validator";

export const validateBudgetId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await param("id")
    .isInt()
    .withMessage("ID no valido")
    .custom((value) => value > 0)
    .withMessage("ID no valido")
    .run(req);

  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};
