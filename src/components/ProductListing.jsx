import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({ products }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Popularity");

  const filtered = useMemo(() => {
    return products
      .filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>
        sort === "Price Low to High"
          ? a.price - b.price
          : sort === "Price High to Low"
          ? b.price - a.price
          : b.popularity - a.popularity
      );
  }, [products, search, sort]);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-6 justify-between mt-12">
        <SearchBox label="Search" placeholder="Search products..." value={search} handleSearch={setSearch} />
        <Dropdown label="Sort by" options={sortList} selectedValue={sort} handleSort={setSort} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        {filtered.length ? filtered.map(p => (
          <ProductCard key={p.productId} product={p} />
        )) : (
          <p className="text-center font-bold text-primary">No products found</p>
        )}
      </div>
    </>
  );
}
