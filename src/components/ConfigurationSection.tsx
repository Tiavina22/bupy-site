import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const configurations = {
  postgresql: {
    title: "PostgreSQL",
    config: `# Database Configuration
DB_TYPE=postgresql
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password

# Backup Configuration
BACKUP_PATH=./backups
BACKUP_RETENTION_DAYS=7

# Email Configuration (optional)
EMAIL_ENABLED=true
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=backup-recipient@email.com`
  },
  mysql: {
    title: "MySQL",
    config: `# Database Configuration
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database
DB_USER=your_username
DB_PASSWORD=your_password

# Backup Configuration
BACKUP_PATH=./backups
BACKUP_RETENTION_DAYS=7

# Email Configuration (optional)
EMAIL_ENABLED=true
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=backup-recipient@email.com`
  },
  sqlite: {
    title: "SQLite",
    config: `# Database Configuration
DB_TYPE=sqlite
DB_PATH=./database.sqlite

# Backup Configuration
BACKUP_PATH=./backups
BACKUP_RETENTION_DAYS=7

# Email Configuration (optional)
EMAIL_ENABLED=true
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=backup-recipient@email.com`
  }
};

export function ConfigurationSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof configurations>("postgresql");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (type: string, config: string) => {
    await navigator.clipboard.writeText(config);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Configuration Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sample .env configurations for different database types
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1">
              {Object.entries(configurations).map(([key, config]) => (
                <Button
                  key={key}
                  variant={activeTab === key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(key as keyof typeof configurations)}
                  className="rounded-md"
                >
                  {config.title}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Configuration content */}
          <div className="relative">
            <div className="bg-terminal-bg rounded-xl p-6 font-mono text-sm border border-accent/20 shadow-elevated">
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
                  onClick={() => handleCopy(activeTab, configurations[activeTab].config)}
                  className="text-terminal-text hover:text-accent transition-colors"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  {copied === activeTab ? "Copied!" : "Copy"}
                </Button>
              </div>
              
              <pre className="text-terminal-text whitespace-pre-wrap text-xs leading-relaxed">
                {configurations[activeTab].config}
              </pre>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-xl opacity-5 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}