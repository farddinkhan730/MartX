import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import Product from "./Product";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";

// const product = {
//   name: "Black Shirt",
//   image: [
//     {
//       url: "https://assets.ajio.com/medias/sys_master/root/20210403/xlEh/6068635baeb269a9e331402e/-473Wx593H-461085638-black-MODEL.jpg",
//     },
//   ],
//   price: "₹2100",
//   _id: "abhishek",
// };

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    state => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(products);
  return (
    <Fragment>
      <MetaData title="MartX" />
      <div className="banner">
        <p>Welcome to MartX</p>
        <h1>Find Amazing Products Below</h1>
        <a href="#container">
          <button>
            Scroll
            {/* Scroll <CgMouse/> */}
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
      <Product product={product} />
      {/* <Product product={product} />
      <Product product={product} />
      <Product product={product} />
      <Product product={product} />
      <Product product={product} /> */}
      
        {products &&
              products.map((product) => (
                <Product key={product._id} product={product} />
              ))}; 

      </div>
    </Fragment>
  );
};
export default Home;
