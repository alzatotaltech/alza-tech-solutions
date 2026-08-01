(() => {
  const mq = window.matchMedia('(max-width: 900px)');
  const pairs = Array.from(document.querySelectorAll('.responsive-media-pair'));
  const heroVideos = Array.from(document.querySelectorAll('.page-hero-mobile-video, .home-hero-video-mobile'));

  const prepare = (video) => {
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
  };

  const attemptPlay = (video) => {
    if (!video || video.hidden || !mq.matches || document.hidden || video.dataset.inView === 'false') {
      if (video && !video.paused) video.pause();
      return;
    }
    prepare(video);
    const promise = video.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch(() => video.classList.add('mobile-media-failed'));
    }
  };

  const syncPair = (pair) => {
    const image = pair.querySelector(':scope > .media-webp-desktop');
    const video = pair.querySelector(':scope > .media-h264-mobile');
    const mobile = mq.matches;
    if (image) {
      image.hidden = mobile;
      image.setAttribute('aria-hidden', mobile ? 'true' : 'false');
    }
    if (video) {
      prepare(video);
      video.hidden = !mobile;
      video.setAttribute('aria-hidden', mobile ? 'false' : 'true');
      if (mobile) attemptPlay(video); else video.pause();
    }
  };

  const allVideos = [...pairs.map(p => p.querySelector(':scope > .media-h264-mobile')).filter(Boolean), ...heroVideos];
  allVideos.forEach((video) => {
    prepare(video);
    video.addEventListener('loadedmetadata', () => attemptPlay(video), {passive:true});
    video.addEventListener('canplay', () => attemptPlay(video), {passive:true});
    video.addEventListener('error', () => video.classList.add('mobile-media-failed'), {passive:true});
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.inView = entry.isIntersecting ? 'true' : 'false';
        if (entry.isIntersecting) attemptPlay(entry.target); else entry.target.pause();
      });
    }, {rootMargin:'100px 0px', threshold:0.01});
    allVideos.forEach(v => observer.observe(v));
  } else {
    allVideos.forEach(v => { v.dataset.inView = 'true'; });
  }

  const sync = () => {
    pairs.forEach(syncPair);
    heroVideos.forEach((video) => {
      video.hidden = !mq.matches;
      if (mq.matches) attemptPlay(video); else video.pause();
    });
  };

  sync();
  if (typeof mq.addEventListener === 'function') mq.addEventListener('change', sync);
  else if (typeof mq.addListener === 'function') mq.addListener(sync);
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pageshow', sync);
  window.addEventListener('orientationchange', () => setTimeout(sync, 250));
  document.addEventListener('touchstart', sync, {once:true, passive:true});
})();
