import { products } from "../components/redux/data";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "../components/header/header";
import Slider from "../components/slider/slider";
import Blogs from "../components/Blogs/blogs";
import Products from "../components/products/products";
import Sales from "../components/sales/sales";
import Footer from "../components/footer/footer";


export default function Home() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(products());
  },[dispatch])
  return (
    <div>
        <Header />
        <Slider />
        <Blogs />
        <Products />
        <Sales />
        <Footer />
    </div>
  )
}