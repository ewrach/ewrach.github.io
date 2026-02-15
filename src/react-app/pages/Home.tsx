import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/react-app/components/ui/button';
import { Card } from '@/react-app/components/ui/card';

export default function Home() {
  const [answered, setAnswered] = useState(false);
  const [noButtonSize, setNoButtonSize] = useState(100);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);

  const noButtonMessages = [
    "Are you sure? 🥺",
    "Really? Think about it... 💭",
    "Maybe reconsider? 🤔",
    "Pretty please? 🙏",
    "One more chance? 💝"
  ];

  const handleYes = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    // Make the No button smaller and move it randomly
    setNoButtonSize(prev => Math.max(prev - 10, 40));
    setNoClickCount(prev => prev + 1);
    
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {!answered ? (
          <Card className="p-12 backdrop-blur-sm bg-card/95 shadow-2xl border-2 border-primary/20">
            <div className="text-center space-y-8">
              {/* Hearts decoration */}
              <div className="flex justify-center gap-2 mb-6">
                <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
                <Heart className="w-12 h-12 text-primary animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
              </div>

              {/* Main question */}
              <div>
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent animate-gradient">
                  Will You Be
                </h1>
                <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text text-transparent animate-gradient">
                  My Valentine?
                </h1>
              </div>

              <div className="flex items-center justify-center gap-3 text-muted-foreground">
                <Sparkles className="w-5 h-5" />
                <p className="text-lg italic">I promise it'll be worth it</p>
                <Sparkles className="w-5 h-5" />
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-6 pt-8 relative">
                <Button
                  size="lg"
                  onClick={handleYes}
                  className="text-2xl px-12 py-8 font-bold shadow-lg hover:scale-110 transition-all duration-300 bg-primary hover:bg-primary/90"
                >
                  <Heart className="w-6 h-6 mr-2" fill="currentColor" />
                  Yes! 💕
                </Button>

                <div className="relative">
                  <Button
                    variant="outline"
                    size="lg"
                    onMouseEnter={handleNoHover}
                    onTouchStart={handleNoHover}
                    className="text-xl px-8 py-6 font-semibold transition-all duration-300 border-2"
                    style={{
                      fontSize: `${noButtonSize}%`,
                      transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                    }}
                  >
                    {noClickCount < noButtonMessages.length ? noButtonMessages[noClickCount] : "No..."}
                  </Button>
                </div>
              </div>

              {noClickCount > 0 && (
                <p className="text-sm text-muted-foreground animate-pulse pt-4">
                  The "Yes" button is looking pretty good now, isn't it? 😊
                </p>
              )}
            </div>
          </Card>
        ) : (
          <Card className="p-12 backdrop-blur-sm bg-card/95 shadow-2xl border-2 border-primary/20 animate-scale-in">
            <div className="text-center space-y-8">
              <div>
                <h1 className="text-6xl font-bold mb-8 text-foreground">
                  lol knew it simp
                </h1>
              </div>

              <div className="flex justify-center">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="max-w-md w-full rounded-lg shadow-lg"
                >
                  <source src="https://static.klipy.com/ii/0db853ad1d7f196f1b7a6eb9ab617a5a/c3/0d/WUkRAiL84lU2xIyLmGI.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </Card>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) rotate(180deg);
            opacity: 0.5;
          }
          90% {
            opacity: 0.3;
          }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes scale-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
