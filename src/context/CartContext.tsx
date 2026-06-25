"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
} from "react";

export type CartItem = {
  id: string; // e.g. "valk-60-4000K"
  productId: string;
  productName: string;
  length: string;
  k: string;
  price: number;
  qty: number;
  img: string;
};

type State = { items: CartItem[]; isOpen: boolean };

type Action =
  | { type: "LOAD"; items: CartItem[] }
  | { type: "ADD"; item: Omit<CartItem, "qty"> }
  | { type: "REMOVE"; id: string }
  | { type: "SET_QTY"; id: string; qty: number }
  | { type: "OPEN" }
  | { type: "CLOSE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD":
      return { ...state, items: action.items };
    case "ADD": {
      const exists = state.items.find((i) => i.id === action.item.id);
      return {
        ...state,
        isOpen: true,
        items: exists
          ? state.items.map((i) =>
              i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
            )
          : [...state.items, { ...action.item, qty: 1 }],
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "SET_QTY":
      if (action.qty <= 0)
        return { ...state, items: state.items.filter((i) => i.id !== action.id) };
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: action.qty } : i
        ),
      };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

type CartCtxType = {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartCtx = createContext<CartCtxType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hydrate from localStorage after mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("valk-cart");
      if (raw) dispatch({ type: "LOAD", items: JSON.parse(raw) });
    } catch {}
  }, []);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("valk-cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    dispatch({ type: "ADD", item });
    // Auto-close after 5 seconds
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => dispatch({ type: "CLOSE" }), 5000);
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: "REMOVE", id });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    dispatch({ type: "SET_QTY", id, qty });
  }, []);

  const openCart = useCallback(() => {
    dispatch({ type: "OPEN" });
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const closeCart = useCallback(() => {
    dispatch({ type: "CLOSE" });
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const totalItems = state.items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = state.items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <CartCtx.Provider
      value={{
        items: state.items,
        isOpen: state.isOpen,
        totalItems,
        totalPrice,
        addItem,
        removeItem,
        setQty,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartCtx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
