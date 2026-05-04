function getCredentials() {
    const user = (process.env.TRON_USER || '').trim();
    const pass = (process.env.TRON_PASS || '').trim();
    if (!user || !pass) {
        throw new Error('Please set TRON_USER and TRON_PASS before running this manual test.');
    }
    return { user, pass };
}

async function testLogin() {
    const { user, pass } = getCredentials();

    console.log('Fetching login page...');
    const loginUrl = 'https://tcidentity.thu.edu.tw/auth/realms/thu/protocol/cas/login?ui_locales=zh-TW&service=https%3A//ilearn.thu.edu.tw/login&locale=zh_TW';

    const res1 = await fetch(loginUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });

    const html = await res1.text();
    const match = html.match(/<form class="form-horizontal"[^>]*action="([^"]+)"/);
    if (!match) {
        console.log('Action not found!');
        return;
    }

    const actionUrl = match[1].replace(/&amp;/g, '&');
    const cookiesToSet = [...res1.headers.entries()]
        .filter(([key]) => key.toLowerCase() === 'set-cookie')
        .map(([, value]) => value.split(';')[0])
        .join('; ');

    const params = new URLSearchParams();
    params.append('username', user);
    params.append('password', pass);

    const res2 = await fetch(actionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Cookie': cookiesToSet
        },
        body: params.toString(),
        redirect: 'follow'
    });

    console.log('Status:', res2.status);
    console.log('Final URL:', res2.url);

    const body2 = await res2.text();
    console.log('Body length:', body2.length);
    console.log('Contains error:', body2.toLowerCase().includes('error'));
    console.log('Contains invalid:', res2.url.toLowerCase().includes('invalid'));
}

testLogin().catch(console.error);
