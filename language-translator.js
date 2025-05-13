document.addEventListener('DOMContentLoaded', function() {
    const englishdata = document.getElementById('englishdata');
    const translatebtn = document.getElementById('translatebtn');

    englishdata.addEventListener('input', function() {
        let words = englishdata.value.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        englishdata.value = words.join(' ');
    });

    let translate = async() => {
        if(!englishdata){
            alert('fill english box')
        } else {
                    try{
            let language = document.getElementById('language');
            let url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${language.value}&dt=t&q=${englishdata.value}`;
            let res = await fetch(url);
            let data = await res.json();
            if (!res.ok) {
                throw new Error('Network response was not ok');
                alert('error to translate')
            }
            let translateddata = data[0][0][0];
            let hindidata = document.getElementById('hindidata');
            hindidata.value = translateddata;
        } catch(err) {
            console.log('Sorry Disable To Get The Data');
        }
        }
    }

    translatebtn.addEventListener('click', translate);

    document.getElementById('copy').addEventListener('click', () => {
        let hindidata = document.getElementById('hindidata');
        hindidata.select();
        document.execCommand('copy');
        alert('Copied');
        document.contentType = 'text/plain';
    });
});
