import { useState, useEffect } from "react";
import { getProducts, addProduct } from "../api";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await getProducts(token);
            setProducts(res.data);
        } catch (error) {
            alert("Failed to fetch products");
        }
    };

    const handleAddProduct = async () => {
        try {
            await addProduct(token, { productName, price, stock });
            fetchProducts();
            setProductName("");
            setPrice("");
            setStock("");
        } catch (error) {
            alert("Failed to add product");
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl">Product List</h2>
            <div className="mb-5">
                <input type="text" placeholder="Product Name" className="border p-2" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <input type="number" placeholder="Price" className="border p-2 ml-2" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input type="number" placeholder="Stock" className="border p-2 ml-2" value={stock} onChange={(e) => setStock(e.target.value)} />
                <button onClick={handleAddProduct} className="bg-green-500 text-white p-2 ml-2">Add</button>
            </div>
            <table className="w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.ProductID}>
                            <td className="border p-2">{product.ProductID}</td>
                            <td className="border p-2">{product.ProductName}</td>
                            <td className="border p-2">{product.Price}</td>
                            <td className="border p-2">{product.Stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
