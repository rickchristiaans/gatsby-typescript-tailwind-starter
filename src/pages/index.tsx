import { ReactElement } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

function IndexPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-4xl font-bold font-sans mb-6">Hi people</h1>
      <p className="mb-6">
        Welcome to your new Gatsby site with Typescript & Tailwind CSS.
      </p>
      <p className="mb-6">Now go build something great.</p>
      <div className="max-w-xs mb-6">
        <Image />
      </div>
      <Link className="text-purple-600 underline hover:text-purple-800 active:text-purple-800" to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export default IndexPage;
