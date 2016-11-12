/* eslint-disable */

const cookieServer = {
  getServer(string, name) {
    const re = new RegExp(['(?:^|; )',
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1'),
      '=([^;]*)'
    ].join(''));

    const matches = string.match(re);

    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
};

/* eslint-enable */

export default cookieServer;
