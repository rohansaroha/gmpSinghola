import React from 'react';
import { motion } from 'framer-motion';

type Reel = {
  url: string;
  title: string;
};

const reels: Reel[] = [
  { url: 'https://www.instagram.com/reel/DAuzNmOuupC/?igsh=NW9xaWgxdGFkdXJi', title: '#EXCURSION2024' },
  { url: 'https://www.instagram.com/reel/C9rbsUuMr-9/?igsh=b3B3Nm5rcDd3cmRm', title: 'Rainy Day at G.M.P.S.' },
  { url: 'https://www.instagram.com/reel/C9rb8HGvXtu/?igsh=MTlzZ3JhODNzbjN5Mw==', title: 'Save Trees & Save Earth Activity' },
  { url: 'https://www.instagram.com/p/DIvl-Drz6jg/?igsh=NGU3dXR3cjl6NHhn', title: 'Save Earth Post' },
  { url: 'https://www.instagram.com/reel/DAVzyyPvMle/?igsh=MWpkc2VocjV6aXpvbg==', title: 'Nukkad Natak on HINDI DIWAS' },
  { url: 'https://www.instagram.com/reel/C6wCA9qN7G2/?igsh=MTJmNmdsOGcyczg0Mw==', title: 'Reel' },
  { url: 'https://www.instagram.com/reel/C9ueqYwtXDv/?igsh=ZjM3Zmx3aTViMjg2', title: 'TIRANGA RALLY' },
  { url: 'https://www.instagram.com/p/C5-6tpcp7bN/?igsh=ZDA2MjI0NWpjeXV2', title: 'Food activity by little students' }
];

// Convert standard Instagram URLs to embeddable iframe URLs
const toEmbedUrl = (rawUrl: string): string => {
  try {
    const u = new URL(rawUrl);
    const parts = u.pathname.split('/').filter(Boolean); // [reel, CODE]
    if (parts.length >= 2) {
      // Use Instagram's embed endpoint and request caption hidden
      const base = `${u.origin}/${parts[0]}/${parts[1]}/embed`;
      return `${base}?hidecaption=true`;
    }
    // Fallback to original if parsing fails
    return rawUrl;
  } catch {
    return rawUrl;
  }
};

const InstagramReels: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);
  const timerRef = React.useRef<number | undefined>(undefined);
  const total = reels.length;
  const slidesPerView = 3;
  const slideWidthPct = 100 / slidesPerView; // 33.3333%

  const goTo = (idx: number) => {
    const normalized = ((idx % total) + total) % total;
    setCurrentIndex(normalized);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 40) return; // ignore small swipes
    if (deltaX > 0) goTo(currentIndex - 1);
    else goTo(currentIndex + 1);
  };

  const startAutoplay = React.useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => ((prev + 1) % total));
    }, 3500);
  }, [total]);

  const stopAutoplay = React.useCallback(() => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = undefined;
  }, []);

  React.useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  return (
    <section id="reels" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Instagram Reels</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest moments from our official Instagram account.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {/* Slider track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * slideWidthPct}%)` }}
          >
            {reels.map((reel, index) => {
              const isVisible = Array.from({ length: slidesPerView }).some((_, k) => ((currentIndex + k) % total) === index);
              return (
                <div key={reel.url} className="flex-shrink-0 px-2" style={{ width: `${slideWidthPct}%` }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl overflow-hidden shadow-lg bg-black border"
                  >
                    <div className="relative pt-[177.78%]">
                      {isVisible ? (
                        <iframe
                          src={toEmbedUrl(reel.url)}
                          title={reel.title}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-black" />
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {reels.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">Swipe or use arrows to navigate.</div>
      </div>
    </section>
  );
};

export default InstagramReels;


