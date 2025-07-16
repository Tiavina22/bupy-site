import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-mono font-bold text-sm">bp</span>
          </div>
          <span className="font-bold text-xl text-foreground">bupy</span>
        </a>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <a 
              href="/documentation"
              className="font-medium"
            >
              Documentation
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://github.com/Tiavina22/bupy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}