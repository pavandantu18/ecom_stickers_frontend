import React, { useEffect, useState } from 'react'
import PageHeading from './PageHeading'
import ProductListing from './ProductListing'
// import products from './data/products'
import apiClient from '../api/apiClient'


const Home = () => {
  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
  },[])


  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/products"); // Axios GET Request
      setProducts(response.data); // Update products state with fetched data
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again."
      ); // Extract error message if available
    } finally {
      setLoading(false);
    }
  };

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <span className="text-xl font-semibold">Loading products...</span>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <span className="text-xl text-red-500">Error: {error}</span>
  //     </div>
  //   );
  // }

  return (
    <div className='home-container'>
        <PageHeading title = "Explore Crazy Stickers!">
            <p className="page-heading-paragraph">
                Add a touch of creativity to your space with our wide range of fun and 
                unique stickers. Perfect for any occasion!
            </p>
        </PageHeading>
        <ProductListing products={products} />
    </div>
  )
}

export default Home