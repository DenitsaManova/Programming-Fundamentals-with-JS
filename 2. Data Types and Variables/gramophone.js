function gramophone (band, album, song){
    //(albumName.length * bandName.length) * song-name.length / 2
    let time = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotations} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')