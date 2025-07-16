import { Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function InstallationSection() {
  const [copied, setCopied] = useState(false);
  
  const installCommands = `git clone https://github.com/Tiavina22/bupy.git
cd bupy
npm install`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quick Installation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get bupy up and running in seconds
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="bg-terminal-bg rounded-xl p-6 font-mono text-sm border border-accent/20 shadow-elevated">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-terminal-text" />
                  <span className="text-terminal-text font-medium">Terminal</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCopy}
                  className="text-terminal-text hover:text-accent transition-colors"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-terminal-prompt">$</span>
                  <span className="text-terminal-text">git clone https://github.com/Tiavina22/bupy.git</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-terminal-prompt">$</span>
                  <span className="text-terminal-text">cd bupy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-terminal-prompt">$</span>
                  <span className="text-terminal-text">npm install</span>
                </div>
                <div className="mt-4 text-accent">
                  ✓ Installation complete! Ready to configure your backups.
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-accent rounded-xl opacity-5 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}