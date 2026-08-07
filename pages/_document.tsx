import Document, { Head, Html, Main, NextScript, type DocumentContext } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    let bodyClass = "enterprise-theme";
    const original = ctx.renderPage;
    ctx.renderPage = () => original({
      enhanceApp: (App: any) => (props: any) => {
        bodyClass = props.Component?.bodyClass || bodyClass;
        return <App {...props} />;
      },
    });
    const initial = await Document.getInitialProps(ctx);
    return { ...initial, bodyClass } as any;
  }

  render() {
    const bodyClass = (this.props as any).bodyClass || "enterprise-theme";
    return <Html lang="en"><Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      <meta name="theme-color" content="#020a18"/>
      <link rel="icon" href="/favicon.ico" sizes="any"/>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <link rel="stylesheet" href="/assets/css/master.css?v=54"/>
      <link rel="stylesheet" href="/assets/css/responsive-v49.css?v=54"/>
      <link rel="stylesheet" href="/assets/css/motion-v50.css?v=54"/>
      <link rel="stylesheet" href="/assets/css/premium-v51.css?v=54"/>
      <link rel="stylesheet" href="/assets/css/next-react-v52.css?v=54"/>
      <link rel="stylesheet" href="/assets/css/experience-v54.css?v=54"/>
    </Head><body className={bodyClass}><Main/><NextScript/></body></Html>;
  }
}
