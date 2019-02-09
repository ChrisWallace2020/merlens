# merlens
Merlens enables people to navigate browsers using computer vision for facial recognition

## Running Merlens

Controls:
- To move the mouse, rotate your face towards the direction you want the mouse to move.
- Blink between 1 and 3 seconds to click.
- Blink more than 3 seconds to start typing via speech-to-text processing. Say "Enter" when you're done talking.

## Scrolling via Mouse Position
To set up scrolling via mouse position, do the following:

1. Install a userscript extension, such as ViolentMonkey ([Chrome](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/]))

2. Install from the following URL, or copy and paste the code from `mouseScroll.js`:
`https://raw.githubusercontent.com/wiyu98/merlens/master/mouseScroll.js`

3. [Optional] Customize the speed and toggle by parameters passing in a JSON object when `mouseScroll` is initialized.

4. Save the script and restart your browser for the script to start working. If you are using the default parameters, you will have to press ` to initialize the scroller.
