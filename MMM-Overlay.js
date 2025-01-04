const NOTIFICATIONS = {
  SHOW: "OVERLAY.SHOW",
  HIDE: "OVERLAY.HIDE",
  ACTIVE: "OVERLAY.ACTIVE",
};

Module.register("MMM-Overlay", {
  defaults: {
    active: false,
  },

  /**
   * Apply the default styles.
   */
  getStyles() {
    return ["MMM-Overlay.css"];
  },

  /**
   * Pseudo-constructor for our module. Initialize stuff here.
   */
  start() {
    this.resume();
  },

  suspend() {
    const currentActive = this.getActive();
    this.setActive(false);
    this.config.active = currentActive;
  },

  resume() {
    this.setActive(this.config.active);
  },

  /**
   * This is the place to receive notifications from other modules or the system.
   *
   * @param {string} notification The notification ID, it is preferred that it prefixes your module name
   * @param {number} payload the payload type.
   */
  notificationReceived(notification, payload) {
    Log.debug("MMM-Overlay notificationReceived", notification, payload);
    switch (notification) {
      case NOTIFICATIONS.SHOW:
        this.setActive(true);
        break;
      case NOTIFICATIONS.HIDE:
        this.setActive(false);
        break;
      case NOTIFICATIONS.ACTIVE:
        this.setActive(payload);
        break;
    }
  },

  setActive(active) {
    this.config.active = active;
    const overlay = document.getElementsByClassName("region overlay")[0];
    if (active) {
      overlay.classList.add("active");
    } else {
      overlay.classList.remove("active");
    }
  },

  getActive() {
    return this.config.active;
  }
});
