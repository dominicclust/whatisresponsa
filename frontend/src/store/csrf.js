import Cookies from 'js-cookie';

export async function csrfFetch(url, options = {}) {
    //set method to 'GET' if not already in fetch call.
    options.method = options.method || 'GET';
    //set headers to empty object if there are none listed.
    options.headers = options.headers || {};
    //if method !== 'GET' then we need a header for
    //content-type: 'application/json' and XSRF-TOKEN:
    // '<<insert xsrftoken value here from cookie>>'
    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN')
    }
    const res = await window.fetch(url, options);

    if (res.status >= 400) throw res;

    return res;
}

export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}
