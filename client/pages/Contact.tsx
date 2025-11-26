import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  industry: z.string().min(1, "Please select an industry"),
  challenge: z.string().min(20, "Please describe your challenge in detail (at least 20 characters)"),
  budget: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("Form submitted:", data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const industries = [
    "Retail & E-Commerce",
    "Manufacturing",
    "3PL / Logistics Provider",
    "Consumer Goods (CPG)",
    "Food & Beverage",
    "Pharmaceutical",
    "Technology Hardware",
    "Automotive",
    "Other",
  ];

  const budgetRanges = ["$50K - $150K", "$150K - $300K", "$300K - $750K", "$750K+"];
  const timelines = ["Immediate (0-3 months)", "Short-term (3-6 months)", "Medium-term (6-12 months)", "Long-term (12+ months)"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-40 h-auto md:min-h-[500px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Let's Automate Your Supply Chain
            </h1>
            <p className="text-lg text-white/90 drop-shadow-md">
              Share your biggest supply chain challenge. We'll assess the opportunity, identify
              quick wins, and propose an automation roadmap to deliver real outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Email</p>
                        <a
                          href="mailto:hello@transformai.com"
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          hello@transformai.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Phone</p>
                        <a
                          href="tel:+14155551234"
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          +1 (415) 555-1234
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground mb-1">Location</p>
                        <p className="text-foreground/70">
                          San Francisco, CA
                          <br />
                          New York, NY
                          <br />
                          Remote
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-accent/5">
                  <CardHeader>
                    <CardTitle className="text-base">Next Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm">
                      We typically respond within 24 hours with initial assessment. We'll then
                      schedule a focused working session to develop your automation roadmap.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <Card className="border-accent/20 bg-accent/5">
                  <CardContent className="pt-12 pb-12 text-center">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Got It!</h3>
                    <p className="text-foreground/70 mb-2">
                      We've received your supply chain challenge and will review it right away.
                    </p>
                    <p className="text-foreground/60">
                      Our supply chain experts will reach out within 24 hours to understand your
                      situation and propose an automation roadmap tailored to your operation.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle>Share Your Supply Chain Challenge</CardTitle>
                    <CardDescription>
                      Tell us about your biggest supply chain pain point. We'll provide expert guidance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Your Name *
                          </label>
                          <Input
                            placeholder="John Smith"
                            {...register("name")}
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            placeholder="john@company.com"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Company & Industry Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Company Name *
                          </label>
                          <Input
                            placeholder="Your Company Inc."
                            {...register("company")}
                            className={errors.company ? "border-red-500" : ""}
                          />
                          {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Industry *
                          </label>
                          <select
                            {...register("industry")}
                            className={`w-full h-10 px-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                              errors.industry ? "border-red-500" : "border-input"
                            }`}
                            defaultValue=""
                          >
                            <option value="">Select your industry</option>
                            {industries.map((industry) => (
                              <option key={industry} value={industry}>
                                {industry}
                              </option>
                            ))}
                          </select>
                          {errors.industry && (
                            <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Challenge */}
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                          Describe Your Supply Chain Challenge *
                        </label>
                        <Textarea
                          placeholder="What's your biggest supply chain challenge? (e.g., manual processes consuming labor, inventory inefficiency, international logistics complexity, last-mile delivery costs, poor visibility, demand forecasting accuracy, etc.)"
                          className={`min-h-40 ${errors.challenge ? "border-red-500" : ""}`}
                          {...register("challenge")}
                        />
                        {errors.challenge && (
                          <p className="text-red-500 text-sm mt-1">{errors.challenge.message}</p>
                        )}
                      </div>

                      {/* Budget & Timeline Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Budget Range *
                          </label>
                          <select
                            {...register("budget")}
                            className={`w-full h-10 px-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                              errors.budget ? "border-red-500" : "border-input"
                            }`}
                            defaultValue=""
                          >
                            <option value="">Select a range</option>
                            {budgetRanges.map((range) => (
                              <option key={range} value={range}>
                                {range}
                              </option>
                            ))}
                          </select>
                          {errors.budget && (
                            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">
                            Timeline *
                          </label>
                          <select
                            {...register("timeline")}
                            className={`w-full h-10 px-3 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent ${
                              errors.timeline ? "border-red-500" : "border-input"
                            }`}
                            defaultValue=""
                          >
                            <option value="">Select a timeline</option>
                            {timelines.map((timeline) => (
                              <option key={timeline} value={timeline}>
                                {timeline}
                              </option>
                            ))}
                          </select>
                          {errors.timeline && (
                            <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? "Submitting..." : "Start Automation Discussion"}
                      </Button>

                      <p className="text-xs text-foreground/50 text-center">
                        We respect your privacy. Your information will only be used to contact you
                        about your challenge and potential next steps.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-primary/5 border-t border-slate-200/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-foreground mb-2">What areas of supply chain do you focus on?</h3>
              <p className="text-foreground/70 text-sm">
                We specialize in international logistics, fulfillment center operations, and
                middle/last-mile delivery. We also handle supply chain planning and demand forecasting.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">How long does a typical engagement take?</h3>
              <p className="text-foreground/70 text-sm">
                Discovery and assessment: 2-4 weeks. Implementation: 3-12 months depending on
                complexity and scope. We focus on quick wins while building towards larger transformation.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Can you work with my existing systems?</h3>
              <p className="text-foreground/70 text-sm">
                Yes. We integrate with WMS, TMS, ERP, and other systems. We're agnostic to your
                current technology stack and work with what you have.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">What's the typical budget for automation?</h3>
              <p className="text-foreground/70 text-sm">
                Engagements typically range from $75K to $500K+ depending on scope. Most
                automation delivers ROI within 12-18 months. We discuss budget upfront.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">Do you work with different company sizes?</h3>
              <p className="text-foreground/70 text-sm">
                We work with mid-market and enterprise supply chains. Typical client: $100M-$5B revenue
                with complex supply networks. We're not a good fit for basic operations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-foreground mb-2">How do you measure success?</h3>
              <p className="text-foreground/70 text-sm">
                We define clear KPIs upfront: cost reduction, speed improvement, accuracy/quality,
                labor optimization, or cash flow improvement. We track religiously and report monthly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
