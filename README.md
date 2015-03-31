# Ionic Horizontal Scroll Cards

A mobile UI component for horizontal scroll cards. Based loosely off of Spotify's featured playlist slider on iOS and Android.

#### Examples: 
- [Ionic Horizontal Scroll Cards](http://drewrygh.com/ionic-horizontal-scroll-cards/)
- [Ionic Horizontal Scroll Cards on Codepen](http://codepen.io/drewrygh/pen/jEJGLx)
*(note: Chrome/Firefox [DevTools](https://developer.chrome.com/devtools/docs/device-mode) must be used to emulate a mobile device when viewing the Codepen example.)*

#### Installation
```bash
# via bower:
bower install ionic-ion-horizontal-scroll-cards

# or... to use as the starting point for a new Ionic app:
ionic start myProject http://codepen.io/drewrygh/pen/jEJGLx
```

#### Usage
```html
<!-- 1.) Include these and make sure the path is correct: -->
<link href="../path/to/css/hscrollcards.min.css" rel="stylesheet">
<script src="../path/to/js/ionic.hscrollcards.js"></script>

<!-- 2.) Add these directives to your Angular/Ionic view: -->
<hscroller>
    <hcard ng-repeat="item in items" index="{{$index}}" desc="{{item.desc}}" image="{{item.image}}"></hcard>
</hscroller>
```

#### Customizing with SASS
```sass
// Below are the defaults for variables that can be overridden:
$hscroller-lateral-padding: 10px;
$hscroller-card-height: 160px;
$hscroller-card-width: 120px;
$hscroller-image-height: 120px;
$hscroller-image-width: 120px;
$hscroller-card-animate-time: 0.4s;
```
