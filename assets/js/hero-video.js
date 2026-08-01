(() => {
  const query = window.matchMedia('(max-width: 900px)');
  const videos = [...document.querySelectorAll('.home-hero-video')];
  if (!videos.length) return;

  const sync = () => {
    const useMobile = query.matches;
    videos.forEach((video) => {
      const active = useMobile
        ? video.classList.contains('home-hero-video-mobile')
        : video.classList.contains('home-hero-video-desktop');

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      if (active) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {
            // Safari Low Power Mode may block autoplay; the poster remains visible.
          });
        }
      } else {
        video.pause();
      }
    });
  };

  sync();
  if (typeof query.addEventListener === 'function') {
    query.addEventListener('change', sync);
  } else if (typeof query.addListener === 'function') {
    query.addListener(sync);
  }
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) sync();
  });
})();
