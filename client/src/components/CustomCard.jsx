import '../styles/customCard.css';

const CustomCard = ({ product }) => {
  return (
    <>
      <div className='col-md-4 col-12'>
        <div className='card'>
          <div className='image'>
            <img
              src='https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              className='img-fluid'
              alt='product'
            />
          </div>
          <div className='body'>
            <div className='category'>
              <div className='box'>{product?.category}</div>
            </div>
            <h3 className='name'>{product?.name}</h3>
            <h4 className='price'>
              <i className='fa-solid fa-dollar-sign'></i>
              &nbsp;{product?.price}
            </h4>
            <p>{product?.description}</p>
            <p>{product?.rating}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
