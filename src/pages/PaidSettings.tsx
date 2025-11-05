import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Cpu, Settings, Gamepad2, Headphones, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplineBackground from '@/components/SplineBackground';

const PaidSettings = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SplineBackground />
      
      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-6 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          <Card className="p-8 bg-card/40 backdrop-blur-xl border-border animate-fade-in">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
              Paid Settings & Services
            </h1>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">System Optimization</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Full PC performance tuning for smooth and fast operation</li>
                      <li>• 1% CPU usage at idle (ultra-efficient performance)</li>
                      <li>• CPU and GPU overclocking / undervolting for maximum speed and stability</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Settings className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Windows Services</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Windows 10 / 11 activation (genuine and permanent)</li>
                      <li>• Registry tweaks and advanced system configuration</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Gamepad2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Emulator Setup</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Optimization for high FPS and low lag</li>
                      <li>• Support for paid emulators and configuration assistance</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10 border-secondary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-secondary/20">
                    <Headphones className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Audio Enhancement</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• SteelSeries sound settings setup for clear and balanced game audio</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Bonus</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Custom PC optimization profiles for gaming or productivity</li>
                      <li>• DM for paid sensitivity settings (sensi)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  Interested in any of these services?
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-gaming hover:opacity-90 transition-opacity">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaidSettings;
