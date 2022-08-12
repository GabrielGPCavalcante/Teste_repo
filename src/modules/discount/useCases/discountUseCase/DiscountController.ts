import { Response, Request } from "express";
import { DiscountRepositoryInMemory } from "../../repositories/in-memory/DiscontRepositoryInMemory";
import { DiscountUseCase } from "./DiscountUseCase";

class DiscountController {
  handle(request: Request, response: Response) {
    const { value, discount, productName } = request.body;

    const repositoryInMemory = new DiscountRepositoryInMemory()

    const discountUseCase = new DiscountUseCase(repositoryInMemory);

    const discountResult = discountUseCase.execute({ value, discount, productName });

    response.status(200).json({  discountResult });
  }
}

export { DiscountController };
