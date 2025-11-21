export const AutomationOverlay = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* SVG Automation elements */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Define gradient and animations */}
        <defs>
          <linearGradient
            id="flowGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#27D6F5" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#27D6F5" stopOpacity="0.2" />
          </linearGradient>

          <style>
            {`
              @keyframes pulse-node {
                0%, 100% { r: 5; opacity: 1; }
                50% { r: 8; opacity: 0.6; }
              }
              @keyframes flow-line {
                0% { strokeDashoffset: 100; }
                100% { strokeDashoffset: 0; }
              }
              @keyframes float-up {
                0% { transform: translateY(0); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateY(-60px); opacity: 0; }
              }
              .pulse { animation: pulse-node 2s infinite; }
              .flow { animation: flow-line 3s infinite linear; }
            `}
          </style>
        </defs>

        {/* Background gradient overlay */}
        <rect
          width="1200"
          height="600"
          fill="url(#flowGradient)"
          opacity="0.15"
        />

        {/* Network nodes - Top left area */}
        <circle cx="150" cy="100" r="5" fill="#27D6F5" className="pulse" />
        <circle cx="250" cy="80" r="5" fill="#27D6F5" className="pulse" />
        <circle cx="350" cy="120" r="5" fill="#27D6F5" className="pulse" />

        {/* Network nodes - Middle area */}
        <circle cx="600" cy="300" r="6" fill="#27D6F5" className="pulse" />
        <circle cx="450" cy="250" r="5" fill="#27D6F5" className="pulse" />
        <circle cx="750" cy="280" r="5" fill="#27D6F5" className="pulse" />

        {/* Network nodes - Right area */}
        <circle cx="900" cy="150" r="5" fill="#27D6F5" className="pulse" />
        <circle cx="1000" cy="200" r="5" fill="#27D6F5" className="pulse" />
        <circle cx="1050" cy="350" r="5" fill="#27D6F5" className="pulse" />

        {/* Connection lines with animation */}
        <line
          x1="150"
          y1="100"
          x2="250"
          y2="80"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="100"
          className="flow"
        />
        <line
          x1="250"
          y1="80"
          x2="350"
          y2="120"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="100"
          className="flow"
        />
        <line
          x1="350"
          y1="120"
          x2="600"
          y2="300"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="150"
          className="flow"
        />
        <line
          x1="450"
          y1="250"
          x2="600"
          y2="300"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="120"
          className="flow"
        />
        <line
          x1="600"
          y1="300"
          x2="750"
          y2="280"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="120"
          className="flow"
        />
        <line
          x1="750"
          y1="280"
          x2="900"
          y2="150"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="150"
          className="flow"
        />
        <line
          x1="900"
          y1="150"
          x2="1000"
          y2="200"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="100"
          className="flow"
        />
        <line
          x1="1000"
          y1="200"
          x2="1050"
          y2="350"
          stroke="#27D6F5"
          strokeWidth="2"
          opacity="0.4"
          strokeDasharray="130"
          className="flow"
        />

        {/* Data flow indicators - moving elements */}
        <g opacity="0.6">
          {/* Top flow */}
          <circle cx="150" cy="100" r="3" fill="#F58A7A">
            <animate
              attributeName="cx"
              from="150"
              to="350"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="100"
              to="120"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Middle flow */}
          <circle cx="450" cy="250" r="3" fill="#F58A7A">
            <animate
              attributeName="cx"
              from="450"
              to="750"
              dur="5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="250"
              to="280"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Right flow */}
          <circle cx="900" cy="150" r="3" fill="#F58A7A">
            <animate
              attributeName="cx"
              from="900"
              to="1050"
              dur="4.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="150"
              to="350"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Data processing indicators - bottom area */}
        <g opacity="0.5">
          {/* Processing node 1 */}
          <rect x="100" y="500" width="20" height="20" fill="#27D6F5" rx="2" />
          <rect x="130" y="500" width="20" height="20" fill="#27D6F5" rx="2">
            <animate
              attributeName="opacity"
              from="0.3"
              to="1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="160" y="500" width="20" height="20" fill="#27D6F5" rx="2">
            <animate
              attributeName="opacity"
              from="0.3"
              to="1"
              dur="1.5s"
              begin="0.3s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Processing node 2 */}
          <rect x="550" y="520" width="20" height="20" fill="#27D6F5" rx="2" />
          <rect x="580" y="520" width="20" height="20" fill="#27D6F5" rx="2">
            <animate
              attributeName="opacity"
              from="0.3"
              to="1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="610" y="520" width="20" height="20" fill="#27D6F5" rx="2">
            <animate
              attributeName="opacity"
              from="0.3"
              to="1"
              dur="1.5s"
              begin="0.3s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Processing node 3 */}
          <rect x="950" y="490" width="20" height="20" fill="#27D6F5" rx="2" />
          <rect x="980" y="490" width="20" height="20" fill="#27D6F5" rx="2">
            <animate
              attributeName="opacity"
              from="0.3"
              to="1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="1010" y="490" width="20" height="20" fill="#27D6F5" rx="2">
            <animate
              attributeName="opacity"
              from="0.3"
              to="1"
              dur="1.5s"
              begin="0.3s"
              repeatCount="indefinite"
            />
          </rect>
        </g>
      </svg>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
    </div>
  );
};
