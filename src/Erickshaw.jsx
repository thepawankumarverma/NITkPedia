import React from 'react'
import ShopTable from "./MarketDetails";
const Erickshaw = () => {
  const drivers = [
    {
      shopNo: "1",
      shopName: "Bhushan Dua",
      mobileNumber: ["7082505158"],
    },
    {
      shopNo: "2",
      shopName: "Sube Singh",
      mobileNumber: ["9991444576"],
    },
    {
      shopNo: "3",
      shopName: "AjayPal",
      mobileNumber: ["9813775131"],
    },
    {
      shopNo: "4",
      shopName: "Pritam",
      mobileNumber: ["7988871035"],
    },
    {
      shopNo: "5",
      shopName: "Joginder Kumar",
      mobileNumber: ["9896790882"],
    },
    {
      shopNo: "6",
      shopName: "Rajesh Mazi",
      mobileNumber: ["9518165080"],
    },
    {
      shopNo: "7",
      shopName: "Ramesh Chand",
      mobileNumber: ["9813203899"],
    },
    {
      shopNo: "8",
      shopName: "Babli",
      mobileNumber: ["9050078144"],
    },
    {
      shopNo: "9",
      shopName: "Pappy",
      mobileNumber: ["9996368970"],
    },
    {
      shopNo: "10",
      shopName: "Suraj Pal",
      mobileNumber: ["8053040893"],
    },
    {
      shopNo: "11",
      shopName: "Nand Pal",
      mobileNumber: ["9729694237"],
    },
    {
      shopNo: "12",
      shopName: "Pawan Kumar",
      mobileNumber: ["9254606137"],
    },
    {
      shopNo: "13",
      shopName: "Kuldeep Singh",
      mobileNumber: ["9817870881"],
    },
    {
      shopNo: "14",
      shopName: "Ishwar Singh",
      mobileNumber: ["9991354436"],
    },
    {
      shopNo: "15",
      shopName: "Shyam Lal",
      mobileNumber: ["7206639441"],
    },
  ];
  return (
    <div>
      <ShopTable shops={drivers} title={"E-Rickshaw Driver"} col1={"S.No."} col2={"Driver Name"} col3={"Driver Number"}></ShopTable>
    </div>
  )
}

export default Erickshaw
