import React, { useState } from "react";
import "./ShopTable.css"; // Importing the CSS file
import Alert from "./Alert";

const ShopTable = ({ shops,title="NIT Market Shops",col1="Shop Number",col2="Shop Name",col3="Mobile Number" }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setAlertVisible(true);
    setMessage(`${text}`);
  };
  const [alertVisible, setAlertVisible] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      {alertVisible && (
        <Alert
          type="success"
          message={message}
          onClose={() => console.log("Info alert closed!")}
          isVisible={alertVisible}
          setIsVisible={setAlertVisible}
        />
      )}
      <div className="shop-table-container">
        <h2 className="shop-table-header">{title}</h2>
        <table className="shop-table">
          <thead>
            <tr>
              <th>{col1}</th>
              <th>{col2}</th>
              <th>{col3}</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop, index) => (
              <tr key={index}>
                <td>{shop.shopNo}</td>
                <td>{shop.shopName}</td>
                <td>
                  {shop.mobileNumber.map((num, index) =>
                    !num ? (
                      "To be added soon"
                    ) : (
                      <>
                        {num}{" "}
                        <i
                          className="fa fa-copy"
                          style={{ marginRight: "10px", cursor: "pointer" }}
                          onClick={() => <>{copyToClipboard(shop.shopName)}</>}
                        ></i>
                      </>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShopTable;
