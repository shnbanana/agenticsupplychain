import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap } from "lucide-react";

export default function Consultants() {
  const consultants = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "AI Strategy & Transformation Lead",
      bio: "15+ years building and scaling AI initiatives. Previously Director of AI/ML at Google Cloud, leading enterprise transformation for Fortune 500 companies across financial services, healthcare, and manufacturing.",
      experience: [
        "Led AI strategy for 50+ enterprise clients",
        "Built and managed teams of 15+ ML engineers",
        "Published research on enterprise AI adoption",
        "Director, Google Cloud AI Enterprise Solutions",
      ],
      expertise: [
        "AI Strategy",
        "Enterprise Transformation",
        "Change Management",
        "Large-scale implementation",
        "Technology roadmapping",
        "Executive consulting",
      ],
      companies: ["Google Cloud", "McKinsey Digital", "Accenture AI"],
      icon: Brain,
    },
    {
      id: 2,
      name: "James Rodriguez",
      title: "Product & Engineering Lead",
      bio: "Scaled 3 startups to $100M+ in valuation with focus on AI-driven products. 12 years of experience building world-class engineering teams and AI products at Meta and Amazon. Expert in translating strategy into sustainable product architecture.",
      experience: [
        "Built AI product teams from scratch at Meta AI",
        "Led technical transformation at Amazon Alexa",
        "3x successful startup scaling (CTO/VP Engineering roles)",
        "Patents in ML systems and scalable architecture",
      ],
      expertise: [
        "Product Strategy",
        "Full-Stack AI Systems",
        "Technical Architecture",
        "Engineering leadership",
        "Scalable systems design",
        "ML ops & infrastructure",
      ],
      companies: ["Meta AI", "Amazon", "Andreessen Horowitz"],
      icon: Code,
    },
    {
      id: 3,
      name: "Emily Thompson",
      title: "Operations & Implementation Lead",
      bio: "10+ years optimizing operations across diverse industries. Led digital and AI transformation initiatives in healthcare, financial services, and manufacturing. Expert in execution and ensuring transformation initiatives deliver measurable business outcomes.",
      experience: [
        "Led transformation for 20+ mid-market and enterprise clients",
        "Reduced operational costs by 25-40% on average for clients",
        "Expert in change management and organizational design",
        "Healthcare operations consultant for 5+ major hospital networks",
      ],
      expertise: [
        "Process Optimization",
        "Change Enablement",
        "Implementation Management",
        "Operations strategy",
        "Performance measurement",
        "Organizational change",
      ],
      companies: ["Deloitte Consulting", "KPMG Digital", "BCG"],
      icon: Zap,
    },
    {
      id: 4,
      name: "Michael Park",
      title: "Data Science & Analytics Lead",
      bio: "PhD in Machine Learning with 8+ years building advanced analytics and ML solutions. Previously built data science organizations at fintech startups and established the analytics practice at a top-tier consulting firm.",
      experience: [
        "Built data science teams from 0 to 30+ professionals",
        "Published 12+ peer-reviewed ML research papers",
        "Architected analytics platforms handling billions of data points",
        "Guest lecturer at Stanford and MIT on practical ML",
      ],
      expertise: [
        "Machine Learning",
        "Advanced Analytics",
        "Data Architecture",
        "Predictive modeling",
        "Statistical analysis",
        "Data engineering",
      ],
      companies: ["Stanford AI Lab", "Stripe Data Science", "Two Sigma"],
      icon: Brain,
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "Customer Success & Partnership Lead",
      bio: "12+ years ensuring transformation projects deliver exceptional client outcomes. Builds and manages relationships with C-suite executives to ensure alignment, governance, and continuous value realization.",
      experience: [
        "Maintained 98%+ client satisfaction across 40+ concurrent engagements",
        "Managed relationships with C-suite (CEO, CTO, CFO level)",
        "Established governance frameworks for enterprise transformations",
        "Led customer advisory boards for 3 major platforms",
      ],
      expertise: [
        "Client Executive Relationships",
        "Project Governance",
        "Value Realization",
        "Risk management",
        "Communication strategy",
        "Stakeholder alignment",
      ],
      companies: ["Accenture", "Cognizant Technology Solutions", "IBM"],
      icon: Zap,
    },
    {
      id: 6,
      name: "David Liu",
      title: "Industry Deep Dives & Innovation Lead",
      bio: "Specializes in understanding industry-specific challenges and identifying AI opportunities. 14+ years in financial services and healthcare, bringing industry expertise and networks to transformation projects.",
      experience: [
        "Financial services: Managed $500B+ in technology transformation",
        "Healthcare: Architected clinical AI solutions for major health systems",
        "Industry networks: Deep relationships with 100+ healthcare and finance leaders",
        "Published author on AI in healthcare and finance",
      ],
      expertise: [
        "Healthcare AI",
        "Financial Services",
        "Industry Regulations",
        "Competitive analysis",
        "Market positioning",
        "Risk & compliance",
      ],
      companies: ["Goldman Sachs", "Partners Healthcare", "Oliver Wyman"],
      icon: Code,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-white to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Supply Chain Experts
            </h1>
            <p className="text-lg text-foreground/60">
              The Transformity team combines 150+ years of supply chain expertise. Our consultants
              have built, scaled, and optimized operations handling 500M+ units annually.
              Deep knowledge of international logistics, fulfillment, and last-mile delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 md:py-32 bg-white">
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
      <section className="py-20 md:py-32 bg-primary/5">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">180+</p>
              <p className="text-foreground/60">Years Combined Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">6</p>
              <p className="text-foreground/60">Core Team Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-foreground/60">Successful Projects</p>
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
