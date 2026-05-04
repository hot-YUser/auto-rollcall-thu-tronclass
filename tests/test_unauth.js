async function test() {
    const response = await fetch('https://ilearn.thu.edu.tw/api/radar/rollcalls?api_version=1.1.0');
    console.log(response.status, await response.text());
}

test().catch(console.error);
