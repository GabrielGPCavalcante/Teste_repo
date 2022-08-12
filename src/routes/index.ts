import { Router } from "express"
import { DiscountController } from "../modules/discount/useCases/discountUseCase/DiscountController";


const helloRouter = Router()

const discountController = new DiscountController();

helloRouter.get("/", (request, response ) => {
  
  response.status(200).json({message: "ok, tudo certo !"})
  
})

helloRouter.post("/", discountController.handle)

export { helloRouter }