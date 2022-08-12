import { Discount } from "../../infra/entities/Discount";
import { IDiscountRepository } from "../IDiscountRepositry";



class  DiscountRepositoryInMemory implements IDiscountRepository {

  discounts: Discount[] = [];

  registerDiscount(value: number, productName: string): Discount {
    
    const discount = new Discount();

    Object.assign(discount, {
      productName,
      discount: value,
    
    })

    console.log(discount)

    return discount;

  }

}

export { DiscountRepositoryInMemory }