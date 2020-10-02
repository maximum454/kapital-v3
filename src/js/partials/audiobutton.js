function initAudio() {
    $('.article-headphone').off('click').on('click', function () {
        var articleContainer = $(this).parent();
        var url = $(this).data('audiofile');
        var title = $(this).data('audiotitle');

        if (url !== '') {
            $('#js-audio-player').remove();
            articleContainer.append('<div class="article-audio" id="js-audio-player"><audio autoplay data-title="' + title + '" class="js-audioplayer"><source src="' + url + '" type="audio/mpeg"></audio></div>');
            $('.js-audioplayer').audioPlayer();
        }
        return true;
    })
}