import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplineBackground from '@/components/SplineBackground';
import { Instagram, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <SplineBackground />
      
      <div className="relative z-10 min-h-screen p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <Link to="/">
            <Button variant="outline" className="mb-6 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          <Card className="p-12 bg-card/40 backdrop-blur-xl border-border animate-fade-in text-center">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Contact Me
            </h1>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground mb-8">
                Professional Free Fire sensitivity optimizer helping players achieve perfect aim control.
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/0utcast.fizz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:shadow-gaming">
                    <div className="flex items-center justify-center gap-4">
                      <div className="p-3 rounded-full bg-pink-500/20 group-hover:bg-pink-500/30 transition-colors">
                        <Instagram className="w-8 h-8 text-pink-500" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Follow me on</p>
                        <p className="text-xl font-bold">@0utcast.fizz</p>
                      </div>
                    </div>
                  </Card>
                </a>

                <a 
                  href="https://discord.com/users/helium_in_sync" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="p-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-gaming">
                    <div className="flex items-center justify-center gap-4">
                      <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                        <MessageCircle className="w-8 h-8 text-blue-500" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Discord</p>
                        <p className="text-xl font-bold">helium_in_sync</p>
                      </div>
                    </div>
                  </Card>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Made with passion for the Free Fire community 🎮
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
