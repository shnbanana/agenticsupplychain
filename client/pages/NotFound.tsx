import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-white">
        <div className="text-center max-w-2xl px-4">
          <p className="text-accent font-semibold mb-4 text-lg">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-foreground/60 mb-8">
            We couldn't find the page you're looking for. Let's get you back on track.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              Return to Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
