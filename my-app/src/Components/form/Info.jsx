import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BlueDot, Oracle, WhiteDot } from "../Icons"


function Line(){
    return <span style={{
                        display: "inline-block",
                        width: "1px",
                        height: "10px",
                        background: "var(--Color-Surface-surface-200, #DBE0EB)",
                    }} />
}

export default function Info() {

     const wrapperRef = useRef(null);
  const blueDotRef = useRef(null);
  const whiteDotRef = useRef(null);

  const [lineStyle, setLineStyle] = useState({ top: 0, height: 0});

  useEffect(() => {
    if (blueDotRef.current && whiteDotRef.current && wrapperRef.current) {
      const blueTop = blueDotRef.current.getBoundingClientRect().top;
      const whiteTop = whiteDotRef.current.getBoundingClientRect().top;
      const containerTop = wrapperRef.current.getBoundingClientRect().top;

      const offsetTop = blueTop - containerTop + 3+9+5; // 3 = half of 6px dot height
      const offsetBottom = whiteTop - containerTop + 3+9;

      setLineStyle({
        top: `${offsetTop}px`,
        height: `${offsetBottom - offsetTop}px`,
      });
    }
  }, []);



  useLayoutEffect(() => {
  if (blueDotRef.current && whiteDotRef.current && wrapperRef.current) {
    const blue = blueDotRef.current.getBoundingClientRect();
    const white = whiteDotRef.current.getBoundingClientRect();
    const container = wrapperRef.current.getBoundingClientRect();

    const blueCenter = (blue.top - container.top + blue.height / 2) ;
    const whiteCenter = white.top - container.top + white.height / 2;

    setLineStyle({
      top: `${blueCenter}px`,
      height: `${whiteCenter - blueCenter}px`,
    });
  }
}, []);


    return (
    
    <div>

        <div ref={wrapperRef} style={{ position: "relative" }}>
      {/* Connecting Line */}
      <div
        style={{
          position: "absolute",
          left: "22.5px", // half of dot width for center alignment
          width: "1px",
          background: "var(--Color-Surface-surface-200, #DBE0EB)",
          zIndex: "1",
          borderRadius: "0 0 99px 99px",
          ...lineStyle,
        }}
      />


        <div  className="fr">
            <div className="a1" ref={blueDotRef}>
        <BlueDot style={{width:"6px", height:"6px",fill:
            "var(--Color-Primary-primary-200, #0942B3)",
        }}/></div>
           <div className="fn" >
            <span className="fo">Service Details</span>
            <div className="fp">
                <div style={{display: "flex", gap: "6px", alignItems:"center"}}>
                    <span className="fq">Oracle_service</span>
                    <Oracle  style={{align:"center"}}/>
                    <span style={{
                        display: "inline-block",
                        width: "1px",
                        height: "10px",
                        background: "var(--Color-Surface-surface-200, #DBE0EB)",
                    }} />

                </div>
                <span className="fq">oracle_para_profile</span>
            </div>
        </div>
    </div>
    







    <div  className="fr" style={{width: "339px"}}>
        <div ref={whiteDotRef}>
        <WhiteDot style={{width:"6px", height:"6px"}}/></div>
           <div className="fn" >
            <span className="fo" style={{color:"#1A2031"}}>Aditional Setting</span>
            <div className="fp">
                <div style={{display: "flex", gap: "6px", alignItems:"center"}}>
                    <span className="fq">No Preference</span>
                    <span className="fq">Enabled minor version update</span>
                    <Line/>
                </div>
                <div style={{display: "flex", gap: "6px", alignItems:"center"}}>
                <span className="fq">7-day PITR</span>
                <span className="fq">01:00 snapshot time</span>
                <Line/>
                </div>
            </div>
        </div>
        
    </div>

    </div> 
    </div>








)
}