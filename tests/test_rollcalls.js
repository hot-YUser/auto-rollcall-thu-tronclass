function getCredentials() {
    const user = (process.env.TRON_USER || '').trim();
    const pass = (process.env.TRON_PASS || '').trim();
    if (!user || !pass) {
        throw new Error('Please set TRON_USER and TRON_PASS before running this manual test.');
    }
    return { user, pass };
}

async function checkRollcalls() {
    const { user, pass } = getCredentials();
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

    let res = await fetch('https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login?ui_locales=zh-TW&service=https%3A//ilearn.thu.edu.tw/login&locale=zh_TW', {
        headers: { 'User-Agent': ua }
    });
    let html = await res.text();

    const match = html.match(/<form class="form-horizontal"[^>]*action="([^"]+)"/);
    if (!match) {
        console.log('Action not found!');
        return;
    }

    const actionUrl = match[1].replace(/&amp;/g, '&');
    const cookies1 = [...res.headers.entries()]
        .filter(([key]) => key.toLowerCase() === 'set-cookie')
        .map(([, value]) => value.split(';')[0])
        .join('; ');

    const params = new URLSearchParams();
    params.append('username', user);
    params.append('password', pass);

    res = await fetch(actionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': ua,
            'Cookie': cookies1
        },
        body: params.toString(),
        redirect: 'manual'
    });

    const location = res.headers.get('location');
    console.log('Location:', location);

    res = await fetch(location, {
        headers: { 'User-Agent': ua },
        redirect: 'manual'
    });

    const finalCookies = [...res.headers.entries()]
        .filter(([key]) => key.toLowerCase() === 'set-cookie')
        .map(([, value]) => value.split(';')[0])
        .join('; ');

    console.log('Final Cookies:', finalCookies);

    res = await fetch('https://ilearn.thu.edu.tw/api/radar/rollcalls?api_version=1.1.0', {
        headers: {
            'User-Agent': ua,
            'Cookie': finalCookies
        }
    });

    console.log('Rollcalls Status:', res.status);
    const data = await res.json();
    console.log('Rollcalls Data:', JSON.stringify(data, null, 2));

    res = await fetch('https://ilearn.thu.edu.tw/api/user/recently-visited-courses', {
        headers: {
            'User-Agent': ua,
            'Cookie': finalCookies
        }
    });
    console.log('Courses Status:', res.status);
}

checkRollcalls().catch(console.error);
