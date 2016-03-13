# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

This change log adheres to [keepachangelog.com](http://keepachangelog.com).

## [Unreleased]
### Added
- Enable to preload third party editor classes via `Textcomplete.editors`.

### Fixed
- Fix dropdown position when window is scrolled.

## [0.3.0]
### Added
- Add "Getting Started", "Development" and "Events" documents.
- Add a contributing guide.
- Add `Dropdown#el` and `Dropdown#getActiveItem()` to its public interface.
- Add `render`, `select` and `selected` events to `Textcomplete`.
- Add `preventDefault` functionality to infinitive events.
- Enable to finalize `Textcomplete`.

### Changed
- Don't hide dropdown on blur event by default.
- Don't activate the first dropdown item by default.
- Emit `rendered` event whenever dropdown is rendered.

### Removed
- Remove `Dropdown#length`.
- Remove `Dropdown#selectActiveItem()`.

## [0.2.0] - 2016-02-29
### Added
- Enable to select dropdown in touch devices.
- Enable to use markdown in jsdoc.
- Add `cache`, `context` strategy parameters.
- Add `className`, `style`, `maxCount`, `header` and `footer` dropdown options.
- Add `show`, `shown`, `rendered`, `hide` and `hidden` events to `Textcomplete`.
- Support "rtl" textarea.

### Changed
- Exclude src/doc from Inch CI.

## [0.1.2] - 2016-02-22
### Added
- Add [jsdoc](https://github.com/jsdoc3/jsdoc) to `gh-pages`.

### Changed
- Use separated lodash npm packages instead of whole lodash code.

## [0.1.1] - 2016-02-22
### Added
- This CHANGELOG file.
- Update `gh-pages` automatically when `master` branch is changed.
- Create a corresponding GitHub release whenever a new npm package is published.

### Fixed
- Enable to require as a npm package.
- Don't lint js files in `dist/`, `lib/` and `powered-test/`.

## 0.1.0 - 2016-02-20 [YANKED]
### Added
- Initial release.

[Unreleased]: https://github.com/yuku-t/textcomplete/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/yuku-t/textcomplete/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/yuku-t/textcomplete/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/yuku-t/textcomplete/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/yuku-t/textcomplete/compare/83a55de...v0.1.1