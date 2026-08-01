(() => {
  const mq = window.matchMedia('(max-width: 900px)');
  const videos = Array.from(document.querySelectorAll('.mobile-autoplay-media'));
  if (!videos.length) return;

  const prepare = (video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
  };

  const attemptPlay = (video) => {
    prepare(video);
    if (!mq.matches || document.hidden || video.dataset.inView === 'false') {
      video.pause();
      return;
    }
    const result = video.play();
    if (result && typeof result.catch === 'function') {
      result.catch(() => video.classList.add('mobile-media-failed'));
    }
  };

  videos.forEach((video) => {
    prepare(video);
    video.addEventListener('loadedmetadata', () => attemptPlay(video), {passive:true});
    video.addEventListener('canplay', () => attemptPlay(video), {passive:true});
    video.addEventListener('error', () => video.classList.add('mobile-media-failed'), {passive:true});
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.inView = entry.isIntersecting ? 'true' : 'false';
        if (entry.isIntersecting) attemptPlay(entry.target);
        else entry.target.pause();
      });
    }, {rootMargin:'100px 0px', threshold:0.01});
    videos.forEach((video) => observer.observe(video));
  } else {
    videos.forEach((video) => { video.dataset.inView='true'; });
  }

  const sync = () => videos.forEach(attemptPlay);
  sync();
  if (typeof mq.addEventListener === 'function') mq.addEventListener('change', sync);
  else if (typeof mq.addListener === 'function') mq.addListener(sync);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pageshow', sync);
  window.addEventListener('orientationchange', () => setTimeout(sync, 250));
  document.addEventListener('touchstart', sync, {once:true, passive:true});
})();
