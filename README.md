# MMM-Overlay

This is a lightweight module for [MagicMirror²][mm] to have a modal overlay to show any kind of modules.

## Installation

### Install

In your terminal, go to your [MagicMirror²][mm] Module folder and clone MMM-Overlay:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/SeeSharpSoft/MMM-Overlay.git
```

### Update

```bash
cd ~/MagicMirror/modules/MMM-Overlay
git pull
```

## Using the module

### Update `index.html`

This module requires a new region definition in the `index.html` file of MagicMirror (root).

Add the following line in the `MagicMirror/index.html` within the body tag:

```html
<div class="region overlay"><div class="container"></div></div>
```

like this
```html
<html>
    <head>
      ...
    </head>
    <body>
        ...
        <div class="region fullscreen above"><div class="container"></div></div>
        <div class="region overlay"><div class="container"></div></div> <!-- recommended position is at the end of the region divs -->
        <script ... />
          ...
    </body>
</html>
```

### Config

To use this module, add it to the modules array in the `config/config.js` file:

```js
    {
        module: "MMM-Overlay",
        config: {
          active: false
        }
    }
```

**Note:** Do not add a position to this module.

If a module should render in the overlay, use `overlay` as position value, like
```js
    {
        module: "weather",
        position: "overlay",
        config: {
          ...
        }
    }
```

## Configuration options

Option| Possible values | Default |Description
------|-----------------|---------|-----------
`active`| `boolean`       | false   |Whether the overlay is active/visible

## Sending notifications to the module

By default, the overlay is not active/visible. Its visibility can be controlled by sending notifications.

Notification|Description
------|-----------
`OVERLAY.SHOW`|Shows (activates) the overlay
`OVERLAY.HIDE`|Hides (deactivates) the overlay
`OVERLAY.ACTIVE`|Payload must contain `true`/`false`

## Developer commands

- `npm install` - Install devDependencies like ESLint.
- `npm run lint` - Run linting and formatter checks.
- `npm run lint:fix` - Fix linting and formatter issues.

[mm]: https://github.com/MagicMirrorOrg/MagicMirror
