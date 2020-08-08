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

```react
import React from "react";
import { MonoButton, useMono } from "react-mono-js";

export default function App() {
  const config = {
    public_key: "YOUR_CONNECT_PUBLIC_KEY",
    onClose: () => {},
    onSuccess: response => {
      console.log(response.code);

      /**
        response : { "code": "code_xyz" }
        you can send this code back to your server to get this
        authenticated account and start making requests.
      */
    }
  };

  const handleMono = useMono(config);

  return (
    <div className="App">
      <h1>React Wrapper for Mono enrollments</h1>
      <h2>Check it out!</h2>

      <button
        onClick={() =>
          handleMono({
            onClose: () => null,
            onSuccess: response => {
              console.log(response.code);
            }
          })
        }
      >
        Connect bank with Mono
      </button>

      <MonoButton {...config} text="Connect bank with Mono!" />
    </div>
  );
}
</script>
```

Please checkout
[Mono Documentation](https://www.notion.so/Documentation-3cda635f4aa54e9bb6947ab60305db92)
for more explanation

Follow on Twitter [@somtougeh](https://twitter.com/SomtoUgeh)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE)
file for details
