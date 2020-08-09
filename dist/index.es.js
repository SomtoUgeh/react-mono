import { useState, useEffect, createElement } from 'react';

var loadedScripts = {};
var src = 'https://connect.withmono.com/connect.js';
function useMonoScript() {
    var _a = useState({
        loaded: false,
        error: false,
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        if (loadedScripts.hasOwnProperty(src)) {
            setState({
                loaded: true,
                error: false,
            });
        }
        else {
            loadedScripts.src = src;
            var script_1 = document.createElement('script');
            script_1.src = src;
            script_1.async = true;
            var onScriptLoad_1 = function () {
                setState({
                    loaded: true,
                    error: false,
                });
            };
            var onScriptError_1 = function () {
                delete loadedScripts.src;
                setState({
                    loaded: true,
                    error: true,
                });
            };
            script_1.addEventListener('load', onScriptLoad_1);
            script_1.addEventListener('complete', onScriptLoad_1);
            script_1.addEventListener('error', onScriptError_1);
            document.body.appendChild(script_1);
            return function () {
                script_1.removeEventListener('load', onScriptLoad_1);
                script_1.removeEventListener('error', onScriptError_1);
            };
        }
    }, []);
    return [state.loaded, state.error];
}

/**
 *
 * @param config takes in configuration for mono
 * @returns handleMono function
 */
function useMono(_a) {
    var public_key = _a.public_key;
    var _b = useMonoScript(), loaded = _b[0], error = _b[1];
    useEffect(function () {
        if (error) {
            throw new Error('Unable to load mono collection modal');
        }
    }, [error]);
    /**
     *
     * @param object - {onSuccess, onClose}
     */
    function handleMono(_a) {
        var onSuccess = _a.onSuccess, onClose = _a.onClose;
        if (error) {
            throw new Error('Unable to load mono collection modal');
        }
        if (loaded) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            var connect = new window.Connect(public_key, {
                onSuccess: onSuccess,
                onClose: onClose,
            });
            connect.setup();
            connect.open();
        }
    }
    return handleMono;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var MonoButton = function (_a) {
    var text = _a.text, className = _a.className, children = _a.children, _b = _a.onSuccess, onSuccess = _b === void 0 ? function () { return null; } : _b, _c = _a.onClose, onClose = _c === void 0 ? function () { return null; } : _c, disabled = _a.disabled, config = __rest(_a, ["text", "className", "children", "onSuccess", "onClose", "disabled"]);
    var handleMono = useMono({ public_key: config.public_key });
    return (createElement("button", { disabled: disabled, className: className, onClick: function () { return handleMono({ onSuccess: onSuccess, onClose: onClose }); } }, text || children));
};

export { MonoButton, useMono };
