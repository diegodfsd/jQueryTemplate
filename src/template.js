//<!--

(function ($) {
    $.extend({
        template: (function () {

            var templates = [];
            var matches = /\#\{([\w-_\.]+)\}/g;

            var read = function (data, p) {
                pos = p.indexOf('.');
                if (pos != -1) {
                    v = data[p.substring(0, pos)];
                    return read(v, p.substring(pos + 1));
                }
                return data[p];
            }

            var t = function () { };

            t.add = function (key, template) {
                templates[key] = template;
            }

            t.render = function (key, data) {
                data = data || {};
                model = templates[key];

                return model.replace(matches, function (str, m) {
                    return read(data, m);
                });
            }
            return t;
        })()
    })
})(jQuery);
        
//-->