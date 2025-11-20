import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Supply Chain Visibility & Real-Time Optimization",
      company: "Global Logistics Corp",
      industry: "Supply Chain & Logistics",
      timeline: "7 months",
      challenge:
        "Global Logistics Corp managed a complex network of 50+ suppliers across 12 countries with completely fragmented data systems. They had no real-time visibility into shipments, couldn't predict delays, faced constant stockouts and excess inventory, and wasted $5M annually on inefficient routing and expedited shipping.",
      solution:
        "We built an integrated AI-powered supply chain control tower that consolidated data from all suppliers, carriers, and warehouses. The system provided real-time shipment tracking, predictive delay detection, dynamic route optimization, and demand-driven procurement recommendations.",
      results: [
        { metric: "100%", label: "Supply Chain Visibility" },
        { metric: "28%", label: "Cost Reduction" },
        { metric: "40%", label: "Faster Fulfillment" },
        { metric: "35%", label: "Inventory Optimization" },
      ],
      details: [
        "Achieved complete visibility across all supply chain nodes in real-time",
        "Reduced supply chain costs by $5.6M annually through optimized routing and procurement",
        "Average order fulfillment time decreased from 12 days to 7.2 days",
        "Inventory carrying costs reduced by 35% through better demand prediction",
        "Supplier performance visibility improved, enabling better partner negotiations",
      ],
      outcomes: "Global Logistics Corp achieved unparalleled supply chain agility, reduced operational costs by $5.6M annually, and improved customer satisfaction through faster, more reliable delivery. The AI system now proactively identifies and prevents supply chain disruptions.",
    },
    {
      id: 2,
      title: "Financial Services Process Automation & Compliance",
      company: "Regional Bank Financial",
      industry: "Financial Services",
      timeline: "6 months",
      challenge:
        "Regional Bank Financial was processing 40% of operations manually, leading to high error rates (2.3%), increased compliance risk, slow transaction processing (5-7 days for loans), and significant operational overhead. Their legacy systems couldn't communicate effectively, creating data silos and bottlenecks.",
      solution:
        "We designed an integrated AI automation platform connecting disparate systems and automating key workflows. The solution included intelligent document processing, automated compliance checking, predictive risk assessment, and fraud detection using advanced ML models.",
      results: [
        { metric: "65%", label: "Process Automation" },
        { metric: "$2.3M", label: "Annual Savings" },
        { metric: "10x", label: "Faster Processing" },
        { metric: "99.2%", label: "Accuracy Rate" },
      ],
      details: [
        "Automated loan processing reduced turnaround from 5-7 days to 12 hours",
        "Compliance checking accuracy improved from 94% to 99.2%",
        "Fraud detection improved from 78% to 96% accuracy, preventing $2.1M in losses",
        "Operational costs reduced by 62% through automation",
        "Regulatory compliance incidents reduced by 98%",
      ],
      outcomes: "Regional Bank Financial now processes 10x more transactions with the same staff, reduced compliance incidents to nearly zero, achieved $2.3M in annual savings reinvested in growth, and improved customer satisfaction through faster processing.",
    },
    {
      id: 3,
      title: "eCommerce Omnichannel Demand & Inventory Intelligence",
      company: "DTC Fashion & Apparel Brand",
      industry: "eCommerce & Retail",
      timeline: "8 months",
      challenge:
        "DTC Fashion had data fragmented across website, mobile app, social commerce, and retail stores with no unified view. Inventory decisions were reactive and disconnected, causing frequent stockouts on bestsellers (losing $2.4M annually) and excess inventory on slow-moving items. Demand forecasting accuracy was only 62%.",
      solution:
        "We built a unified AI-powered omnichannel intelligence platform consolidating data from all sales channels. The solution included advanced demand forecasting, real-time inventory optimization, dynamic pricing recommendations, and predictive analytics for customer behavior.",
      results: [
        { metric: "35%", label: "Stockout Reduction" },
        { metric: "22%", label: "Revenue Growth" },
        { metric: "87%", label: "Forecast Accuracy" },
        { metric: "18%", label: "Inventory Cost" },
      ],
      details: [
        "Demand forecast accuracy improved from 62% to 87% across all channels",
        "Stockout incidents reduced by 35%, directly recovering $2.4M in lost revenue",
        "Inventory turnover improved by 22%, freeing up working capital",
        "Markdown rates reduced by 14% through better inventory positioning and dynamic pricing",
        "Customer satisfaction scores increased 12% through improved product availability",
      ],
      outcomes: "DTC Fashion increased revenue by $6.8M annually, reduced inventory carrying costs by $1.2M, improved working capital efficiency, and gained competitive advantage through superior omnichannel availability and personalized pricing.",
    },
    {
      id: 4,
      title: "Supply Chain Demand Forecasting & Procurement",
      company: "Consumer Goods Manufacturer",
      industry: "Supply Chain & Manufacturing",
      timeline: "5 months",
      challenge:
        "Consumer Goods Manufacturer relied on manual forecasting with only 68% accuracy, causing excessive safety stock (30% waste), frequent stockouts of critical components, and millions in tied-up working capital. They had no visibility into demand patterns across their complex product portfolio.",
      solution:
        "We implemented advanced AI demand forecasting using historical sales data, market trends, promotional calendars, and external factors. The system automatically generated optimal procurement recommendations, inventory levels, and production schedules with continuous learning.",
      results: [
        { metric: "87%", label: "Forecast Accuracy" },
        { metric: "32%", label: "Excess Inventory" },
        { metric: "$1.8M", label: "Annual Savings" },
        { metric: "40%", label: "Procurement Efficiency" },
      ],
      details: [
        "Demand forecast accuracy improved from 68% to 87% across product portfolio",
        "Reduced safety stock waste by 32%, freeing $2.1M in working capital",
        "Stockout incidents reduced by 28%, improving customer service levels",
        "Procurement costs optimized with automatic recommendations, saving $1.8M annually",
        "Production schedule reliability improved, reducing inventory carrying costs by 26%",
      ],
      outcomes: "Consumer Goods Manufacturer improved cash flow by $2.1M, reduced procurement costs by $1.8M annually, achieved higher service levels with less inventory, and gained agility to respond to market changes through AI-powered demand insights.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-white to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Proven Transformation Results
            </h1>
            <p className="text-lg text-foreground/60">
              Real outcomes from real organizations across diverse industries. See how we've helped
              companies achieve measurable business transformations through AI.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {caseStudies.map((caseStudy, idx) => (
              <div
                key={caseStudy.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 pb-12 ${
                  idx < caseStudies.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* Left Side - Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground mb-2">
                          {caseStudy.title}
                        </h2>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {caseStudy.company}
                        </p>
                      </div>
                    </div>

                    <Badge className="mb-4">{caseStudy.industry}</Badge>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h3 className="font-bold text-foreground mb-2">The Challenge</h3>
                        <p className="text-foreground/70">{caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-2">Our Solution</h3>
                        <p className="text-foreground/70">{caseStudy.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-foreground mb-3">Key Outcomes</h3>
                        <ul className="space-y-2">
                          {caseStudy.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/70">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="text-foreground text-sm italic">{caseStudy.outcomes}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Clock className="w-4 h-4" />
                    <span>{caseStudy.timeline}</span>
                  </div>
                </div>

                {/* Right Side - Results */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Results & Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudy.results.map((result, i) => (
                      <Card key={i} className="border-accent/20 bg-accent/5">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <p className="text-3xl font-bold text-accent">{result.metric}</p>
                            {i === 0 && <TrendingUp className="w-5 h-5 text-accent" />}
                            {i === 1 && <DollarSign className="w-5 h-5 text-accent" />}
                            {i === 2 && <Clock className="w-5 h-5 text-accent" />}
                            {i === 3 && <Users className="w-5 h-5 text-accent" />}
                          </div>
                          <p className="text-sm text-foreground/70">{result.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-foreground/60">Successful Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">$150M+</p>
              <p className="text-foreground/60">Client Value Generated</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">12</p>
              <p className="text-foreground/60">Industries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-foreground/60">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
