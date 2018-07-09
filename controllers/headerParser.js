exports.renderHomePage = (req, res) => {
    res.render('index', {title: 'Request Header Parser'});
};

exports.parseHeader = (req, res) => {
    //gets the remote IP address of the request.
    const ipaddress = req.ip;
    //gets the first accepted language of the specified languages, based on the request’s Accept-Language field
    const language = req.acceptsLanguages();
    const software = {
        os: req.useragent.os,
        platform: req.useragent.platform,
        browser: req.useragent.browser,
        browserVersion: req.useragent.version
    };
    const data  = {
        ipaddress,
        language: language[0],
        software
    };
    res.json(data);
};