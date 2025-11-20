import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/Layout";
import { ArrowRight, CheckCircle, Zap, Target, Users, Briefcase } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Business With AI
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              We're not just automation consultants. We're your transformation partner, focused on
              delivering real outcomes and sustainable competitive advantage through AI-driven
              innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  Tell Us Your Challenge
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">See Our Results</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Transformation Approach
            </h2>
            <p className="text-lg text-foreground/60">
              We combine strategic thinking, technical expertise, and deep industry knowledge to
              deliver measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Outcomes-Driven",
                description:
                  "Every decision is tied to specific, measurable business outcomes. We focus on ROI, not just implementation.",
              },
              {
                icon: Zap,
                title: "Product-First",
                description:
                  "We think like product builders, not service providers. Your AI solution is designed to scale and evolve.",
              },
              {
                icon: Users,
                title: "Transformation Partner",
                description:
                  "We work embedded with your team, sharing knowledge and building capability alongside you.",
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
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              See how we've helped organizations achieve significant business transformations through AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Supply Chain Visibility & Optimization",
                company: "Global Logistics Corp",
                challenge: "Fragmented supply chain data across 50+ suppliers causing $5M in annual inefficiencies",
                result: "Real-time supply chain visibility, 28% cost reduction, 40% faster order fulfillment",
                icon: Zap,
              },
              {
                title: "Financial Services Process Automation",
                company: "RegionalBank Financial",
                challenge: "Manual processing consuming 40% of operational budget with high error rates",
                result: "65% process automation, $2.3M annual savings, 10x faster transaction processing",
                icon: Briefcase,
              },
              {
                title: "eCommerce Demand & Inventory Intelligence",
                company: "DTC Fashion Brand",
                challenge: "Data silos preventing real-time inventory and demand insights across channels",
                result: "Real-time inventory optimization, 35% reduction in stockouts, 22% revenue increase",
                icon: Target,
              },
              {
                title: "Supply Chain Demand Forecasting",
                company: "Consumer Goods Manufacturer",
                challenge: "Inaccurate demand forecasting causing 30% safety stock waste and stockouts",
                result: "87% forecast accuracy, 32% reduction in excess inventory, $1.8M annual savings",
                icon: CheckCircle,
              },
            ].map((caseStudy, idx) => (
              <Card
                key={idx}
                className="hover:shadow-lg transition-shadow duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{caseStudy.title}</CardTitle>
                      <CardDescription className="mt-1">{caseStudy.company}</CardDescription>
                    </div>
                    <caseStudy.icon className="w-6 h-6 text-accent flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
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
                title: "AI Strategy & Transformation Lead",
                experience:
                  "15+ years in AI/ML, formerly Director at Google Cloud. Led transformation for Fortune 500 companies.",
                specialties: ["AI Strategy", "Enterprise Transformation", "Change Management"],
              },
              {
                name: "James Rodriguez",
                title: "Product & Engineering Lead",
                experience:
                  "Scaled 3 startups to $100M+. 12 years building products at Meta and Amazon. Expert in AI product development.",
                specialties: ["Product Strategy", "Full-Stack AI", "Technical Architecture"],
              },
              {
                name: "Emily Thompson",
                title: "Operations & Implementation Lead",
                experience:
                  "10+ years optimizing operations. Led digital transformation across healthcare, finance, and manufacturing.",
                specialties: ["Process Optimization", "Change Enablement", "Implementation Management"],
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Share your most pressing challenge. We'll listen, assess, and propose a clear path
            forward to achieve your transformation goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <Link to="/contact">
              Tell Us Your Problem
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
