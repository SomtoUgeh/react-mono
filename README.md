# Mono for React

> This is a React Package that helps you integrate Mono - https://withmono.com/
> easily

## Install

### React

Install the npm package:

```bash
npm install --save react-mono-js
# or
yarn add react-mono-js
```

## Usage

```javascript
import React from 'react';
import { MonoButton, useMono } from 'react-mono-js';

export default function App() {
  const config = {
    public_key: 'YOUR_CONNECT_PUBLIC_KEY',
    onClose: () => {},
    onSuccess: (response) => {
      console.log(response.code);

      /**
        response : { "code": "code_xyz" }
        you can send this code back to your server to get this
        authenticated account and start making requests.
      */
    },
  };

  const handleMono = useMono({ public_key: 'YOUR_CONNECT_PUBLIC_KEY' });

  return (
    <div className="App">
      <h1>React Wrapper for Mono enrollments</h1>
      <h2>Check it out!</h2>

      <button
        onClick={() =>
          handleMono({
            onClose: () => null,
            onSuccess: (response) => {
              console.log(response.code);
            },
          })
        }
      >
        Connect bank with Mono
      </button>

      <MonoButton {...config} text="Connect bank with Mono!" />
    </div>
  );
}
```

<iframe
  src="https://codesandbox.io/embed/blissful-leaf-5fqtc?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="blissful-leaf-5fqtc"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Please checkout
[Mono Documentation](https://www.notion.so/Documentation-3cda635f4aa54e9bb6947ab60305db92)
for more explanation

Follow on Twitter [@somtougeh](https://twitter.com/SomtoUgeh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
file for details
