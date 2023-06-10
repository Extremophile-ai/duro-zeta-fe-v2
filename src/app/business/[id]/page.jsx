"use client"

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import axios from "axios"

export default function BusinessPage({
  params
}) {
const [businessData, setBusinessData] = useState({})
const router = useRouter()
console.log(businessData)
  const getBusiness = async () => {
    const id = params?.id
    
    try {
       const res = await fetch(`http://localhost:5500/business/${id}`)
       
       const data = await res.json()
       console.log(data)
setBusinessData(data?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBusiness()
  }, [])
  return (
    <section className="max-w-[1440px] mx-auto px-20 py-[76px]">
      <section className="flex items-center justify-between mb-[82px]">
        <h2 className="mr-20 font-bold">DURO</h2>
        <input
          type="text"
          placeholder="Search for a business"
          className="w-full border-2 border-black rounded-[8px] px-6 py-6"
        />
      </section>

      <section className="mt-[143px]">
       
        <div className="flex items-center justify-between flex-wrap mt-[30px]">
          <div className="flex items-center">
            <div
              className="mr-10"
              style={{
                background: "#D9D9D9",
                borderRadius: "16px",
                width: 175,
                height: 175,
              }}
            ></div>
            <div>
              <p
                style={{
                  fontSize: "24px",
                }}
              >
                {businessData?.name || ""}
              </p>
              <p
                style={{
                  color: "#858585",
                  fontSize: 20,
                }}
              >
                {businessData?.location?.address}
              </p>
            </div>
          </div>
          <div className="max-w-[369px] flex flex-col items-center">
            <img src={businessData?.queue?.qrcode} alt="" />
            <p className="text-center">Scan QR Code to join the queue on your mobile phone. </p>
          </div>
        </div>
      </section>
    </section>
  );
}
   