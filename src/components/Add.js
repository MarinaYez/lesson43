import React from "react";

function Add({ changeName, changePrice, checkName, checkPrice, nameInput, priceInput, addProducts }) {
    return (
        <div className="add">
            <label>Product name</label>
            <input onInput={changeName} onBlur = {checkName} value = {nameInput} type="text" />
            <label>Product price</label>
            <input onInput={changePrice} onBlur = {checkPrice} value={priceInput} type="number" />
            <button onClick={addProducts} type="button">Add</button>
        </div>
    )
}

export default Add;