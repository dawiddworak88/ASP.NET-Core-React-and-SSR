# ASP.NET Core, React with SSR and Storybook &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dawiddworak88/ASP.NET-Core-React-and-SSR/blob/master/LICENSE.md) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Spin up your next project using this ASP.NET Core, React with Server-Side Rendering and Storybook boilerplate.

* **.NET 6.0.8** .NET 6.0.8 to develop backend-code with C#
* **React 18.2.0 with Server-Side Rendering:** to develop frontend-code with JavaScript. The boilerplate supports Server-Side Rendering
* **Storybook 6.5.10:** to show clients prototypes of your pages quickly

## Installation

### Prerequisites

* **[.NET](https://dotnet.microsoft.com/en-us/download):** download and install the latest version
* **[Node.js](https://nodejs.org/en/download/):** download and install the latest LTS version
* **[Docker](http://hub.docker.com/):** to run ASP.NET Core web app, Node for SSR and Storybook in containers. Download and install the latest version

### Nice to have prerequisites

* **[Visual Studio Code](https://code.visualstudio.com/download):** IDE to develop frontend code
* **[Visual Studio 2022 Community](https://visualstudio.microsoft.com/pl/vs/):** IDE to develop backend code

### Quickstart

1. Clone this repository

2. Execute the following commands from the /fe folder to build fe:

    npm install

    npm run build-fe

3. Open the project from the be folder in Visual Studio 2022, set the docker-compose project as the startup project and hit F5

**The ASP.NET Core web application will be available at http://localhost:5000**

**The Storybook will be available at http://localhost:8091**

## How to develop new components and pages

To efficiently develop new components and pages, stop docker containers and start storybook and node server (for SSR) on your local machine. Remember to change SSR Node endpoint (ServerSideRenderingEndpoint) in appsettings.json and appsettings.Development.json under /be/src/Project/AspNetCore to http://localhost:3000

1. Install npm packages from the /fe directory:

    npm install

2. Start Storybook:

    npm run storybook

3. Develop your React components and pages at /fe/src, reference them as shown in an example story at /fe/src/stories and preview your stories at http://localhost:9009

4. Enable server-side rendering by adding your components and pages at /fe/server/middleware/renderer.js exactly as it has been done for HomePage and start the node server: from the /fe folder:

    node server/bootstrap.js

5. You want to integrate your work into ASP.NET Core web application. To achieve this add your new page to /fe/webpack.config.js as shown in an example homepage component. To bundle, minify and copy the css and js assets to ASP.NET Core wwwroot execute:

    npm run build-fe

6. Please reference the generated assets as shown in an example Index.cshtml at /be/src/Project/AspNetCore/Views

7. Start Debugging (F5) or Start Without Debugging (Ctrl+F5) to see your pages live

## Troubleshooting

1. In case you experience a problem with webpack (especially on Windows), install it globally with the following command (yes, I know it's not recommended):

    npm install --global webpack

2. SocketException: No connection could be made because the target machine actively refused it:

Please make sure that your node server is up and running. Check if your ServerSideRenderingEndpoint in appsettings.json and appsettings.Development.json point to http://localhost:3000 (for local node server) or http://react-ssr-web:3000 (for Docker node server).

3. window is not defined or global is not defined:

There is a good chance your window or global variables are undefined when doing SSR. Please have a look at [Stack Overflow](https://stackoverflow.com/questions/38951721/react-js-server-side-issue-window-not-found) to find ways to fix your code.

## Disclaimer

The boilerplate has been based on the [CRA (Create React App)](https://github.com/facebook/create-react-app), [Create React App preset for Storybook](https://github.com/storybookjs/presets/tree/master/packages/preset-create-react-app) and standard ASP.NET Core MVC template.

## Documentation

You will learn more about this boilerplate [on the website](https://spincoding.com/asp-net-core-react-with-ssr-and-storybook/).

## Contributing

Found a serious bug? Your pull request is very welcome :)

## Support

To get support regarding ASP.NET Core, React and Server-Side Rendering, [contact me directly](https://spincoding.com/contact/).

### License

This boilerplate is [MIT licensed](./LICENSE.md).