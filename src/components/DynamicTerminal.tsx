import { useEffect, useState } from "react";

interface TerminalProps {
  className?: string;
}

const commands = [
  { text: "$ git clone https://github.com/Tiavina22/bupy.git", delay: 500 },
  { text: "Cloning into 'bupy'...", delay: 800 },
  { text: "remote: Enumerating objects: 156, done.", delay: 1200 },
  { text: "remote: Total 156 (delta 0), reused 0 (delta 0)", delay: 1400 },
  { text: "Receiving objects: 100% (156/156), 48.2 KiB | 2.1 MiB/s, done.", delay: 1600 },
  { text: "$ cd bupy && npm install", delay: 2000 },
  { text: "Installing dependencies...", delay: 2300 },
  { text: "✓ Dependencies installed successfully", delay: 2800 },
  { text: "$ node src/index.js", delay: 3300 },
  { text: "🔄 Starting backup process...", delay: 3600 },
  { text: "✓ PostgreSQL backup completed", delay: 4100 },
  { text: "✓ Backup saved to backups/db_2024-01-15.sql", delay: 4600 },
  { text: "✓ Email notification sent", delay: 5100 },
  { text: "🎉 Backup process completed successfully!", delay: 5600 }
];

export function DynamicTerminal({ className = "" }: TerminalProps) {
  const [visibleCommands, setVisibleCommands] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleCommands < commands.length) {
        setIsTyping(true);
        const command = commands[visibleCommands];
        let charIndex = 0;
        
        const typeText = () => {
          if (charIndex < command.text.length) {
            setCurrentText(command.text.slice(0, charIndex + 1));
            charIndex++;
            setTimeout(typeText, 30 + Math.random() * 40); // Variable typing speed
          } else {
            setIsTyping(false);
            setTimeout(() => {
              setVisibleCommands(prev => prev + 1);
              setCurrentText("");
            }, 200);
          }
        };
        
        setTimeout(typeText, command.delay);
      } else {
        // Restart animation after completion
        setTimeout(() => {
          setVisibleCommands(0);
          setCurrentText("");
        }, 3000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [visibleCommands]);

  return (
    <div className={`bg-terminal-bg rounded-xl border border-accent/20 shadow-elevated hover:shadow-glow transition-all duration-500 ${className}`}>
      <div className="flex items-center justify-between p-4 border-b border-accent/10">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-destructive rounded-full"></div>
          <div className="w-3 h-3 bg-accent rounded-full"></div>
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
        <div className="text-terminal-text text-sm font-mono">bupy@terminal</div>
      </div>
      
      <div className="p-6 h-80 overflow-hidden">
        <div className="font-mono text-sm space-y-1">
          {commands.slice(0, visibleCommands).map((command, index) => (
            <div key={index} className="flex items-start">
              <span className={`
                ${command.text.startsWith('$') ? 'text-terminal-prompt' : 
                  command.text.includes('✓') ? 'text-accent' :
                  command.text.includes('🔄') || command.text.includes('🎉') ? 'text-primary' :
                  'text-terminal-text'}
              `}>
                {command.text}
              </span>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex items-center">
              <span className={`
                ${currentText.startsWith('$') ? 'text-terminal-prompt' : 
                  currentText.includes('✓') ? 'text-accent' :
                  currentText.includes('🔄') || currentText.includes('🎉') ? 'text-primary' :
                  'text-terminal-text'}
              `}>
                {currentText}
              </span>
              <span className="text-terminal-text animate-pulse ml-1">█</span>
            </div>
          )}
          
          {!isTyping && visibleCommands < commands.length && (
            <div className="flex items-center">
              <span className="text-terminal-prompt">$ </span>
              <span className="text-terminal-text animate-pulse ml-1">█</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-accent rounded-xl opacity-5 blur-xl pointer-events-none"></div>
    </div>
  );
}