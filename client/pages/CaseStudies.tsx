import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";
import { InternationalLogisticsIllustration, FulfillmentIllustration, LastMileDeliveryIllustration } from "@/components/SupplyChainIllustrations";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "International Logistics Network Automation",
      company: "Global Retailer (500K SKUs, 40+ Countries)",
      industry: "International Logistics",
      timeline: "9 months",
      challenge:
        "Global Retailer managed a complex network of 50+ suppliers across 40 countries with completely fragmented systems for customs, documentation, and cross-border logistics. They had no real-time visibility into international shipments, customs clearance took 7-10 days (costing expedited fees), and inefficient routing wasted $8.2M annually. Documentation errors caused 15% of shipments to face delays.",
      solution:
        "Transformity built an end-to-end international logistics automation platform that: (1) Automated customs documentation and compliance checking, (2) Unified visibility across all cross-border shipments with predictive delay detection, (3) Optimized carrier selection and routing across 40+ countries, (4) Integrated with customs authorities for faster clearance.",
      results: [
        { metric: "100%", label: "Network Visibility" },
        { metric: "31%", label: "Cost Reduction" },
        { metric: "38%", label: "Faster Fulfillment" },
        { metric: "98.8%", label: "On-Time Delivery" },
      ],
      details: [
        "Automated customs documentation, reducing clearance time from 7-10 days to 18-24 hours",
        "Achieved real-time visibility across all 50+ suppliers and 40+ country shipments",
        "Reduced international logistics costs by $2.54M annually through optimized routing",
        "Carrier selection now 100% automated based on service level and cost",
        "Documentation errors reduced from 15% to 0.2%, virtually eliminating delay-related fees",
        "Cross-border fulfillment time decreased from 18 days to 11 days end-to-end",
      ],
      outcomes: "Global Retailer transformed international operations, reducing costs by $2.54M annually, improving on-time delivery to 98.8%, and cutting customs processing time by 95%. They now handle exponentially more cross-border volume with zero additional overhead.",
    },
    {
      id: 2,
      title: "Fulfillment Center Operations Automation",
      company: "Omnichannel E-Commerce Leader (10 Facilities, 3M+ Units/Month)",
      industry: "Fulfillment Management",
      timeline: "11 months",
      challenge:
        "E-Commerce Leader operated 10 fulfillment centers processing 3M+ units monthly, but operations were 65% manual. Labor costs consumed 35% of fulfillment budget, picking accuracy was only 94% (causing expensive returns), and average order fulfillment time was 18 hours due to inefficient workflows. System failures caused daily bottlenecks.",
      solution:
        "Transformity automated the entire fulfillment operation: (1) AI-powered order batching and wave optimization to maximize picker efficiency, (2) Intelligent routing and zone allocation using real-time demand signals, (3) Quality control automation with computer vision for 99.4%+ accuracy, (4) Dynamic labor scheduling based on demand forecasting, (5) WMS optimization reducing travel distance by 42%.",
      results: [
        { metric: "67%", label: "Labor Automation" },
        { metric: "99.4%", label: "Picking Accuracy" },
        { metric: "6-hour", label: "Fulfillment Time" },
        { metric: "$4.1M", label: "Annual Savings" },
      ],
      details: [
        "Reduced manual labor dependency from 65% to 22% through intelligent automation",
        "Picking accuracy improved from 94% to 99.4%, reducing costly returns by $1.8M annually",
        "Average order fulfillment time reduced from 18 hours to 6 hours",
        "Picker productivity increased by 156% through AI-optimized batching and routing",
        "Quality inspection time reduced 89% with computer vision automation",
        "Daily labor costs reduced by $12,400 per facility through dynamic scheduling",
        "System uptime improved from 94% to 99.8%, eliminating operational bottlenecks",
      ],
      outcomes: "E-Commerce Leader achieved $4.1M annual savings, transformed 10 facilities into highly efficient automated operations, reduced labor costs while handling 18% more volume, and achieved industry-leading 99.4% accuracy. Customer satisfaction improved significantly due to faster, more accurate fulfillment.",
    },
    {
      id: 3,
      title: "Middle & Last-Mile Delivery Network Optimization",
      company: "Regional Logistics Operator (250+ Vehicles, 150K Daily Stops)",
      industry: "Middle & Last-Mile Operations",
      timeline: "7 months",
      challenge:
        "Regional Logistics managed 250+ vehicles making 150K daily delivery stops but operations were highly inefficient. Manual route planning resulted in 26% failed deliveries, high fuel waste, $12K daily operational waste, and driver retention issues due to poor route quality. Dynamic demand changes couldn't be accommodated real-time.",
      solution:
        "Transformity deployed real-time route optimization and delivery management: (1) AI-powered dynamic routing that optimizes 150K daily stops, adapting to real-time orders/cancellations, (2) Predictive delivery window forecasting to reduce failed deliveries, (3) Driver behavior analytics and load optimization, (4) Real-time exception management and rerouting, (5) Mobile-first visibility for drivers and customers.",
      results: [
        { metric: "99.2%", label: "Delivery Success" },
        { metric: "32%", label: "Route Efficiency" },
        { metric: "18%", label: "Fuel Savings" },
        { metric: "$3.6M", label: "Annual Savings" },
      ],
      details: [
        "Failed deliveries reduced from 26% to 0.8% through predictive windows and smart rerouting",
        "Route efficiency improved 32%, reducing miles driven by 2.1M annually",
        "Fuel consumption decreased 18%, generating $1.2M in direct savings",
        "Driver productivity increased 28% through better route quality and reduced exceptions",
        "Delivery speed improved: 94% of deliveries now within target window vs. 68% previously",
        "Dynamic rerouting handles real-time order changes, eliminating manual intervention",
        "Driver retention improved 35% due to better routes and earning potential",
        "Operational waste reduced from $12K to $3.1K daily",
      ],
      outcomes: "Regional Logistics achieved 99.2% delivery success, saved $3.6M annually, improved driver satisfaction and retention, and became the most reliable last-mile provider in their region. The platform now handles real-time demand changes that were previously impossible to manage.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/34718922/pexels-photo-34718922.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supply Chain Automation that Works
            </h1>
            <p className="text-lg text-white/90">
              Real supply chain transformations from real companies. See how Transformity automates
              international logistics, fulfillment operations, and last-mile delivery at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {caseStudies.map((caseStudy, idx) => {
              const illustrations = [
                InternationalLogisticsIllustration,
                FulfillmentIllustration,
                LastMileDeliveryIllustration,
              ];
              const Illustration = illustrations[idx];
              return (
              <div
                key={caseStudy.id}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 ${
                  idx < caseStudies.length - 1 ? "border-b border-border" : ""
                }`}
              >
                {/* Illustration */}
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-full h-80 bg-gradient-to-b from-primary/5 to-primary/10 rounded-lg overflow-hidden">
                    <Illustration className="w-full h-full" />
                  </div>
                </div>

                {/* Left Side - Content */}
                <div className="lg:col-span-2 flex flex-col justify-between">
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
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Results & Impact</h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">40+</p>
              <p className="text-foreground/60">Supply Chain Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">$280M+</p>
              <p className="text-foreground/60">Value Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">3</p>
              <p className="text-foreground/60">Core Expertise Areas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-foreground/60">Client Retention</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
