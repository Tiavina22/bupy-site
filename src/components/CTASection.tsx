import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to automate your backups?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of developers who trust bupy for their database backup automation
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" asChild className="group">
              <a 
                href="/documentation"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Get started with bupy
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
    </section>
  );
}