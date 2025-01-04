import React from "react";
import ShopTable from "./MarketDetails";
const NitMarket = () => {
  const shops = [
    {
      shopNo: "1(I)",
      shopName: "M/s. MEHTA CONFECTIONARY & SWEETS",
      mobileNumber: [""],
    },
    {
      shopNo: "1(II)",
      shopName: "M/s. R.K. DRYCLEANERS",
      mobileNumber: ["9416481766"],
    },
    {
      shopNo: "2",
      shopName: "M/s. MISHRA FRUIT & JUICE",
      mobileNumber: ["9896929326"],
    },
    {
      shopNo: "3",
      shopName: "M/s. VISION SALES",
      mobileNumber: [""],
    },
    {
      shopNo: "4",
      shopName: "M/s. NEW CHOICE PHOTO STUDIO",
      mobileNumber: ["9034729378"],
    },
    {
      shopNo: "6",
      shopName: "S.B.I. ATM",
      mobileNumber: [""],
    },
    {
      shopNo: "7",
      shopName: "M/s. CHOICE HAIR DRESSER",
      mobileNumber: [""],
    },
    {
      shopNo: "8",
      shopName: "CONFECTIONERY SHOP",
      mobileNumber: [""],
    },
    {
      shopNo: "9",
      shopName: "M/s. GARG ENTERPRISES",
      mobileNumber: ["88149100000", "9996820635"],
    },
  ];
  return (
    <div>
      <ShopTable shops={shops}></ShopTable>
    </div>
  );
};

export default NitMarket;
