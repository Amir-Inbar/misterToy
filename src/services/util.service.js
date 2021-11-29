export const utilService = {
    makeId,
    getRandomInt,
    uploadImg
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i=0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

    async function uploadImg(ev){
    const UPLOAD_PRESET = 'swe6o5qs'//insert yours
    const CLOUD_NAME = 'cloudproj'//insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', ev.target.files[0])
    FORM_DATA.append('upload_preset',UPLOAD_PRESET)
    return fetch(UPLOAD_URL, {
        method: 'POST',
        body: FORM_DATA
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.error(err))

}