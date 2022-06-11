function changer() {
  //listen this, waiting it to change instead of uptade every 1 second could be better,
  //but its not the end of the world.
  let musicInfoPane = document.getElementsByClassName("content-info-wrapper")[0];
  let formattedStrings = musicInfoPane.getElementsByTagName("yt-formatted-string")

  if (formattedStrings.length > 1) {
    let musicName = formattedStrings[0].title
    let musicArtistNotFormated = formattedStrings[1].title
    let separatorIndex = musicArtistNotFormated.indexOf(String.fromCharCode(8226)) //•
    let musicArtist = musicArtistNotFormated.substring(0, separatorIndex).trim()

    document.title = musicArtist + " - " + musicName
  }
}

setInterval(changer, 1000)
