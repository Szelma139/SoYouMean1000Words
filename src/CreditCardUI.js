import React, { useState, useEffect } from "react";

import { CreditCard } from "./CreditCard/CreditCard";

export const CreditCardUI = () => {
  const [card, setCard] = useState({
    cardNumber: "1234 5678 9012 3456",
    cardHolder: "KOWALSKI ADAM",
    validThrough: "08/12",
    bankName: "YOU BANK NAME",
  });
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState("");
  const [cardNumber, setCardNumber] = React.useState("");

  const handleChange = (e) => {
    if (e.target.name === "cardNumber" && e.target.value.length >= 16) return;
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    const url = reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      setImage(reader.result);
    };
  };

  return (
    <div>
      <input
        placeholder="Card Number"
        name="cardNumber"
        onChange={handleChange}
        type="text"
      />
      <input
        placeholder="Card Holder"
        name="cardHolder"
        onChange={handleChange}
        type="text"
      />
      <input
        placeholder="Valid through"
        name="validThrough"
        onChange={handleChange}
        type="text"
      />
      <input
        placeholder="Bank name"
        name="bankName"
        onChange={handleChange}
        type="text"
      />
      <input
        onChange={(e) => handleImageUpload(e)}
        type="file"
        onClick={(e) => (e.target.value = "")}
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
      />
      <CreditCard
        number={card.cardNumber}
        cardHolder={card.cardHolder}
        validThrough={card.validThrough}
        bankName={card.bankName}
      />
          <p>{image}</p>
          <img src={image}/>
    </div>
  );
};
