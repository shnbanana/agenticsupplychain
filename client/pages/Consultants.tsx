import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap } from "lucide-react";

export default function Consultants() {
  const consultants = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "International Logistics & Network Director",
      bio: "18+ years supply chain operations and network optimization. Former VP of Global Logistics at major carrier managing operations in 40+ countries. Expert in customs automation, cross-border compliance, and international supply chain design handling 500M+ units annually.",
      icon: Code,
    },
    {
      id: 2,
      name: "James Rodriguez",
      title: "Fulfillment Automation & Operations Lead",
      bio: "15+ years fulfillment automation and facility operations. Built robotic automation systems and WMS platforms handling 3M+ units/month. Expert in labor optimization, picking automation, and large-scale fulfillment center design.",
      icon: Brain,
    },
    {
      id: 3,
      name: "Emily Thompson",
      title: "Last-Mile Delivery & Routing Lead",
      bio: "16+ years last-mile delivery operations and route optimization. Led routing networks for 3,000+ vehicles, 150K+ daily deliveries. Expert in dynamic routing, failed delivery reduction, and driver performance optimization.",
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
              "url('https://images.pexels.com/photos/7640766/pexels-photo-7640766.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Supply Chain Experts
            </h1>
            <p className="text-lg text-white/90">
              The Transformity team combines 150+ years of supply chain expertise. Our team have built, scaled, and optimized operations with deep knowledge of international logistics, fulfillment, network management and last-mile delivery.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Together Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-b border-slate-200/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            How We Work Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Embedded Partnership
              </h3>
              <p className="text-foreground/70">
                We work as an extension of your team, embedded in daily operations and decisions. You get direct access to senior consultants, not junior staff.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Knowledge Transfer
              </h3>
              <p className="text-foreground/70">
                We believe in building capability within your organization. Every consultant invests in transferring knowledge and developing your team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Outcome Accountability
              </h3>
              <p className="text-foreground/70">
                Our success is measured by your success. We align on clear outcomes and take responsibility for delivering measurable business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">150+</p>
              <p className="text-foreground/60">
                Years Supply Chain Experience
              </p>
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

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Team of Technologists and Operators
            </h2>
            <p className="text-lg text-foreground/70">
              We are a team of technologists and operators who have worked hands-on in companies across the board—from some of the largest and most innovative eCommerce and logistics providers in the supply chain. Our experience spans building systems at scale, leading operations through transformation, and implementing solutions that solve real business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultants.map((consultant) => (
              <Card key={consultant.id} className="border-border/50 overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{consultant.name}</CardTitle>
                      <CardDescription className="text-accent font-semibold text-base">
                        {consultant.title}
                      </CardDescription>
                    </div>
                    <consultant.icon className="w-8 h-8 text-accent flex-shrink-0" />
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {consultant.bio}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
