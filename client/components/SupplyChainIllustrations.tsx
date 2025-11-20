// International Logistics Illustration
export const InternationalLogisticsIllustration = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="300" fill="#f8fafb" />
      
      {/* Ocean waves */}
      <path d="M 0 220 Q 50 210 100 220 T 200 220 T 300 220 T 400 220" stroke="#27D6F5" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M 0 240 Q 50 230 100 240 T 200 240 T 300 240 T 400 240" stroke="#27D6F5" strokeWidth="2" fill="none" opacity="0.2" />
      
      {/* Container ship */}
      <g>
        <rect x="50" y="180" width="120" height="50" fill="#0A2342" rx="5" />
        <rect x="60" y="160" width="100" height="20" fill="#0A2342" rx="3" />
        {/* Containers */}
        <rect x="65" y="135" width="12" height="25" fill="#27D6F5" />
        <rect x="82" y="135" width="12" height="25" fill="#27D6F5" />
        <rect x="99" y="135" width="12" height="25" fill="#27D6F5" />
        <rect x="116" y="135" width="12" height="25" fill="#27D6F5" />
        <rect x="65" y="110" width="12" height="25" fill="#F58A7A" />
        <rect x="82" y="110" width="12" height="25" fill="#F58A7A" />
      </g>
      
      {/* Airplane */}
      <g>
        <ellipse cx="250" cy="80" rx="40" ry="15" fill="#27D6F5" opacity="0.7" />
        <polygon points="250,60 270,85 230,85" fill="#27D6F5" opacity="0.7" />
        {/* Cargo markings */}
        <circle cx="235" cy="80" r="3" fill="#0A2342" />
        <circle cx="265" cy="80" r="3" fill="#0A2342" />
      </g>
      
      {/* Truck on road */}
      <g>
        <rect x="280" y="200" width="70" height="35" fill="#0A2342" rx="3" />
        <circle cx="300" cy="240" r="8" fill="#F58A7A" />
        <circle cx="340" cy="240" r="8" fill="#F58A7A" />
        {/* Trailer connection */}
        <rect x="320" y="225" width="15" height="10" fill="#0A2342" />
      </g>
      
      {/* Network nodes connecting */}
      <circle cx="100" cy="100" r="6" fill="#27D6F5" />
      <circle cx="200" cy="60" r="6" fill="#27D6F5" />
      <circle cx="320" cy="110" r="6" fill="#27D6F5" />
      
      {/* Connecting lines */}
      <line x1="100" y1="100" x2="200" y2="60" stroke="#27D6F5" strokeWidth="2" opacity="0.5" strokeDasharray="4" />
      <line x1="200" y1="60" x2="320" y2="110" stroke="#27D6F5" strokeWidth="2" opacity="0.5" strokeDasharray="4" />
    </svg>
  );
};

// Fulfillment Center Illustration
export const FulfillmentIllustration = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="300" fill="#f8fafb" />
      
      {/* Warehouse building */}
      <g>
        <rect x="30" y="80" width="340" height="150" fill="#0A2342" />
        <polygon points="30,80 200,20 370,80" fill="#0A2342" opacity="0.8" />
        
        {/* Doors */}
        <rect x="70" y="180" width="40" height="50" fill="#27D6F5" />
        <rect x="140" y="180" width="40" height="50" fill="#27D6F5" />
        <rect x="210" y="180" width="40" height="50" fill="#27D6F5" />
        <rect x="280" y="180" width="40" height="50" fill="#27D6F5" />
      </g>
      
      {/* Shelving units inside */}
      <g opacity="0.6">
        <rect x="50" y="100" width="8" height="70" fill="#F58A7A" />
        <rect x="65" y="100" width="8" height="70" fill="#F58A7A" />
        <rect x="80" y="100" width="8" height="70" fill="#F58A7A" />
        
        <rect x="120" y="100" width="8" height="70" fill="#F58A7A" />
        <rect x="135" y="100" width="8" height="70" fill="#F58A7A" />
        <rect x="150" y="100" width="8" height="70" fill="#F58A7A" />
        
        <rect x="190" y="100" width="8" height="70" fill="#F58A7A" />
        <rect x="205" y="100" width="8" height="70" fill="#F58A7A" />
        <rect x="220" y="100" width="8" height="70" fill="#F58A7A" />
      </g>
      
      {/* Conveyor systems */}
      <g>
        <rect x="45" y="145" width="310" height="6" fill="#27D6F5" opacity="0.5" rx="3" />
        <circle cx="55" cy="148" r="4" fill="#27D6F5" />
        <circle cx="345" cy="148" r="4" fill="#27D6F5" />
      </g>
      
      {/* Boxes on conveyor */}
      <rect x="100" y="140" width="12" height="12" fill="#F58A7A" />
      <rect x="130" y="140" width="12" height="12" fill="#F58A7A" />
      <rect x="160" y="140" width="12" height="12" fill="#F58A7A" />
      <rect x="190" y="140" width="12" height="12" fill="#F58A7A" />
      <rect x="220" y="140" width="12" height="12" fill="#F58A7A" />
      
      {/* Trucks loading/unloading */}
      <g>
        <rect x="20" y="230" width="50" height="30" fill="#0A2342" rx="2" />
        <circle cx="35" cy="265" r="6" fill="#F58A7A" />
        <circle cx="50" cy="265" r="6" fill="#F58A7A" />
      </g>
      
      <g>
        <rect x="330" y="230" width="50" height="30" fill="#0A2342" rx="2" />
        <circle cx="345" cy="265" r="6" fill="#F58A7A" />
        <circle cx="360" cy="265" r="6" fill="#F58A7A" />
      </g>
    </svg>
  );
};

// Last-Mile Delivery Illustration
export const LastMileDeliveryIllustration = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="300" fill="#f8fafb" />
      
      {/* Road */}
      <rect x="0" y="200" width="400" height="60" fill="#d4d4d8" />
      <line x1="0" y1="230" x2="400" y2="230" stroke="white" strokeWidth="3" strokeDasharray="20" opacity="0.6" />
      
      {/* Buildings/homes */}
      <g>
        {/* House 1 */}
        <rect x="30" y="140" width="50" height="50" fill="#0A2342" rx="3" />
        <polygon points="30,140 55,110 80,140" fill="#F58A7A" />
        <rect x="40" y="150" width="10" height="10" fill="#27D6F5" />
        <rect x="60" y="150" width="10" height="10" fill="#27D6F5" />
        
        {/* House 2 */}
        <rect x="130" y="130" width="50" height="60" fill="#0A2342" rx="3" />
        <polygon points="130,130 155,95 180,130" fill="#F58A7A" />
        <rect x="140" y="145" width="10" height="10" fill="#27D6F5" />
        <rect x="160" y="145" width="10" height="10" fill="#27D6F5" />
        
        {/* House 3 */}
        <rect x="230" y="145" width="50" height="45" fill="#0A2342" rx="3" />
        <polygon points="230,145 255,120 280,145" fill="#F58A7A" />
        <rect x="240" y="155" width="10" height="10" fill="#27D6F5" />
        <rect x="260" y="155" width="10" height="10" fill="#27D6F5" />
      </g>
      
      {/* Delivery vehicles */}
      <g>
        {/* Van 1 */}
        <rect x="50" y="215" width="45" height="25" fill="#27D6F5" rx="3" />
        <circle cx="65" cy="245" r="6" fill="#F58A7A" />
        <circle cx="85" cy="245" r="6" fill="#F58A7A" />
        
        {/* Van 2 */}
        <rect x="160" y="210" width="45" height="25" fill="#27D6F5" rx="3" />
        <circle cx="175" cy="240" r="6" fill="#F58A7A" />
        <circle cx="195" cy="240" r="6" fill="#F58A7A" />
        
        {/* Van 3 */}
        <rect x="280" y="220" width="45" height="25" fill="#27D6F5" rx="3" />
        <circle cx="295" cy="250" r="6" fill="#F58A7A" />
        <circle cx="315" cy="250" r="6" fill="#F58A7A" />
      </g>
      
      {/* Delivery routes (dotted lines) */}
      <g stroke="#27D6F5" strokeWidth="2" opacity="0.4" strokeDasharray="4" fill="none">
        <path d="M 95 215 Q 110 170 55 140" />
        <path d="M 205 210 Q 160 155 155 130" />
        <path d="M 325 220 Q 310 170 255 145" />
      </g>
      
      {/* Delivery checkmarks */}
      <g fill="#27D6F5" opacity="0.7">
        <circle cx="55" cy="135" r="4" />
        <circle cx="155" cy="120" r="4" />
        <circle cx="255" cy="140" r="4" />
      </g>
    </svg>
  );
};

// Supply Chain Network Illustration
export const SupplyChainNetworkIllustration = ({ className = "w-full h-full" }) => {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="300" fill="#f8fafb" />
      
      {/* Network nodes and connections */}
      {/* Top tier - Suppliers */}
      <g>
        <circle cx="70" cy="50" r="8" fill="#27D6F5" />
        <circle cx="150" cy="40" r="8" fill="#27D6F5" />
        <circle cx="230" cy="45" r="8" fill="#27D6F5" />
        <circle cx="310" cy="50" r="8" fill="#27D6F5" />
        <text x="150" y="25" textAnchor="middle" fontSize="12" fill="#1C1C1C" fontWeight="bold">Suppliers</text>
      </g>
      
      {/* Middle tier - Distribution Centers */}
      <g>
        <circle cx="100" cy="150" r="10" fill="#0A2342" />
        <circle cx="200" cy="150" r="10" fill="#0A2342" />
        <circle cx="300" cy="150" r="10" fill="#0A2342" />
        <text x="200" y="180" textAnchor="middle" fontSize="12" fill="#1C1C1C" fontWeight="bold">Distribution</text>
      </g>
      
      {/* Bottom tier - Delivery Points */}
      <g>
        <circle cx="80" cy="270" r="8" fill="#F58A7A" />
        <circle cx="150" cy="270" r="8" fill="#F58A7A" />
        <circle cx="220" cy="270" r="8" fill="#F58A7A" />
        <circle cx="290" cy="270" r="8" fill="#F58A7A" />
        <text x="185" y="295" textAnchor="middle" fontSize="12" fill="#1C1C1C" fontWeight="bold">Customers</text>
      </g>
      
      {/* Connection lines */}
      <g stroke="#27D6F5" strokeWidth="1.5" opacity="0.4" fill="none" strokeDasharray="3">
        {/* Suppliers to Distribution */}
        <line x1="70" y1="50" x2="100" y2="150" />
        <line x1="150" y1="40" x2="200" y2="150" />
        <line x1="230" y1="45" x2="200" y2="150" />
        <line x1="310" y1="50" x2="300" y2="150" />
        
        {/* Distribution to Customers */}
        <line x1="100" y1="150" x2="80" y2="270" />
        <line x1="100" y1="150" x2="150" y2="270" />
        <line x1="200" y1="150" x2="150" y2="270" />
        <line x1="200" y1="150" x2="220" y2="270" />
        <line x1="300" y1="150" x2="220" y2="270" />
        <line x1="300" y1="150" x2="290" y2="270" />
      </g>
      
      {/* Flow indicators */}
      <g fill="#27D6F5" opacity="0.6">
        <polygon points="85,100 95,110 85,115" />
        <polygon points="140,180 145,190 135,185" />
        <polygon points="280,180 290,185 280,190" />
      </g>
    </svg>
  );
};
