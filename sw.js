self.addEventListener('push', function(e) {
  const data = e.data ? e.data.json() : {};
  const title = data.title || '업무 인수인계';
  const body = data.body || '새 항목이 추가되었습니다';
  e.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: '/handover/icon.png',
      badge: '/handover/icon.png',
      vibrate: [200, 100, 200],
      tag: 'handover-notification',
      renotify: true
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.openWindow('/handover/'));
});
