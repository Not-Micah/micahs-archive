import React from 'react';

const ClaudeCodePlaybook: React.FC = () => {
  return (
    <div className="content-container">
      <div className="tag-component">
        Developer Tools
      </div>
      
      <h1 className="main-heading">Claude Code Playbook</h1>
      
      <section className="content-section">
        <h2 className="section-heading">Quick Start</h2>
        
        <div className="content-block">
          <h3 className="block-heading">Setting up a new app</h3>
          <pre className="code-snippet">
            <code>{`npx create-next-app@latest`}</code>
          </pre>
          <pre className="code-snippet">
            <code>{`git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin {repo-url}
git push -u origin main`}</code>
          </pre>
        </div>

        <div className="content-block">
          <h3 className="block-heading">Running Claude Code</h3>
          <pre className="code-snippet">
            <code>claude --dangerously-skip-permissions</code>
          </pre>
        </div>
      </section>

      <section className="content-section">
        <h2 className="section-heading">System Prompt Management</h2>
        
        <div className="content-block">
          <h3 className="block-heading">
            <a href="/claude_code/sys_prompt.json" download className="download-link">
              Save My System Prompt
            </a>
          </h3>

          <pre className="code-snippet">
            <code># apply sys_prompt.json for each generation!</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default ClaudeCodePlaybook;