import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Copy, Database, Clock, Mail, Shield } from "lucide-react";
import { useState } from "react";

const codeExamples = {
  postgresql: `DB_TYPE=postgres
PGHOST=localhost
PGPORT=5432
PGUSER=postgres
PGPASSWORD=motdepasse
PGDATABASE=ma_base
BACKUP_DIR=./backups`,
  mysql: `DB_TYPE=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=motdepasse
MYSQL_DATABASE=ma_base
BACKUP_DIR=./backups`,
  sqlite: `DB_TYPE=sqlite
SQLITE_PATH=./ma_base.db
BACKUP_DIR=./backups`
};

export default function Documentation() {
  const [activeExample, setActiveExample] = useState<keyof typeof codeExamples>("postgresql");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (type: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const installCommand = `git clone https://github.com/Tiavina22/bupy.git
cd bupy
npm install`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero */}
          <div className="text-center space-y-6 mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-mono font-bold">bp</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                bupy Documentation
              </h1>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center space-x-1">
                <span>3</span>
                <span>GitHub stars</span>
              </span>
              <span className="flex items-center space-x-1">
                <span>2</span>
                <span>Fork</span>
              </span>
              <span className="flex items-center space-x-1">
                <span></span>
                <span>Open Source</span>
              </span>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <strong>bupy</strong> is an open source Node.js tool to automate backups of PostgreSQL, MySQL, and SQLite databases.
            </p>
            
            <p className="text-lg text-accent font-medium">
              Automatic backups, multi-database, smart retention, email notifications, simple configuration.
            </p>
          </div>

          {/* Fonctionnalités principales */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <span className="text-2xl mr-3">🚀</span>
              Main features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-card rounded-xl border border-border">
                <div className="flex items-start space-x-3">
                  <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Multi-database support</h3>
                    <p className="text-muted-foreground text-sm">
                      Automatic backup of PostgreSQL (via pg_dump), MySQL (via mysqldump), or SQLite (file copy)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-card rounded-xl border border-border">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Flexible scheduling</h3>
                    <p className="text-muted-foreground text-sm">
                      Flexible scheduling (cron) and automatic retention of old backups
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-card rounded-xl border border-border">
                <div className="flex items-start space-x-3">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email notifications</h3>
                    <p className="text-muted-foreground text-sm">
                      Email notifications with backup attachment for real-time monitoring
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-card rounded-xl border border-border">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Simple interface</h3>
                    <p className="text-muted-foreground text-sm">
                      Simple CLI interface, configurable local storage, and integrated test scripts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <span className="text-2xl mr-3">📦</span>
              Quick installation
            </h2>
            
            <div className="relative">
              <div className="bg-terminal-bg rounded-xl p-6 font-mono text-sm border border-accent/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-terminal-text font-medium">Terminal</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy("install", installCommand)}
                    className="text-terminal-text hover:text-accent"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied === "install" ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <pre className="text-terminal-text whitespace-pre-wrap">
                  <span className="text-terminal-prompt">$ </span>git clone https://github.com/Tiavina22/bupy.git{"\n"}
                  <span className="text-terminal-prompt">$ </span>cd bupy{"\n"}
                  <span className="text-terminal-prompt">$ </span>npm install
                </pre>
              </div>
            </div>
          </section>

          {/* Prise en main */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <span className="text-2xl mr-3">⚡️</span>
              Quick start
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-muted/30 rounded-xl border border-border">
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</span>
                    <span>Copy <code className="bg-terminal-bg text-terminal-text px-2 py-1 rounded text-sm">.env.example</code> to <code className="bg-terminal-bg text-terminal-text px-2 py-1 rounded text-sm">.env</code> and adjust the configuration.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</span>
                    <div>
                      <span>Select the database type to backup with <code className="bg-terminal-bg text-terminal-text px-2 py-1 rounded text-sm">DB_TYPE</code>:</span>
                      <ul className="mt-2 ml-4 space-y-1 text-sm">
                        <li>• <code className="bg-terminal-bg text-accent px-2 py-1 rounded">postgres</code> (default)</li>
                        <li>• <code className="bg-terminal-bg text-accent px-2 py-1 rounded">mysql</code></li>
                        <li>• <code className="bg-terminal-bg text-accent px-2 py-1 rounded">sqlite</code></li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</span>
                    <span>Run an immediate backup: <code className="bg-terminal-bg text-accent px-2 py-1 rounded text-sm">node src/index.js</code></span>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Configuration */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <span className="text-2xl mr-3">🛠️</span>
              Configuration examples
            </h2>
            
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-muted rounded-lg p-1">
                {Object.entries(codeExamples).map(([key, _]) => (
                  <Button
                    key={key}
                    variant={activeExample === key ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveExample(key as keyof typeof codeExamples)}
                    className="rounded-md capitalize"
                  >
                    {key}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Code example */}
            <div className="relative">
              <div className="bg-terminal-bg rounded-xl p-6 font-mono text-sm border border-accent/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-terminal-text font-medium ml-4">.env</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleCopy(activeExample, codeExamples[activeExample])}
                    className="text-terminal-text hover:text-accent"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    {copied === activeExample ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <pre className="text-terminal-text whitespace-pre-wrap text-xs leading-relaxed">
                  {codeExamples[activeExample]}
                </pre>
              </div>
            </div>
          </section>

          {/* Table des matières */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
              <span className="text-2xl mr-3">📚</span>
              Table of contents
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Advanced configuration", desc: "Detailed configuration options" },
                { title: "CLI usage", desc: "Command line usage guide" },
                { title: "Notifications", desc: "Email and alert configuration" },
                { title: "FAQ", desc: "Frequently asked questions" }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-gradient-card rounded-lg border border-border hover:shadow-card transition-all duration-300">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="p-8 bg-gradient-hero rounded-2xl">
              <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to automate your backups?
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Get started now with bupy
              </p>
              <Button size="lg" variant="hero" asChild>
                <a 
                  href="https://github.com/Tiavina22/bupy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download on GitHub
                </a>
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}