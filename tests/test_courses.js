function getCredentials() {
    const user = (process.env.TRON_USER || '').trim();
    const pass = (process.env.TRON_PASS || '').trim();
    if (!user || !pass) {
        throw new Error('Please set TRON_USER and TRON_PASS before running this manual test.');
    }
    return { user, pass };
}

async function checkCourses() {
    const { user, pass } = getCredentials();
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

    let res = await fetch('https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login?ui_locales=zh-TW&service=https%3A//ilearn.thu.edu.tw/login&locale=zh_TW', {
        headers: { 'User-Agent': ua }
    });
    let html = await res.text();
    const actionUrl = html.match(/<form class="form-horizontal"[^>]*action="([^"]+)"/)[1].replace(/&amp;/g, '&');
    const cookies1 = [...res.headers.entries()].filter(([key]) => key.toLowerCase() === 'set-cookie').map(([, value]) => value.split(';')[0]).join('; ');

    const params = new URLSearchParams({ username: user, password: pass });
    res = await fetch(actionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': ua, 'Cookie': cookies1 },
        body: params.toString(),
        redirect: 'manual'
    });

    res = await fetch(res.headers.get('location'), { headers: { 'User-Agent': ua }, redirect: 'manual' });
    const finalCookies = [...res.headers.entries()].filter(([key]) => key.toLowerCase() === 'set-cookie').map(([, value]) => value.split(';')[0]).join('; ');

    res = await fetch('https://ilearn.thu.edu.tw/api/my-courses?page=1&page_size=10', {
        headers: { 'User-Agent': ua, 'Cookie': finalCookies }
    });
    console.log('Courses API:', await res.text());
}

checkCourses().catch(console.error);
