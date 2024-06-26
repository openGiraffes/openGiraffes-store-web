addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request).catch((err) => {
        return new Response(err.message)
    }))
})

const html = `
  <html><head></head><body>
  <input type="url" placeholder="url" id="url" style="width: 80%; display: block;">
  <input type="submit" id="submit" value="submit"/>
  <div id="res"></div>
  <a id="a" href=""></a>
  <div>Note: This tool is only for direct URL links</div>
  <script>
  document.getElementById('submit').onclick=function(){
      let url  = document.getElementById('url').value;
      console.log('url: '+url);
      let a = document.getElementById('a');
      let div = document.getElementById('res');
      if(!url || !url.startsWith('http')){
          div.textContent="Link is illegal: "+url;
          a.style="display:none";
      }else{
          div.textContent="";
          let res = (new URL(window.location.href)).origin+'?url='+encodeURIComponent(url);
          a.textContent=res;
          a.href=res;
          a.style="";
      }
  }
  </script>
  </body></html>`;

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {

    if (request.method === 'OPTIONS' && request.headers.has('access-control-request-headers')) {
        return new Response(null, {
            status: 204,
            headers: new Headers({
                'access-control-allow-origin': '*',
                'access-control-allow-methods': 'GET,POST,PUT,PATCH,TRACE,DELETE,HEAD,OPTIONS',
                'access-control-allow-headers': request.headers.get('access-control-request-headers'),
                'access-control-max-age': '1728000'
            }),
        })
    }
    let req_url = new URL(request.url);
    if (req_url.pathname.startsWith('/ajax/')) { //ajax
        let url = req_url.pathname.slice(6).replace(/^(https?):\/+/, '$1://');
        if (!url) return new Response("Only For Ajax");
        let res = await fetch(url, {
            method: request.method,
            headers: request.headers,
            body: request.body
        });
        let h = new Headers(res.headers);
        h.set('access-control-allow-origin', '*');
        h.set('access-control-expose-headers', '*');
        return new Response(res.body, {
            status: res.status,
            headers: h
        });
    } else if (req_url.pathname === '/') { //download
        let url = req_url.searchParams.get('url');
        if (!url) return new Response(html, {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
        let res;
        let type;
        if (request.headers.get('Range')) {
            res = await fetch(url, {
                headers: {
                    'Range': request.headers.get('Range')
                }
            });
        } else {
            res = await fetch(url, {
                method: request.method,
                headers: request.headers,
                body: request.body
            });
        }
        let h = new Headers(res.headers);
        h.set('set-cookie', '');
        h.set('access-control-allow-origin', '*');
        h.set('access-control-expose-headers', '*');
        return new Response(res.body, {
            status: res.status,
            headers: h,
        })
    } else if (req_url.pathname === '/manifest') {
        let url = req_url.searchParams.get('url');
        if (!url) return new Response(html, {
            status: 200,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
        let res = await fetch(url, {
            method: request.method,
            headers: request.headers,
            body: request.body
        });
        return new Response(JSON.stringify(await res.json()), {
            status: 200,
            headers: {
                'Content-Type': 'application/x-web-app-manifest+json',
                'access-control-allow-origin': '*',
                'access-control-expose-headers': '*',
            },
        })
    } else {
        return new Response("400 --", {
            status: 400,
            headers: {
                'Content-Type': 'text/html; charset=utf-8'
            }
        });
    }
}


String.prototype.format = function () {
    let s = this;
    for (let i = 0; i < arguments.length; i++) {
        const reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i]);
    }
    return s;
};
