import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo className="w-8 h-8" />
            <span className="font-bold text-lg text-primary hidden sm:inline">
              Transformity
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/case-studies"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline"
            >
              Case Studies
            </Link>
            <Link
              to="/consultants"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors hidden sm:inline"
            >
              Team
            </Link>
            <Button asChild variant="default" size="sm">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Transformity</h3>
              <p className="text-sm text-primary-foreground/80">
                Supply chain automation experts. We deliver real outcomes through at-scale automation.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <Link
                    to="/case-studies"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/consultants"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Get in Touch</h4>
              <p className="text-sm text-primary-foreground/80">
                Ready to transform your business?
              </p>
              <Button asChild variant="secondary" size="sm" className="mt-4">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60 text-center">
              © 2024 Transformity. All rights reserved. Supply chain automation experts
              delivering measurable business outcomes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
