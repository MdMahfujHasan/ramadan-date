const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2ad09e5953mshaf4ecf25d8a58bfp18747fjsn93f105285c05',
        'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
    }
};

fetch('https://muslimsalat.p.rapidapi.com/dhaka.json', options)
    .then(response => response.json())
    .then(response => displaySalatTime(response))
    .catch(err => console.error(err));

const displaySalatTime = time => {
    // console.log(time);
    const { prayer_method_name, qibla_direction } = time;
    const { date_for, fajr, dhuhr, asr, maghrib, isha, shurooq } = time.items[0];
    const salahTime = document.getElementById('salah-time');
    const splitTime = date_for.split('-');
    const todaysDate = splitTime[2] + '/' + splitTime[1] + '/' + splitTime[0];

    const maghribHour = parseInt((((maghrib.split(' '))[0]).split(':'))[0]);
    // const maghribMin = parseInt((((maghrib.split(' '))[0]).split(':'))[1]);
    // console.log(maghribHour,maghribMin);

    // const nowTimeHour = parseInt(((((new Date() + '').split(' '))[4]).split(':'))[0]) - 12;
    // const nowTimeMin = parseInt(((((new Date() + '').split(' '))[4]).split(':'))[1]);
    // console.log(nowTimeHour,nowTimeMin);

    // console.log(((((new Date() + '').split(' '))[4]).split(':'))[0])

    salahTime.innerHTML = `
        <table class="flex justify-center items-center w-1/2 mx-auto">
            <tr class="bg-sky-100">
                <td>Fajr:</td>
                <td>${fajr}</td>
            </tr>
            <tr class="bg-sky-200">
                <td>Sunrise:</td>
                <td>${shurooq}</td>
            </tr>
            <tr class="bg-sky-100">
                <td>Dhuhr:</td>
                <td>${dhuhr}</td>
            </tr>
            <tr class="bg-sky-200">
                <td>Asr:</td>
                <td>${asr}</td>
            </tr>
            <tr class="bg-sky-100">
                <td>Maghrib:</td>
                <td>${maghrib}</td>
            </tr>
            <tr class="bg-sky-200">
                <td>Isha:</td>
                <td>${isha}</td>
            </tr>
        </table>
        <div class="flex flex-col justify-center items-center text-center">
            <p><small>Method: ${prayer_method_name}</small></p>
            <p><small>Qibla Direction on Compass: ${qibla_direction}&deg;</small></p>
        </div>
    `;
}