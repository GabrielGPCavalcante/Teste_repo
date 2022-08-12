import { v4 as uuidV4 } from "uuid";

class Discount {
  id?: string;

  productName: string = '';

  discount: number = 0;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Discount };
