import { Discount } from "../infra/entities/Discount";

interface IDiscountRepository {

  registerDiscount(value: number, productName: string): Discount

}

export { IDiscountRepository }