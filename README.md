# Window Logger

Window Logger is a [Gnome Shell](https://gnome.org/) extension that logs window `title` and `wm_class` properties on window creation. This can be useful for short-lived windows where the [looking glass](https://wiki.gnome.org/Projects/GnomeShell/LookingGlass) method of retrieving window properties is not feasible.

## Usage

1. Clone the extension in `~/.local/share/gnome-shell/extensions/`
2. Rename the directory to `window-logger@meodoc.github.com`
3. Log out and log back in
4. Enable the extension in the GNOME Extensions menu

To see the log messages, run the following while opening windows:

```bash
journalctl -f /usr/bin/gnome-shell | grep "Window created"
```

## Supported versions of the GNOME Shell

Currently supported and tested versions are:

- 48.3

