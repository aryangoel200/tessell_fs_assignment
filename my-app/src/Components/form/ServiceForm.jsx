import PriceModal from "./PriceModal";

import Info from "./Info";
import ServiceDetail from "./ServiceDetail";


export default function ServiceForm() {
    return (
        <div className="fa">
            <div className="fd" style={{width: "380px", flexShrink:"0"}}>
                <div className="fg">
                    <Info />
                </div>
                <PriceModal />
            </div>
            <ServiceDetail />
        </div>
    );
} 