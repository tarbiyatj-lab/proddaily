// Manages Web Notifications for the 12:45 PM Lunchtime Nudge

export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    return { granted: false, reason: "Browser does not support desktop notifications" };
  }

  if (Notification.permission === "granted") {
    return { granted: true };
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return { granted: permission === "granted" };
  }

  return { granted: false, reason: "Notification permission was previously denied" };
};

export const sendTestNotification = (productName = "Figma") => {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return false;
  }

  new Notification("🍱 ProdDaily — Lunch & Learn (12:45 PM)", {
    body: `Today's Drop is ready: ${productName}. Take 5 minutes to sharpen your PM product sense!`,
    icon: "https://api.iconify.design/lucide:rocket.svg?color=%233b82f6"
  });
  return true;
};
