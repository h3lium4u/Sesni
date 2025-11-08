import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Smartphone, Monitor, User, Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-end p-6 pb-12 md:pb-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            HELIUM TWEAKZ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            DM for paid tweaks/optimization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full mb-2 md:mb-4">
          <Link to="/mobile" className="group">
            <Card className="p-8 bg-card/40 backdrop-blur-xl border-border hover:border-primary transition-all duration-300 hover:shadow-gaming animate-slide-up h-full">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Mobile</h2>
                <p className="text-muted-foreground">
                  Generate optimized sensitivity for your mobile device
                </p>
                <Button className="w-full bg-gradient-gaming hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </div>
            </Card>
          </Link>

          <Link to="/pc" className="group">
            <Card className="p-8 bg-card/40 backdrop-blur-xl border-border hover:border-secondary transition-all duration-300 hover:shadow-gaming animate-slide-up h-full" style={{ animationDelay: '0.1s' }}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Monitor className="w-12 h-12 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold">PC / Emulator</h2>
                <p className="text-muted-foreground">
                  Optimize your CFG settings for perfect aim
                </p>
                <Button variant="secondary" className="w-full hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </div>
            </Card>
          </Link>
        </div>

        <div className="flex gap-4 mt-2 flex-wrap justify-center">
          <Link to="/optimizers">
            <Button variant="outline" className="gap-2 backdrop-blur-sm">
              <Download className="w-4 h-4" />
              Optimizers
            </Button>
          </Link>
          <Link to="/paid-settings">
            <Button variant="outline" className="gap-2 backdrop-blur-sm">
              Paid Settings
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="gap-2 backdrop-blur-sm">
              <User className="w-4 h-4" />
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
