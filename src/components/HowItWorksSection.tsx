import { Settings, Play, Mail } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Configure your .env file",
    description: "Set up your database connection details and backup preferences in a simple .env file."
  },
  {
    icon: Play,
    title: "Run backups manually or schedule with CRON",
    description: "Execute backups on-demand or automate them with CRON jobs for scheduled operations."
  },
  {
    icon: Mail,
    title: "Receive automated backups",
    description: "Get your backup files delivered via email or stored locally with retention management."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with bupy in just 3 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6 relative">
              {/* Step number */}
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform translate-x-4 -translate-y-0.5"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}