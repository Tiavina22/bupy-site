import { Database, Clock, Folder, Mail, Terminal, TestTube } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Multiple Database Support",
    description: "Backup for PostgreSQL, MySQL & SQLite with native support and optimized commands."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Flexible scheduling with CRON jobs for automated backups at your preferred intervals."
  },
  {
    icon: Folder,
    title: "Automatic Retention",
    description: "Automatic retention management to keep your storage clean and organized."
  },
  {
    icon: Mail,
    title: "Email Notifications",
    description: "Email notifications with backup attachment sent directly to your inbox."
  },
  {
    icon: Terminal,
    title: "Simple CLI Interface",
    description: "Simple CLI interface that's easy to use and integrate into your workflow."
  },
  {
    icon: TestTube,
    title: "Built-in Testing",
    description: "Built-in test scripts to ensure your backup configuration is working perfectly."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose bupy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate your database backups with confidence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gradient-card rounded-xl border border-border hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}