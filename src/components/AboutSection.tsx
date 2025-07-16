import { Github, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About the Author
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Created by{" "}
              <a 
                href="https://github.com/Tiavina22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors font-medium underline underline-offset-4"
              >
                Tiavina22
              </a>
              , a passionate developer dedicated to making database backups easier and more reliable for everyone.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-current" />
            <span>for the open source community</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://github.com/Tiavina22" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Follow on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}