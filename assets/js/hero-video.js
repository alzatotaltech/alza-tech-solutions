(() => {
  const query = window.matchMedia('(max-width: 900px)');
  const video = document.querySelector('.home-hero-video-mobile');
  if (!video) return;

  const sync = () => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    if (query.matches && !document.hidden) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Safari Low Power Mode can block autoplay; the poster remains visible.
        });
      }
    } else {
      video.pause();
    }
  };

  sync();
  if (typeof query.addEventListener === 'function') {
    query.addEventListener('change', sync);
  } else if (typeof query.addListener === 'function') {
    query.addListener(sync);
  }
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pageshow', sync);
})();
