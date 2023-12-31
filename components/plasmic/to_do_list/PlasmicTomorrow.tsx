// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: p9CtFVE2uTezdY5ZU4rdWN
// Component: r2B0lUmWOL

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_to_do_list.module.css"; // plasmic-import: p9CtFVE2uTezdY5ZU4rdWN/projectcss
import sty from "./PlasmicTomorrow.module.css"; // plasmic-import: r2B0lUmWOL/css

createPlasmicElementProxy;

export type PlasmicTomorrow__VariantMembers = {};
export type PlasmicTomorrow__VariantsArgs = {};
type VariantPropType = keyof PlasmicTomorrow__VariantsArgs;
export const PlasmicTomorrow__VariantProps = new Array<VariantPropType>();

export type PlasmicTomorrow__ArgsType = {};
type ArgPropType = keyof PlasmicTomorrow__ArgsType;
export const PlasmicTomorrow__ArgProps = new Array<ArgPropType>();

export type PlasmicTomorrow__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  ol?: p.Flex<"ol">;
};

export interface DefaultTomorrowProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTomorrow__RenderFunc(props: {
  variants: PlasmicTomorrow__VariantsArgs;
  args: PlasmicTomorrow__ArgsType;
  overrides: PlasmicTomorrow__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"To do List:"}
            </h1>
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <ol
                    data-plasmic-name={"ol"}
                    data-plasmic-override={overrides.ol}
                    className={classNames(
                      projectcss.all,
                      projectcss.ol,
                      sty.ol
                    )}
                  >
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__jAuEx
                      )}
                    >
                      {"Grocery store list"}
                    </li>
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__i1Aot
                      )}
                    >
                      {"Grocery trip"}
                    </li>
                  </ol>
                }
                <React.Fragment>{""}</React.Fragment>
              </React.Fragment>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "h1", "text", "ol"],
  section: ["section", "h1", "text", "ol"],
  h1: ["h1"],
  text: ["text", "ol"],
  ol: ["ol"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  h1: "h1";
  text: "div";
  ol: "ol";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTomorrow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTomorrow__VariantsArgs;
    args?: PlasmicTomorrow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTomorrow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTomorrow__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTomorrow__ArgProps,
          internalVariantPropNames: PlasmicTomorrow__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTomorrow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTomorrow";
  } else {
    func.displayName = `PlasmicTomorrow.${nodeName}`;
  }
  return func;
}

export const PlasmicTomorrow = Object.assign(
  // Top-level PlasmicTomorrow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    ol: makeNodeComponent("ol"),

    // Metadata about props expected for PlasmicTomorrow
    internalVariantProps: PlasmicTomorrow__VariantProps,
    internalArgProps: PlasmicTomorrow__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTomorrow;
/* prettier-ignore-end */
