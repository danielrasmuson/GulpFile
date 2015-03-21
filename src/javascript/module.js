var addContentToId = function(id){
    var elem = document.querySelector('#'+id)
    elem.innerHTML = 'This was added from browserify module.'
}
module.exports = addContentToId;