import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-mono font-bold text-sm">bp</span>
              </div>
              <span className="font-bold text-xl text-foreground">bupy</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Open source database backup automation tool for PostgreSQL, MySQL, and SQLite.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <div className="space-y-2">
              <a 
                href="/documentation"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Documentation
              </a>
              <a 
                href="https://github.com/Tiavina22/bupy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                GitHub Repository
              </a>
              <a 
                href="https://github.com/Tiavina22/bupy/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Issues & Support
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Community</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Tiavina22/bupy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>by</span>
              <a 
                href="https://github.com/Tiavina22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                Tiavina22
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2024 bupy. Open source software released under the MIT License.</p>
        </div>
      </div>
    </footer>
  );
}