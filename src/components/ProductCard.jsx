import Price from "./Price";

export default function ProductCard({ product }) {
  return (
    <div className="group w-72 rounded-xl mx-auto border border-border dark:border-darkborder
      bg-card dark:bg-darkcard shadow-sm hover:shadow-2xl
      transition-all duration-500 hover:-translate-y-2">

      <div className="h-72 overflow-hidden border-b border-border dark:border-darkborder">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
      </div>

      <div className="p-4 flex flex-col h-48 font-primary">
        <h3 className="text-xl font-semibold text-primary dark:text-accent mb-2">
          {product.name}
        </h3>

        <p className="text-text-muted dark:text-gray-400 mb-4">
          {product.description}
        </p>

        <div className="mt-auto">
          <span className="inline-block bg-gradient-to-r from-[#f3e8c7] to-[#e6c87a]
            text-[#3a2a00] font-semibold px-4 py-2 rounded-lg shadow-md">
            <Price currency="$" price={product.price} />
          </span>
        </div>
      </div>
    </div>
  );
}
