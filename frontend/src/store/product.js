import { create } from 'zustand'

const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return { success: false, message: "Please fill in all fields." };
        }

        const res = await fetch("/api/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        });

        const data = await res.json();
        set((state) => ({
            products: [...state.products, data.newProduct],
        }));

        return { success: true, message: "Data submitted" };
    },
    fetchProducts: async () => {
        const res = await fetch(`/api/product`)
        const data = await res.json()
        set({ products: data.products })
    },
    deleteProduct: async (pid) => {
        const res = await fetch(`/api/product/${pid}`, {
            method: "DELETE"
        })
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };

        set((state) => ({ products: state.products.filter((product) => product._id !== pid) }))
        return { success: true, message: data.message };
    }, 
    updateProduct: async (pid, updatedProduct) => {
        const res = await fetch(`/api/product/${pid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        })
        const data = await res.json()
        if (!data.success) return { success: false, message: data.message };

        set((state) => ({ products: state.products.map((product) => product._id == pid ? data.updatedProduct : product) }))
        return { success: true, message: "update success" };
    }, 
    
}));

export default useProductStore
