export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number; // pence
  quantity: number;
  variantId: string | null;
  variantLabel: string | null;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { productId: string; variantId: string | null } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: string; variantId: string | null; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; payload: CartItem[] };
