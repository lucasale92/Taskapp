export const scheduleNotification = (title, body, dueDate) => {
    if (!('Notification' in window)) {
      console.error('Este navegador no soporta notificaciones de escritorio');
      return;
    }
  
    if (Notification.permission === 'granted') {
      const notificationTime = new Date(dueDate).getTime() - 24 * 60 * 60 * 1000; // 24 horas antes de la fecha de vencimiento
  
      if (notificationTime > new Date().getTime()) {
        setTimeout(() => {
          const notification = new Notification(title, {
            body,
            icon: '/path/to/icon.png', // Ruta de la imagen de icono (opcional)
          });
  
          notification.onclick = () => {
            window.focus();
          };
        }, notificationTime - new Date().getTime());
      }
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          scheduleNotification(title, body, dueDate);
        }
      });
    }
  };