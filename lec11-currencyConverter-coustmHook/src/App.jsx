/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Input } from './components'//index file mule
import UseCurrencyInfo from './hooks/useCurrencyinfo'
function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]= useState("inr")
  const [to,setTo]= useState("usd")
  const [convertedAmount,setCOnvertedAmount]=useState(0)
  const CurrencyInfo = UseCurrencyInfo(from)
  Object.keys(CurrencyInfo) //sagle object chya keya gheil  
  const swap  = ()=>{
    setFrom(to)
    setTo(from)
    setCOnvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setCOnvertedAmount(amount*CurrencyInfo[to])
  }
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                currencyOptions={Option}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                onAmountChange={(amount)=>setAmount(amount)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={Option}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from} to {to}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
