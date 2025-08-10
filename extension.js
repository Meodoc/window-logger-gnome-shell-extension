import GLib from 'gi://GLib';

import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';

export default class WindowLoggerExtension extends Extension {
    enable() {
        this.createdId = global.display.connect('window-created', (display, window) => {
            GLib.timeout_add(GLib.PRIORITY_DEFAULT, 200, () => {
                let title = window.get_title() || '[no title]';
                let wmClass = window.get_wm_class() || '[no wm_class]';
                log(`Window created: title='${title}' wm_class='${wmClass}' (PID: ${window.get_pid()})`);
                return GLib.SOURCE_REMOVE;
            });
        });

        log('Window Logger extension enabled');
    }

    disable() {
        if (this.createdId) {
            global.display.disconnect(this.createdId);
            this.createdId = null;
        }

        log('Window Logger extension disabled');
    }
}
