import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap } from "lucide-react";

export default function Consultants() {
  const consultants = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "International Logistics & Network Director",
      bio: "18+ years supply chain operations and network optimization. Former VP of Global Logistics at major carrier managing operations in 40+ countries. Expert in customs automation, cross-border compliance, and international supply chain design handling 500M+ units annually.",
      experience: [
        "Built and scaled logistics network across 40+ countries",
        "Managed 1,000+ facilities and 50+ international partners",
        "Automated customs documentation, reducing clearance time by 95%",
        "Implemented real-time visibility systems for 500M+ annual units",
      ],
      expertise: [
        "International Logistics",
        "Customs & Compliance",
        "Network Design",
        "Cross-border operations",
        "Supplier management",
        "Carrier optimization",
      ],
      companies: ["FedEx International", "DHL Global", "C.H. Robinson"],
      icon: Code,
    },
    {
      id: 2,
      name: "James Rodriguez",
      title: "Fulfillment Automation & Operations Lead",
      bio: "15+ years fulfillment automation and facility operations. Built robotic automation systems and WMS platforms handling 3M+ units/month. Expert in labor optimization, picking automation, and large-scale fulfillment center design.",
      experience: [
        "Designed and automated 10+ fulfillment centers (3M+ units/month capacity)",
        "Reduced fulfillment labor costs by 67% through intelligent automation",
        "Achieved 99.4% picking accuracy using computer vision systems",
        "Reduced order fulfillment time from 18 hours to 6 hours",
      ],
      expertise: [
        "Fulfillment Automation",
        "Robotics & Computer Vision",
        "WMS Optimization",
        "Labor scheduling",
        "Quality control",
        "Facility design",
      ],
      companies: ["Amazon Fulfillment", "Shopify Logistics", "3PL Leader"],
      icon: Brain,
    },
    {
      id: 3,
      name: "Emily Thompson",
      title: "Last-Mile Delivery & Routing Lead",
      bio: "16+ years last-mile delivery operations and route optimization. Led routing networks for 3,000+ vehicles, 150K+ daily deliveries. Expert in dynamic routing, failed delivery reduction, and driver performance optimization.",
      experience: [
        "Optimized routing for 250+ vehicle fleets (150K+ daily stops)",
        "Reduced failed deliveries from 26% to 0.8% using predictive analytics",
        "Improved route efficiency by 32%, saving 2.1M miles/year",
        "Increased driver productivity 28% through better route quality",
      ],
      expertise: [
        "Last-Mile Delivery",
        "Route Optimization",
        "Driver Management",
        "Predictive delivery windows",
        "Exception management",
        "Performance analytics",
      ],
      companies: ["UPS Last-Mile", "Roadie Logistics", "Regional Carriers"],
      icon: Zap,
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
              "url('https://images.pexels.com/photos/6238186/pexels-photo-6238186.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supply Chain Experts
            </h1>
            <p className="text-lg text-white/90">
              The Transformity team combines 150+ years of supply chain expertise. Our consultants
              have built, scaled, and optimized operations handling 500M+ units annually.
              Deep knowledge of international logistics, fulfillment, and last-mile delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultants.map((consultant) => (
              <Card key={consultant.id} className="border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{consultant.name}</CardTitle>
                      <CardDescription className="text-accent font-semibold text-base">
                        {consultant.title}
                      </CardDescription>
                    </div>
                    <consultant.icon className="w-8 h-8 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{consultant.bio}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Experience */}
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Key Experience</h4>
                    <ul className="space-y-2">
                      {consultant.experience.map((exp, i) => (
                        <li key={i} className="flex gap-3 text-sm text-foreground/70">
                          <span className="text-accent font-bold flex-shrink-0">•</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-bold text-foreground mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {consultant.expertise.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Companies */}
                  <div>
                    <h4 className="font-bold text-foreground mb-3 text-sm">Companies</h4>
                    <div className="flex flex-wrap gap-2">
                      {consultant.companies.map((company, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-b border-slate-200/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How We Work Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Embedded Partnership</h3>
              <p className="text-foreground/70">
                We work as an extension of your team, embedded in daily operations and decisions.
                You get direct access to senior consultants, not junior staff.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Knowledge Transfer</h3>
              <p className="text-foreground/70">
                We believe in building capability within your organization. Every consultant
                invests in transferring knowledge and developing your team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">Outcome Accountability</h3>
              <p className="text-foreground/70">
                Our success is measured by your success. We align on clear outcomes and take
                responsibility for delivering measurable business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-foreground/60">Years Supply Chain Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">3</p>
              <p className="text-foreground/60">Core Specialists</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">40+</p>
              <p className="text-foreground/60">Supply Chain Projects</p>
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
