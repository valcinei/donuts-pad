module.exports = {
    urlToDotPath(url){
        if(!url) return '/';
        url+="/content"
        url = url
            .replace(/\/+/g,".")
            .replace(/(\.){2,}/g, ".")
            .replace(/^\./g,"")
        return url;
    }
}