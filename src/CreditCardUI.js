import React,{useState} from 'react'

import { CreditCard } from './CreditCard/CreditCard'


export const CreditCardUI = () => {
    const [card, setCard] = useState({
        cardNumber: "1234 5678 9012 3456",
        cardHolder: "KOWALSKI ADAM",
        validThrough: "08/12",
        bankName: "YOU BANK NAME"
    })
    const [cardNumber, setCardNumber] = React.useState("");

    const handleChange =(e)=> {
        if((e.target.name)==="cardNumber" && card.cardNumber.length >=16) return;
        setCard({...card, [e.target.name]:e.target.value});
    }
    return (
        <div>
            <input placeholder="Card Number" name="cardNumber" onChange={handleChange} type="text"/>
            <input placeholder="Card Holder" name="cardHolder" onChange={handleChange} type="text"/>
            <input placeholder="Valid through" name="validThrough" onChange={handleChange} type="text"/>
            <input placeholder="Bank name" name="bankName" onChange={handleChange} type="text"/>
            <CreditCard number={card.cardNumber} cardHolder={card.cardHolder} validThrough={card.validThrough} bankName={card.bankName}/>
        </div>
    )
}
