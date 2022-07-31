const IMAGE_LINK = "https://www.googleapis.com/books/v1/volumes?q="

// JS implementation of Java Hash, straight off stackoverflow
export function genId(string) {
    var hash = 0, i, chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
      chr   = string.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0;
    }
    return hash;
}

export async function genImage(title) {
    let url = IMAGE_LINK + title.replace(" ", "+");

    let json = await (await fetch(url)).json()
    return json.items[0].volumeInfo.imageLinks.thumbnail;
}