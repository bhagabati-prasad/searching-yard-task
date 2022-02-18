import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = ({ setProducts, origProducts }) => {
  const [search, setSearch] = useState('');
  const [filterOptions, setFilterOptions] = useState([
    { field: 'category', value: 'shoe', show: 'Shoe' },
    { field: 'category', value: 'mobile', show: 'Mobile' },
    { field: 'rating', value: 1, show: 'Rating 1' },
    { field: 'rating', value: 2, show: 'Rating 2' },
    { field: 'rating', value: 3, show: 'Rating 3' },
    { field: 'rating', value: 4, show: 'Rating 4' },
    { field: 'rating', value: 5, show: 'Rating 5' },
  ]);

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
      setProducts((product) =>
        [...product].sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        )
      );
    }
    if (e.target.value === 'z-a') {
      setProducts((product) =>
        [...product].sort((a, b) =>
          a.name > b.name ? -1 : b.name > a.name ? 1 : 0
        )
      );
    }
    if (e.target.value === 'priceLowToHign') {
      setProducts((product) =>
        [...product].sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        )
      );
    }
    if (e.target.value === 'priceHignToLow') {
      setProducts((product) =>
        [...product].sort((a, b) =>
          a.price > b.price ? -1 : b.price > a.price ? 1 : 0
        )
      );
    }
  };

  const handleFilter = (filter) => {
    setProducts(() =>
      origProducts.filter((product) =>
        filter.field !== 'rating'
          ? product[filter.field] === filter.value
          : Math.floor(product.rating) === filter.value
      )
    );
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
            <div className='filter'>
              <label className='dropdown'>Filter</label>
              <div className='dropdown_container'>
                {filterOptions.map((filter) => (
                  <label
                    key={filter.value}
                    htmlFor={filter.value}
                    className='dropdown'
                    onClick={() => handleFilter(filter)}
                  >
                    {filter.show}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
