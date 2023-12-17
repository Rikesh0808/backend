import React, {useEffect, useState} from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/shopping2.webp";
import bg2 from "../../Assets/shopping4.jpg";
import { getProduct, getRecommendProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/MetaData";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
const [products,setProducts]=useState();
  // const { products,error,loading } = useSelector(
  //   (state) => state.products
  // );
  const getProducts=async()=>{
    const { data } = await axios.get('/api/v2/product/recommend');
    console.log(data.data);
    setProducts(data.data);
  }

  useEffect(() => {
    // dispatch(getRecommendProduct());
    getProducts();
  }, []);
  console.log(products);
  return (
        <>
          <MetaData title="Book Buddies-Home" />
          <Header />
          {/* Carousel */}
          <div className="banner">
            <Carousel className="new">
              <img src="/bg1.JPG" className="bgImg" alt="" />  
              <img src="/bg2.jpg"className="bgImg" alt="" />
              
            </Carousel>
            <div className="home__content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    color:'white',
                    fontFamily: "Segoe Script",
                    fontSize: "2em",
                    fontWeight: "500",
                    width:"100%",
                  }}
                >
                    Discover your next favorite Book
                </h2>
               
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "2em",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                  }}
                >
                  Read with ease let our book recommendation system guide you!
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "4.5em",
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: ".7",
                  }}
                >
            {/*  */}
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    fontSize: "1em",
                    paddingTop: "10px",
                  }}
                >
                 
                </h2>
              </div>
              <div>
                <a href="#container">
                  <button
                    type="submit"
                    style={{
                      width: "120px",
                      height: "50px",
                      border: "none",
                      background: "#3BB77E",
                      margin: "10px 0",
                      fontSize: "1.2vmax",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    SHOP NOW
                  </button>
                </a>
              </div>
            </div>
          </div>

          <h2 className="homeHeading">Recommended Books</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Footer />
          <BottomTab />
        </>
  );
};

export default Home;
