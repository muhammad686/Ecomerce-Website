import React from "react";
import "../assets/styles/Home.css";
import MainPage from "../components/product/mainScreenPage";
import CashBacks from "../components/product/cashbacks";
import Brands from "../components/product/brands";
import Catagory from "../components/product/catagory";
import Deals from "../components/product/deals";
import Discounts from "../components/product/discounts";
import WeeklyBestDeals from "../components/product/weeklybestdeals";

function Home() {
  return (
    <div className="main-container-homepage">
      <MainPage></MainPage>
      <Catagory></Catagory>
      <Deals></Deals>
      <Brands></Brands>
      <Discounts></Discounts>
      <WeeklyBestDeals></WeeklyBestDeals>
      <CashBacks></CashBacks>
    </div>
  );
}

export default Home;
