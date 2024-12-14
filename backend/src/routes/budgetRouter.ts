import { Router } from "express";
import { body, param } from "express-validator";
import { BudgetController } from "../controllers/BudgetController";
import { handleInputErrors } from "../middleware/validation";
import {
  validateBudgetExists,
  validateBudgetId,
  validateBudgetInput,
} from "../middleware/budget";
import { ExpenseController } from "../controllers/ExpenseController";

const router = Router();

router.param("budgetId", validateBudgetId);
router.param("budgetId", validateBudgetExists);

router.get("/", BudgetController.getAll);

router.post(
  "/",
  validateBudgetInput,
  handleInputErrors,
  BudgetController.create
);

router.get("/:budgetId", BudgetController.getById);

router.put(
  "/:budgetId",
  validateBudgetInput,
  handleInputErrors,
  BudgetController.updateById
);

router.delete("/:budgetId", BudgetController.deleteById);

/** Routes for expenses */
router.get("/:budgetId/expenses", ExpenseController.getAll);
router.post("/budgetId/expenses", ExpenseController.create);
router.get("/budgetId/expenses/:expenseId", ExpenseController.getById);
router.put("/budgetId/expenses/:expenseId", ExpenseController.updateById);
router.delete("/budgetId/expenses/:expenseId", ExpenseController.deleteById);

export default router;
