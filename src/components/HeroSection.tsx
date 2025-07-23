import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Github } from "lucide-react";
import { DynamicTerminal } from "./DynamicTerminal";
import React, { useEffect, useState } from "react";

export function HeroSection() {
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/repos/Tiavina22/bupy/contributors")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setContributors(data);
      });
  }, []);

  return (
    <section className="pt-24 pb-12 min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">bupy</span>{" "}
                — Automated backups for your databases
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Open source. Simple. Powerful.
              </p>
            </div>
            {/* Liste des contributeurs */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">Contributors:</h2>
              <div className="flex flex-wrap gap-4">
                {contributors.map((contributor) => (
                  <a
                    key={contributor.id}
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/40 hover:bg-muted/60 transition"
                  >
                    <img
                      src={contributor.avatar_url}
                      alt={contributor.login}
                      className="w-8 h-8 rounded-full border"
                    />
                    <span className="font-medium text-sm">{contributor.login}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" asChild className="group">
                <a 
                  href="/documentation"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://github.com/Tiavina22/bupy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
          {/* ...existing code... */}
          <div className="relative">
            <DynamicTerminal className="relative" />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-primary rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}