import {React,useState,useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom'; 


const Product=()=> {

    const {id}= useParams();
    const[product,setProduct]=useState([]);
    const[loading,setLoading]=useState(false);
    useEffect(() => {
        const getProduct = async () => {
          setLoading(true);
          try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            console.log(response);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProduct(data);
            console.log(product);
          } catch (error) {
            console.error('Error fetching product:', error);
          } finally {
            setLoading(false);
          }
        };
        getProduct();
      }, [id]);
      

const Loading =()=>{
    return(
        <>
        Loading....
        </>
    )
}
const ShowProduct =()=>{
    return(
        <>
        <div className='col-md-6'>
            <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className='col-md-6'>
            <h4 className='text-uppercase text-black-50'>{product.category}</h4>
            <h1 className='dispaly-5'>{product.title}</h1>
            <p className='lead fw-bolder'>
                Rating{product.rating && product.rating.rate}
                <i className='fa fa-star'></i>
            </p>
            <h3 className='display-6 fw-bold my-4'>
                ${product.price}
            </h3>
            <p className='lead'>{product.description}</p>
            <button className='btn btn-outline-dark px-4 py-2'> Add to Cart</button>
            <NavLink to="/cart" className='btn btn-dark ms-2 px-4 '> Add to Cart</NavLink>
        </div>
        </>
    )
}

      return (
    <div>
        <div className="container py-5">
            <div className="row py-4">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
        </div>
  )
}

export default Product;