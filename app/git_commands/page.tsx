import React from 'react';
import Link from 'next/link';

const GitCommandsReference: React.FC = () => {
  return (
    <div className="content-container">
      <div className="back-button-container">
        <Link href="/" className="back-button">
          ← Back to Directory
        </Link>
      </div>
      
      <div className="tag-component">
        Git Tools
      </div>
      
      <h1 className="main-heading">Git Commands Reference</h1>
      
      <section className="content-section">
        <h2 className="section-heading">Initial Repository Setup</h2>
        
        <div className="content-block">
          <h3 className="block-heading">Initialize New Repository</h3>
          <pre className="code-snippet">
            <code>{`git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin repo-url
git push -u origin main`}</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Clone Existing Repository</h3>
          <pre className="code-snippet">
            <code>git clone repo-url</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">General Use</h2>
        
        <div className="content-block">
          <h3 className="block-heading">List All Branches</h3>
          <pre className="code-snippet">
            <code>git branch</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Switch To A Specific Branch</h3>
          <pre className="code-snippet">
            <code>git checkout &apos;branch_name&apos;</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Stage All Changes</h3>
          <pre className="code-snippet">
            <code>git add .</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Commit Changes With Message</h3>
          <pre className="code-snippet">
            <code>git commit -m &quot;message&quot;</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Push To Current Branch</h3>
          <pre className="code-snippet">
            <code>git push origin branch</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">Updating</h2>
        
        <div className="content-block">
          <h3 className="block-heading">Pull Latest Changes From Current Branch</h3>
          <pre className="code-snippet">
            <code>git pull origin branch_name</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">Creating And Using Branches</h2>
        
        <div className="content-block">
          <h3 className="block-heading">Create And Switch To A New Branch</h3>
          <pre className="code-snippet">
            <code>git checkout -b &apos;branch_name&apos;</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default GitCommandsReference;