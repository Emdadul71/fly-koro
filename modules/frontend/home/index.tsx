import React from "react";
import HomeHero from "./@component/home-hero";
import TopDestinations from "./@component/top-destinations";
import GetInspired from "./@component/get-inspired";
import SubscribeForOffers from "../@common/subscribe-for-offers";
import StoriesTipsGuides from "./@component/stories-tips-guides";

const Home = ({ type }: any) => {
  return (
    <>
      <HomeHero type={type} />
      <TopDestinations />
      <GetInspired />
      <StoriesTipsGuides />
      <SubscribeForOffers />
    </>
  );
};

export default Home;
