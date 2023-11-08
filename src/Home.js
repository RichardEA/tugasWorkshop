import { useEffect, useState } from "react";
import './Home.css'
import axios from 'axios';

function Home(){

    useEffect(() => {
    axios.get(`https://dummyjson.com/products?select=title,price,description,images`).then(res => {
    console.log(res.data.products)})
    })

    return(
        <div>
            <div class="topnav">
                <span className="title">Workshop UAJ</span>
                <a class="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div> 
            <div class="tes">
                <h1>Our Products</h1>
            </div>
            <div class="card">
                <img src="" alt="image" />
                <div class="container">
                    <h3><b>Product Name</b></h3>
                    <p>description</p>
                </div>
            </div>
        </div>
    )
}

export default Home;