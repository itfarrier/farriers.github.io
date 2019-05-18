interface IData {
  allFile: { edges: Array<{ node: { childImageSharp: IChildImageSharp; id: string } }> };
  allMarkdownRemark: {
    edges: Array<{
      node: IMarkdownRemark;
    }>;
  };
  markdownRemark: IMarkdownRemark;
  site: { siteMetadata: { title: string } };
}

interface IPage {
  children: object;
  data: IData;
  pageContext?: {
    next: INextPrevious;
    previous: INextPrevious;
  };
}

interface INextPrevious {
  fields: {
    slug: string;
  };
  frontmatter: IFrontmatter;
}

interface IMarkdownRemark {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: IFrontmatter;
  html: string;
}

interface IChildImageSharp {
  fluid: object;
  id: string;
}
interface IFrontmatter {
  date: string;
  title: string;
}

interface ICSSModule {
  [className: string]: string;
}

declare module '*.css' {
  const classNames: ICSSModule;
  export = classNames;
}

interface IHTML {
  htmlAttributes: object;
  headComponents: any[];
  bodyAttributes: object;
  preBodyComponents: any[];
  body: string;
  postBodyComponents: any[];
}

export {
  ICSSModule,
  IChildImageSharp,
  IData,
  IFrontmatter,
  IHTML,
  IMarkdownRemark,
  INextPrevious,
  IPage,
};
