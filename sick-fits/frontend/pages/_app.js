import Page from "../components/Page";

export default function MyApp({ Component, pagePrors }) {
  return (
    <Page>
      <Component {...pagePrors} />
    </Page>
  );
}
