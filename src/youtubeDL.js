var videoUrls = window.ytplayer &&

    window.ytplayer.config.args.url_encoded_fmt_stream_map.split(',').map(function(item) {
        return  item.split("&").reduce(function(pre, cur){

            console.log(pre, cur);
        });
    });