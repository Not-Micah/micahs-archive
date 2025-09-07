import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="content-container">
      <div className="tag-component">
        Micah&apos;s Archive
      </div>
      
      <h1 className="main-heading">Developer Tools</h1>
      
      <p className="directory-description">
        Access documentation and reference materials for development tools.
      </p>
      
      <section className="content-section">
        <div className="directory-grid">
          <Link href="/claude_code" className="directory-card">
            <div className="card-content">
              <h3 className="card-title">Claude Code Playbook</h3>
              <p className="card-description">
                Quick start guide and system prompt management for Claude Code development
              </p>
              <div className="card-tag">Developer Tools</div>
            </div>
          </Link>
          
          <Link href="/git_commands" className="directory-card">
            <div className="card-content">
              <h3 className="card-title">Git Commands Reference</h3>
              <p className="card-description">
                Comprehensive reference for Git version control commands and workflows
              </p>
              <div className="card-tag">Git Tools</div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home