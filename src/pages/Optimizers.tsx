import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';

interface Optimizer {
  id: string;
  name: string;
  description: string;
  downloadUrl: string;
  version?: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  image: string;
}

const Optimizers = () => {
  const categories: Category[] = [
    {
      id: 'regedit',
      name: 'Regedit',
      image: '/reg.png',
    },
    {
      id: 'optimizers',
      name: 'BlackoutX',
      image: '/tweaks.png',
    },
  ];

  const optimizers: Optimizer[] = [
    {
      id: 'optimization-reg',
      name: 'Optimization Reg',
      description: 'Registry optimization files for enhanced gaming performance',
      downloadUrl: 'https://drive.google.com/file/d/1-okwIGpHnucwYDPB0Q-hDBY9ZKnwAhdQ/view?usp=sharing',
      category: 'regedit',
    },
    {
      id: 'blackoutx',
      name: 'BlackoutX',
      description: 'Advanced gaming optimizer for enhanced performance',
      downloadUrl: 'https://drive.google.com/file/d/1KboKzG1-runo2Ns2ME7VA_gJWhNLodG-/view?usp=sharing',
      category: 'optimizers',
    },
  ];

  const handleDownload = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getOptimizersByCategory = (categoryId: string) => {
    return optimizers.filter((opt) => opt.category === categoryId);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-6 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </Link>

          <Card className="p-8 bg-card/40 backdrop-blur-xl border-border mb-6 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Optimizers
            </h1>
            <p className="text-muted-foreground mb-6">
              Download optimizers to enhance your Free Fire gaming experience
            </p>

            {categories.length > 0 ? (
              <div className="space-y-8">
                {categories.map((category) => {
                  const categoryOptimizers = getOptimizersByCategory(category.id);

                  return (
                    <div key={category.id} className="space-y-4">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center overflow-hidden">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <h2 className="text-2xl font-bold">{category.name}</h2>
                      </div>

                      {categoryOptimizers.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-4">
                          {categoryOptimizers.map((optimizer) => (
                            <Card
                              key={optimizer.id}
                              className="p-6 bg-background/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-200"
                            >
                              <div className="flex flex-col space-y-4">
                                <div>
                                  <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold">{optimizer.name}</h3>
                                    {optimizer.version && (
                                      <span className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded">
                                        v{optimizer.version}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-2">
                                    {optimizer.description}
                                  </p>
                                </div>
                                <Button
                                  onClick={() => handleDownload(optimizer.downloadUrl)}
                                  className="w-full bg-gradient-gaming hover:opacity-90 transition-opacity"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Download
                                  <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                              </div>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-muted-foreground">
                          <p>No items available in this category yet.</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  No optimizers available yet. Check back soon!
                </p>
                <p className="text-sm text-muted-foreground">
                  Optimizers will be added here for download.
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Optimizers;
