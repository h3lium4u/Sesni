import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplineBackground from '@/components/SplineBackground';
import { phoneDatabase, Phone } from '@/data/phones';
import { toast } from 'sonner';

const MobileSensi = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
  const [sensitivity, setSensitivity] = useState<{
    general: number;
    redDot: number;
    scope2x: number;
    scope4x: number;
    fireButton: number;
  } | null>(null);

  const filteredPhones = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase().replace(/\s+/g, ' ');
    if (!normalized) return phoneDatabase;

    const tokens = normalized.split(' ');
    return phoneDatabase.filter((phone) => {
      const haystack = `${phone.brand} ${phone.model}`.toLowerCase();
      return tokens.every((t) => haystack.includes(t));
    });
  }, [searchQuery]);

  const generateSensitivity = (phone: Phone) => {
    // Fixed sensitivity calculation based on DPI
    // Higher DPI = Lower sensitivity needed for consistent control
    const baseFactor = 200 / phone.dpi;
    
    // Calculate fixed values (no randomization for consistency)
    const general = Math.round(baseFactor * 85);
    const redDot = Math.round(general * 0.95);
    const scope2x = Math.round(general * 0.85);
    const scope4x = Math.round(general * 0.70);
    
    // Fixed fire button size based on DPI ranges
    let fireButton = 50; // Default
    if (phone.dpi >= 480) {
      fireButton = 52;
    } else if (phone.dpi >= 440) {
      fireButton = 51;
    } else if (phone.dpi >= 400) {
      fireButton = 50;
    } else {
      fireButton = 48;
    }

    // Ensure all values are within valid range
    return {
      general: Math.min(200, Math.max(1, general)),
      redDot: Math.min(200, Math.max(1, redDot)),
      scope2x: Math.min(200, Math.max(1, scope2x)),
      scope4x: Math.min(200, Math.max(1, scope4x)),
      fireButton: Math.min(60, Math.max(45, fireButton)),
    };
  };

  const handleGenerate = () => {
    if (!selectedPhone) {
      toast.error('Please select a phone first');
      return;
    }

    const sensi = generateSensitivity(selectedPhone);
    setSensitivity(sensi);
    toast.success('Sensitivity generated successfully!');
  };

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

          <Card className="p-8 bg-card/40 backdrop-blur-xl border-border mb-6 animate-fade-in">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mobile Sensitivity Generator
            </h1>

            <div className="space-y-6">
              <div>
                <Label htmlFor="search" className="text-lg mb-2 block">Search Your Phone</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    id="search"
                    placeholder="Search by brand or model..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/50 backdrop-blur-sm"
                  />
                </div>
              </div>

              {searchQuery && (
                <div className="max-h-64 overflow-y-auto space-y-2 border border-border rounded-lg p-4 bg-background/30 backdrop-blur-sm">
                  {filteredPhones.length > 0 ? (
                    filteredPhones.map((phone) => (
                      <button
                        key={phone.id}
                        onClick={() => {
                          setSelectedPhone(phone);
                          setSearchQuery('');
                          setSensitivity(null);
                        }}
                        className="w-full text-left p-3 rounded-lg hover:bg-primary/10 transition-colors border border-transparent hover:border-primary"
                      >
                        <div className="font-semibold">{phone.brand} {phone.model}</div>
                        <div className="text-sm text-muted-foreground">
                          DPI: {phone.dpi} | Year: {phone.releaseYear}
                        </div>
                      </button>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground py-4">No phones found</p>
                  )}
                </div>
              )}

              {selectedPhone && (
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="text-xl font-bold mb-4">Selected Phone</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Brand</p>
                      <p className="font-semibold text-lg">{selectedPhone.brand}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Model</p>
                      <p className="font-semibold text-lg">{selectedPhone.model}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">DPI</p>
                      <p className="font-semibold text-lg">{selectedPhone.dpi}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Release Year</p>
                      <p className="font-semibold text-lg">{selectedPhone.releaseYear}</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleGenerate}
                    className="w-full bg-gradient-gaming hover:opacity-90"
                  >
                    Generate Sensitivity
                  </Button>
                </Card>
              )}

              {sensitivity && (
                <Card className="p-6 bg-secondary/5 border-secondary/20 animate-slide-up">
                  <h3 className="text-xl font-bold mb-4">Generated Sensitivity Settings</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground mb-1">General Sensitivity</p>
                      <p className="text-3xl font-bold text-primary">{sensitivity.general}</p>
                      <p className="text-xs text-muted-foreground">out of 200</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground mb-1">Red Dot</p>
                      <p className="text-3xl font-bold text-primary">{sensitivity.redDot}</p>
                      <p className="text-xs text-muted-foreground">out of 200</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground mb-1">2x Scope</p>
                      <p className="text-3xl font-bold text-primary">{sensitivity.scope2x}</p>
                      <p className="text-xs text-muted-foreground">out of 200</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground mb-1">4x Scope</p>
                      <p className="text-3xl font-bold text-primary">{sensitivity.scope4x}</p>
                      <p className="text-xs text-muted-foreground">out of 200</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm md:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Fire Button Size</p>
                      <p className="text-3xl font-bold text-secondary">{sensitivity.fireButton}</p>
                      <p className="text-xs text-muted-foreground">recommended size</p>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MobileSensi;
