import { IDiscountRepository } from "../../repositories/IDiscountRepositry";

interface IRequest {
  value: number;
  discount: number;
  productName: string;
}

class DiscountUseCase {

  constructor(
    private repository: IDiscountRepository
  ){}

  execute({ value, discount, productName }: IRequest) {
    const discountQtd = (value * discount) / 100;


    const discountResult = this.repository.registerDiscount(discountQtd, productName)

    return discountResult;
  }
}

export { DiscountUseCase };
