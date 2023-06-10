import React from "react";

export default function BusinessesPage() {
  return (
    <section className="max-w-[1440px] mx-auto px-20 py-[76px]">
      <section className="flex items-center justify-between mb-[82px]">
        <h2 className="mr-20 font-bold">DURO</h2>
        <input type="text" placeholder="Search for a business" className="w-full border-2 border-black rounded-[8px] px-6 py-6" />
      </section>
      <section >
        <h6 className="text-[36px]">Businesses around you</h6>
        <div className="flex items-center flex-wrap mt-[30px]">
          {[1,2,3,4,5,6].map((arr, i) => (
            <div
                key={i}
                className="mr-10 last-of-type:mr-0"
                style={{
                  background: "#D9D9D9",
                  borderRadius: "16px",
                  width: 175,
                  height: 175,
                }}
            ></div>
          ))}
        </div>
      </section>
      <section className="mt-[73px]">
        <h6 className="text-[36px]">Recently visited</h6>
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
         <p style={{
          fontSize: "24px"
         }}>Guaranty Trust Bank</p>
          <p style={{
            color: "#858585",
            fontSize: 20
          }}>Ikeja, Lagos, Nigeria. </p>
         </div>
        </div>
        </div>
      </section>
    </section>
  );
}
