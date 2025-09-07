import React from 'react';

const GitCommandsReference: React.FC = () => {
  return (
    <div className="content-container">
      <div className="tag-component">
        Developer Tools
      </div>
      
      <h1 className="main-heading">Git Commands Reference</h1>
      
      <section className="content-section">
        <h2 className="section-heading">Initial Repository Setup</h2>
        
        <div className="content-block">
          <pre className="code-snippet">
            <code>{`git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin {repo-url}
git push -u origin main`}</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">General Use</h2>
        
        <div className="content-block">
          <h3 className="block-heading">List all branches</h3>
          <pre className="code-snippet">
            <code>git branch</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Switch to a specific branch</h3>
          <pre className="code-snippet">
            <code>git checkout 'branch_name'</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Stage all changes</h3>
          <pre className="code-snippet">
            <code>git add .</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Commit changes with message</h3>
          <pre className="code-snippet">
            <code>git commit -m "message"</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Push to current branch</h3>
          <pre className="code-snippet">
            <code>git push origin branch</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">Updating</h2>
        
        <div className="content-block">
          <h3 className="block-heading">Pull latest changes from current branch</h3>
          <pre className="code-snippet">
            <code>git pull origin branch_name</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">Creating And Using Branches</h2>
        
        <div className="content-block">
          <h3 className="block-heading">Create and switch to a new branch</h3>
          <pre className="code-snippet">
            <code>git checkout -b 'branch_name'</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default GitCommandsReference;