import React, { useState, useEffect } from 'react';
function useCurr(currency){
  const [data, setData]= useState({})
 useEffect(()=>{fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/${currencies}
 .json`).then((res)=>res.json()).then((res)=>setData(res[currency]))},[currency])
 console.log(data);
}
export default useCurr;