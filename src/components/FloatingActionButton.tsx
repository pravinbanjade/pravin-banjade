import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Pravin_Banjade_CV.pdf';
    link.click();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg animate-fade-in">
            Download CV
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-foreground"></div>
          </div>
        )}

        {/* FAB Button */}
        <Button
          onClick={downloadCV}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Download CV"
        >
          <Download className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
