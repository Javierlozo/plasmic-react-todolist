import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { HelloWorld } from "./src/components/HelloWorld";
import { Collapsible } from "./src/components/Collapsible";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "p9CtFVE2uTezdY5ZU4rdWN",
      token: "bLkeFeaYKtCHBkmR0YSSgx7epuVOR1yfG6V1Aa3XwN32gcW18xXtwnaHf06gy8pSgkYoHwFpT0mHOWzT2l6w",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

PLASMIC.registerComponent(HelloWorld, {
  name: 'HelloWorld',
  props: {
    verbose: 'boolean',
    children: 'slot'
  }
});

PLASMIC.registerComponent(Collapsible, {
  name: 'Collapsible',
  props: {
    header: 'slot',
    children: 'slot'
  }
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
