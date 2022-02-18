import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ setProducts, origProducts }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setProducts(() =>
      origProducts.filter((product) =>
        product?.name
          .trim()
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
      )
    );
  };

  const clearSearchInput = () => {
    setSearch('');
    setProducts(origProducts);
  };

  const handleSort = (e) => {
    if (e.target.value === 'a-z') {
      let sortedItems = [...origProducts].sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      setProducts(sortedItems);
    }
    if (e.target.value === 'z-a') {
      let sortedItems = [...origProducts].sort((a, b) =>
        a.name > b.name ? -1 : b.name > a.name ? 1 : 0
      );
      setProducts(sortedItems);
    }
    if (e.target.value === 'priceLowToHign') {
      let sortedItems = [...origProducts].sort((a, b) =>
        a.price > b.price ? 1 : b.price > a.price ? -1 : 0
      );
      setProducts(sortedItems);
    }
    if (e.target.value === 'priceHignToLow') {
      let sortedItems = [...origProducts].sort((a, b) =>
        a.price > b.price ? -1 : b.price > a.price ? 1 : 0
      );
      setProducts(sortedItems);
    }
  };

  return (
    <>
      <header>
        <div className='container d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <Link to='/' className='logo'>
              SY Products
            </Link>
            <div className='search'>
              <input
                type='text'
                value={search}
                onChange={handleSearchChange}
                placeholder='Search product'
              />
              {search && (
                <label onClick={clearSearchInput}>
                  <i className='fa-solid fa-circle-xmark'></i>
                </label>
              )}
            </div>
          </div>

          <div className='d-flex'>
            <select
              name='sort'
              onChange={handleSort}
              className='form-select me-3'
            >
              <option value=''>Sort by</option>
              <option value='a-z'>Name [A-Z]</option>
              <option value='z-a'>Name [Z-A]</option>
              <option value='priceLowToHign'>Price: Low to High</option>
              <option value='priceHignToLow'>Price: Hign to Low</option>
            </select>
            <select name='filter' className='form-select'>
              <option value=''>Filter</option>
            </select>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
