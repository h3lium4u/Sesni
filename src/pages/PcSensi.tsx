import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import SplineBackground from '@/components/SplineBackground';
import { toast } from 'sonner';

const PcSensi = () => {
  const [cfgInput, setCfgInput] = useState('');
  const [sensiType, setSensiType] = useState('');
  const [extractedData, setExtractedData] = useState<{
    xSensi: number;
    ySensi: number;
    tweaks: string;
  } | null>(null);
  const [modifiedCfg, setModifiedCfg] = useState('');

  const extractSensitivity = () => {
    try {
      const cfg = JSON.parse(cfgInput);
      
      // Find the Pan control
      const panControl = cfg.ControlSchemes?.[0]?.GameControls?.find(
        (control: any) => control.$type === "Pan, Bluestacks"
      );

      if (!panControl) {
        toast.error('Could not find Pan control in CFG');
        return;
      }

      setExtractedData({
        xSensi: panControl.Sensitivity || 0,
        ySensi: panControl.SensitivityRatioY || 0,
        tweaks: panControl.Tweaks?.toString() || '0',
      });

      toast.success('Sensitivity data extracted!');
    } catch (error) {
      toast.error('Invalid CFG format. Please paste valid JSON.');
    }
  };

  const modifySensitivity = () => {
    if (!sensiType) {
      toast.error('Please select your sensitivity type');
      return;
    }

    if (!extractedData) {
      toast.error('Please extract sensitivity first');
      return;
    }

    try {
      const cfg = JSON.parse(cfgInput);
      
      // Find and modify the Pan control
      const panControlIndex = cfg.ControlSchemes[0].GameControls.findIndex(
        (control: any) => control.$type === "Pan, Bluestacks"
      );

      if (panControlIndex !== -1) {
        cfg.ControlSchemes[0].GameControls[panControlIndex].Tweaks = 288016450;
        cfg.ControlSchemes[0].GameControls[panControlIndex].Sensitivity = 
          Math.max(0, extractedData.xSensi - 5);
        cfg.ControlSchemes[0].GameControls[panControlIndex].SensitivityRatioY = 
          Math.max(0, extractedData.ySensi - 5);
      }

      const modified = JSON.stringify(cfg, null, 2);
      setModifiedCfg(modified);
      toast.success('CFG modified successfully!');
    } catch (error) {
      toast.error('Error modifying CFG');
    }
  };

  const copyCfg = () => {
    navigator.clipboard.writeText(modifiedCfg);
    toast.success('Modified CFG copied to clipboard!');
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
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              PC / Emulator CFG Editor
            </h1>

            <div className="space-y-6">
              <div>
                <Label htmlFor="cfg" className="text-lg mb-2 block">Paste Your CFG File</Label>
                <Textarea
                  id="cfg"
                  placeholder="Paste your Free Fire CFG JSON here..."
                  value={cfgInput}
                  onChange={(e) => setCfgInput(e.target.value)}
                  className="min-h-[200px] font-mono text-sm bg-background/50 backdrop-blur-sm"
                />
                <Button 
                  onClick={extractSensitivity}
                  className="mt-4 bg-gradient-gaming hover:opacity-90"
                  disabled={!cfgInput}
                >
                  Extract Sensitivity
                </Button>
              </div>

              {extractedData && (
                <Card className="p-6 bg-primary/5 border-primary/20 animate-slide-up">
                  <h3 className="text-xl font-bold mb-4">Extracted Data</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground mb-1">X Sensitivity</p>
                      <p className="text-2xl font-bold text-primary">{extractedData.xSensi}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground mb-1">Y Sensitivity</p>
                      <p className="text-2xl font-bold text-primary">{extractedData.ySensi}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm">
                      <p className="text-sm text-muted-foreground mb-1">Tweaks</p>
                      <p className="text-2xl font-bold text-primary">{extractedData.tweaks}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <Label className="text-lg mb-4 block">Select Your Sensitivity Type</Label>
                    <RadioGroup value={sensiType} onValueChange={setSensiType}>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-primary/10 transition-colors">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high" className="cursor-pointer flex-1">High Sensitivity</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-primary/10 transition-colors">
                        <RadioGroupItem value="mid" id="mid" />
                        <Label htmlFor="mid" className="cursor-pointer flex-1">Mid Sensitivity</Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-primary/10 transition-colors">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low" className="cursor-pointer flex-1">Low Sensitivity</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button 
                    onClick={modifySensitivity}
                    className="w-full bg-gradient-gaming hover:opacity-90"
                    disabled={!sensiType}
                  >
                    Generate Modified CFG
                  </Button>
                </Card>
              )}

              {modifiedCfg && (
                <Card className="p-6 bg-secondary/5 border-secondary/20 animate-slide-up">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Modified CFG</h3>
                    <Button 
                      onClick={copyCfg}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </Button>
                  </div>
                  <Textarea
                    value={modifiedCfg}
                    readOnly
                    className="min-h-[300px] font-mono text-sm bg-background/50 backdrop-blur-sm"
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    Tweaks set to: <span className="font-bold text-secondary">288016450</span>
                    <br />
                    X and Y sensitivity reduced by 5
                  </p>
                </Card>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PcSensi;
