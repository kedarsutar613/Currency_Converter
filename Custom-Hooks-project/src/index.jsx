import React from "react";
function Input({
   label,
   amount,
   onAmountChange,
   onCurrencyChange,
   curremcyOptions=[],
   selectCurrency="usd",
   amoutDisable=false,
   currencyDisable=false,//this user does not want give currency 
   className=""
}){
    return(
        <div className={`bg-red-500 p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label className="text-black/40 mb-2 inline-block">{label}</label>
                <input className="outline-none w-full bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                disabled ={amoutDisable} 
                value={amount}
                onChange={onAmountChange}/>
            </div>
              <div className='w-1/2 flex-wrap justify-end text-right '></div>
        </div>
    )
}
export default Input;