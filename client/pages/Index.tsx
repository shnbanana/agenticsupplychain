import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Zap, Target, Users, Briefcase } from "lucide-react";
import { SupplyChainNetworkIllustration, InternationalLogisticsIllustration, FulfillmentIllustration, LastMileDeliveryIllustration } from "@/components/SupplyChainIllustrations";
import { AutomationOverlay } from "@/components/AutomationOverlay";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section with Background Image and Automation Overlay */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48 h-auto md:min-h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg')",
          }}
        />

        {/* Automation Overlay */}
        <AutomationOverlay />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Supply Chain Automation at Scale
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              We're supply chain experts obsessed with automation that delivers real business outcomes.
              We don't just implement tools—we transform how you operate end-to-end, at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Tell Us Your Challenge
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Link to="/case-studies">See Our Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200/50">
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Supply Chain Experts, Automation Specialists
              </h2>
              <p className="text-lg text-foreground/60 mb-4">
                Deep supply chain expertise combined with at-scale automation implementation.
                We deliver transformative results that compound over time.
              </p>
              <p className="text-lg text-foreground/60">
                We're technology-agnostic—choosing the most logical and sensible solutions for your specific challenges.
                That might be agentic AI, RPA, custom workflows, or a combination tailored to your outcomes.
              </p>
            </div>
            <div className="hidden lg:block">
              <SupplyChainNetworkIllustration className="w-full h-80" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Supply Chain Expertise",
                description:
                  "We understand international logistics, fulfillment operations, last-mile delivery, and complex supply networks. No learning curve.",
              },
              {
                icon: Zap,
                title: "Automation at Scale",
                description:
                  "We leverage the most logical and sensible tech solutions to solve your problems—whether agentic AI, RPA, workflow automation, or a combination. The technology serves your outcomes, not the other way around.",
              },
              {
                icon: Users,
                title: "Outcomes-Driven",
                description:
                  "Every automation delivers measurable impact: cost reduction, speed improvement, or risk mitigation. We obsess over your results.",
              },
            ].map((item, idx) => (
              <div key={idx} className="group">
                <div className="flex flex-col items-start gap-4 p-6 rounded-lg border border-border/50 hover:border-accent hover:bg-accent/5 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-foreground/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 md:py-32 bg-primary/2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Supply Chain Transformations in Action
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              See how we've automated supply chain operations at scale, delivering millions in value
              across international logistics, fulfillment, and last-mile operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "International Logistics Network Automation",
                company: "Global Retailer (500K SKUs, 40+ Countries)",
                challenge: "Fragmented systems across 50+ suppliers, customs complexity, $8.2M annual waste",
                result: "Real-time network visibility, 31% cost reduction, 38% faster cross-border fulfillment",
                illustration: InternationalLogisticsIllustration,
              },
              {
                title: "Fulfillment Center Operations Optimization",
                company: "Omnichannel E-Commerce Leader (10 Facilities)",
                challenge: "Manual workflows consuming 35% labor budget, 94% picking accuracy, 18-hour fulfillment",
                result: "67% labor automation, 99.4% accuracy, 6-hour fulfillment, $4.1M annual savings",
                illustration: FulfillmentIllustration,
              },
              {
                title: "Middle & Last-Mile Delivery Network",
                company: "Regional Logistics Operator (250+ Vehicles)",
                challenge: "Fragmented routing, 26% failed deliveries, $12K daily operational waste",
                result: "99.2% delivery success, 32% route efficiency, $3.6M annual savings",
                illustration: LastMileDeliveryIllustration,
              },
              {
                title: "Supply Chain Planning & Demand Intelligence",
                company: "CPG Manufacturer (2,000+ SKUs)",
                challenge: "Demand forecasting only 65% accurate, 28% excess safety stock, $2.1M waste",
                result: "89% forecast accuracy, 30% inventory reduction, $2.8M annual freed working capital",
                illustration: SupplyChainNetworkIllustration,
              },
            ].map((caseStudy, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-shadow duration-300 border-border/50 overflow-hidden flex flex-col"
              >
                <div className="h-40 bg-gradient-to-b from-primary/5 to-primary/10 overflow-hidden">
                  <caseStudy.illustration className="w-full h-full" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                  <CardDescription className="mt-1">{caseStudy.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <p className="text-sm font-semibold text-foreground/70 mb-1">Challenge</p>
                    <p className="text-sm text-foreground/60">{caseStudy.challenge}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-accent mb-1">Results</p>
                    <p className="text-sm text-foreground">{caseStudy.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Consultant Expertise */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              World-Class Expertise
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Our consultants bring decades of combined experience from leading tech companies,
              startups, and transformation initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                title: "Supply Chain Network Director",
                experience:
                  "18+ years supply chain operations. Former VP at major logistics provider managing 1000+ facilities globally. Expert in international logistics, customs, and network optimization.",
                specialties: ["International Logistics", "Network Design", "Cross-Border Ops"],
              },
              {
                name: "James Rodriguez",
                title: "Automation & Fulfillment Lead",
                experience:
                  "12 years fulfillment automation. Built robotic systems and automation platforms handling 500M+ units/year. Expert in large-scale fulfillment automation.",
                specialties: ["Fulfillment Automation", "Robotics Integration", "WMS Systems"],
              },
              {
                name: "Emily Thompson",
                title: "Last-Mile & Operations Lead",
                experience:
                  "15+ years in last-mile and carrier operations. Led routing and delivery optimization for 3,000+ vehicles across North America.",
                specialties: ["Last-Mile Delivery", "Route Optimization", "Driver Management"],
              },
            ].map((consultant, idx) => (
              <Card key={idx} className="border-border/50">
                <CardHeader>
                  <CardTitle>{consultant.name}</CardTitle>
                  <CardDescription className="text-accent font-semibold">
                    {consultant.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-foreground/70">{consultant.experience}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-foreground/60 uppercase">Specializations</p>
                    <div className="flex flex-wrap gap-2">
                      {consultant.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/consultants">Meet Our Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Automate Your Supply Chain at Scale
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Share your biggest supply chain challenge. We'll assess the opportunity and propose
            a roadmap to automate and optimize end-to-end.
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/contact">
              Let's Talk Supply Chain
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
