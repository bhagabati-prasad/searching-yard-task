import { useEffect, useState } from 'react';
import CustomCard from '../components/CustomCard';
import Header from '../components/Header';
import axios from 'axios';

const Homepage = () => {
  const [origProducts, setOrigProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsRes = await axios.get('/api/products');
        setOrigProducts(productsRes.data?.products);
        setProducts(productsRes.data?.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <Header origProducts={origProducts} setProducts={setProducts} />
      <section className='container'>
        <div className='row'>
          <div className='col-md-10 col-12 mx-auto'>
            <div className='row mt-5 py-5 content_section'>
              {!!products.length ? (
                products.map((product) => (
                  <CustomCard key={product._id} product={product} />
                ))
              ) : (
                <h4>No Product found!</h4>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
