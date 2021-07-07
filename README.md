# webstore
Web client for openGiraffes Store

![shields.io Last Commit badge](https://img.shields.io/github/last-commit/openGiraffes/openGiraffes-store-web)

## Building

The WebStore can be run directly from `src/index.html` in this Git repository. For GitHub pages hosting, you will need to build it (run these commands relative to the project directory):

- Install build dependencies:
```bash
npm install -g gulp-cli
npm install
```
- Build the project:
```bash
gulp
```

and of course enable GitHub Pages and set it to host from `docs/`. You will need to run the 'Build the project' step every commit to have the changes from `src/` be reflected on GitHub Pages.

## Contributing

Please refer to `CONTRIBUTING.md` in this Git repository, but tldr here for anyone too lazy to read:

- We use Standard JS code style. Please make use of it in your contributions (You can try to comply with Standard JS).
- Respect others and maintain the code of conduct. Please read `CODE_OF_CONDUCT.md` in this Git repository.

## License

[![GPLv3 logo](https://www.gnu.org/graphics/gplv3-127x51.png)](https://www.gnu.org/licenses/gpl-3.0.html)

This project is licensed under the GPLv3 license. A copy is included in `LICENSE.txt` in this Git repository.

## Credits & thanks

This project wouldn't have been possible without the following resources and projects:

- Bulma by [@jgthms](https://github.com/jgthms): https://bulma.io/
- QRCodeJS by [@davidshimjs](https://github.com/davidshimjs): https://github.com/davidshimjs/qrcodejs
- GitHub fork ribbon CSS by [@simonwhitaker](https://github.com/simonwhitaker): https://github.com/simonwhitaker/github-fork-ribbon-css
- Bulma Floating Buttons by [@alakise](https://github.com/alakise): https://github.com/alakise/bulma-floating-button,
- Bulma Toast by [@rfoel](https://github.com/rfoel): https://github.com/rfoel/bulma-toast
- Font Awesome 5: https://fontawesome.com/
- Animate.CSS: https://github.com/animate-css/animate.css
- jQuery: https://jquery.com
- jquery-lang-js[@Irrelon](https://github.com/Irrelon): https://github.com/Irrelon/jquery-lang-js

and all the people at BananaHackers, 4Omin, perry and Farooq Karimi Zadeh for maintaining the BananaHackers Store on GitLab and GitHub, and of course, all the Mozilla Developer Network documentation ;)
