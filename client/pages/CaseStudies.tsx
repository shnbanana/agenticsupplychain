import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Financial Services Automation",
      company: "FinTech Innovation Corp",
      industry: "Financial Services",
      timeline: "6 months",
      challenge:
        "FinTech Innovation Corp was processing 40% of operational tasks manually, leading to high error rates, increased compliance risk, and significant operational overhead. Their legacy systems couldn't communicate effectively, causing data silos and slow decision-making.",
      solution:
        "We designed and implemented an integrated AI automation platform that connected disparate systems and automated key workflows. The solution included intelligent document processing, automated compliance checking, and predictive risk assessment models.",
      results: [
        { metric: "65%", label: "Process Automation" },
        { metric: "$2.3M", label: "Annual Savings" },
        { metric: "10x", label: "Faster Processing" },
        { metric: "99.2%", label: "Accuracy Improvement" },
      ],
      details: [
        "Automated loan processing reduced turnaround from 5 days to 12 hours",
        "Compliance checking accuracy improved from 94% to 99.2%",
        "Operational costs reduced by 62%",
        "Employee satisfaction increased as manual tasks eliminated",
      ],
      outcomes: "FinTech Innovation Corp now processes 10x more transactions with the same team size, has reduced compliance incidents to nearly zero, and generated $2.3M in annual savings that was reinvested in growth initiatives.",
    },
    {
      id: 2,
      title: "Healthcare Operations Optimization",
      company: "Regional Medical Network",
      industry: "Healthcare",
      timeline: "4 months",
      challenge:
        "Regional Medical Network operated 15 clinics with inconsistent processes, manual scheduling, and significant administrative overhead. Patient wait times averaged 45 minutes, appointment scheduling was error-prone, and staff spent 30% of time on administrative tasks.",
      solution:
        "We implemented an AI-powered patient management system with intelligent scheduling, automated appointment reminders, predictive no-show detection, and administrative automation. The system learned from historical patterns to optimize resource allocation.",
      results: [
        { metric: "45%", label: "Wait Time Reduction" },
        { metric: "70%", label: "Faster Scheduling" },
        { metric: "28%", label: "No-Show Reduction" },
        { metric: "92%", label: "Patient Satisfaction" },
      ],
      details: [
        "Average wait times reduced from 45 to 25 minutes",
        "Appointment scheduling time reduced from 8 minutes to 2.5 minutes per patient",
        "No-show rates decreased from 18% to 13%",
        "Staff administrative time reduced by 35%, freeing time for patient care",
      ],
      outcomes: "The network now serves 25% more patients with the same staff, patient satisfaction scores increased significantly, and clinical staff can focus on what they do best—providing care.",
    },
    {
      id: 3,
      title: "Retail Intelligence Platform",
      company: "E-Commerce Leader",
      industry: "Retail & E-Commerce",
      timeline: "8 months",
      challenge:
        "E-Commerce Leader had data spread across multiple systems with no unified view. Inventory decisions were reactive, leading to frequent stockouts (costing revenue) and overstock situations (tying up capital). Demand forecasting accuracy was only 62%.",
      solution:
        "We built a unified AI-powered intelligence platform that consolidated data from all channels, implemented advanced demand forecasting using ML, and created real-time inventory optimization recommendations. The system learned from trends and external factors.",
      results: [
        { metric: "35%", label: "Stockout Reduction" },
        { metric: "22%", label: "Revenue Growth" },
        { metric: "87%", label: "Forecast Accuracy" },
        { metric: "18%", label: "Inventory Carrying Cost" },
      ],
      details: [
        "Demand forecast accuracy improved from 62% to 87%",
        "Stockout incidents reduced by 35%, directly improving revenue",
        "Inventory turnover improved by 22%",
        "Markdown rates reduced by 12% through better inventory positioning",
      ],
      outcomes: "Revenue increased by $8.7M annually, inventory carrying costs decreased by $1.2M, and the company gained competitive advantage through superior availability and pricing optimization.",
    },
    {
      id: 4,
      title: "Manufacturing Predictive Maintenance",
      company: "Industrial Manufacturing Corp",
      industry: "Manufacturing",
      timeline: "5 months",
      challenge:
        "Industrial Manufacturing faced $500K in monthly losses from unplanned equipment downtime. Maintenance was primarily reactive, and they had no visibility into equipment health until failures occurred. Production scheduling suffered from unexpected equipment outages.",
      solution:
        "We deployed AI-powered predictive maintenance system using IoT sensors and machine learning models trained on historical equipment data. The system identified failure patterns, predicted maintenance needs 2-4 weeks in advance, and optimized maintenance scheduling.",
      results: [
        { metric: "92%", label: "Prediction Accuracy" },
        { metric: "60%", label: "Downtime Reduction" },
        { metric: "$3M+", label: "Annual Savings" },
        { metric: "35%", label: "Maintenance Cost" },
      ],
      details: [
        "Unplanned downtime reduced from 120 hours/month to 48 hours/month",
        "Equipment failure prediction accuracy reached 92%",
        "Maintenance costs reduced by planning and preventing failures",
        "Production schedule reliability improved from 87% to 96%",
      ],
      outcomes: "Annual savings of $3M+ from reduced downtime and optimized maintenance. Production capacity effectively increased by 25% without capital investment. Manufacturing leadership now has visibility and control over equipment health.",
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
