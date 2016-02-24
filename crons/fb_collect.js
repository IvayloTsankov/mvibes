function extractSongs() {
    var posts = document.getElementsByClassName("_3ccb");
    var names = [];
    var links = [];
    var result = {};
    for (var x in posts) {
        if (!posts[x].getElementsByTagName || !posts[x].getElementsByClassName) {
            continue;
        }

        var name_title = posts[x].getElementsByTagName("h5")[0];
        if (!name_title) {
            continue;
        }

        var name = ""
        if (name_title && name_title.childNodes &&
            name_title.childNodes[0] &&
            name_title.childNodes[0].childNodes &&
            name_title.childNodes[0].childNodes[0] &&
            name_title.childNodes[0].childNodes[0].childNodes &&
            name_title.childNodes[0].childNodes[0].childNodes[0] &&
            name_title.childNodes[0].childNodes[0].childNodes[0].text) {
                name = name_title.childNodes[0].childNodes[0].childNodes[0].text;
                names.push(name);
        }

        var link = "";
        var wrapper = posts[x].getElementsByClassName("mbs _6m6")[0];
        if (!wrapper || !wrapper.childNodes ||
            wrapper.childNodes.length === 0 ||
            !wrapper.childNodes[0].getAttribute) {
                continue;
        }

        link = wrapper.childNodes[0].getAttribute("href");
        links.push(link);

        if(!result[name]) {
            result[name] = [];
        } else {
            result[name].push(link);
        }
    }

    return result;
}

function printSongs(songsMap) {
    for(poster in songsMap) {
        console.log(poster);
        var songs = songsMap[poster];
        if (songs) {
            for(var song in songs) {
                console.log(songs[song]);
            }
        }

        console.log("end ", poster);
    }
}