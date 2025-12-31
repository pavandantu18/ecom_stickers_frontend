import { useEffect, useState } from "react";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListing";
import apiClient from "../api/apiClient";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    apiClient.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <main className="min-h-screen bg-normalbg dark:bg-darkbg transition">
      <div className="max-w-[1152px] mx-auto px-6 py-8">
        <PageHeading title="Explore Crazy Stickers!">
          Add personality to your world with premium, playful designs.
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </main>
  );
}
