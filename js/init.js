(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "IHOPkc",
        devKey: "AIzaSyCUK_V4xPM46TC0YjC9zfIkSt0nFiHDd_k",
        showLatestChannel: true,
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));
