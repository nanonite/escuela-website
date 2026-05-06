import { useEffect, useRef } from "react";
import Head from "next/head";

export default function Home() {
  const elenaRef = useRef(null);

  useEffect(() => {
    async function init() {
      const { Elena, html } = await import("@elenajs/core");

      class ElenaDemo extends Elena(HTMLElement) {
        static tagName = "elena-demo";
        static props = ["name"];
        static shadow = "open";

        render() {
          return html`
            <style>
              :host {
                display: block;
                padding: 2rem;
                border-radius: 12px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                text-align: center;
                font-family: system-ui, sans-serif;
              }
              h2 { margin: 0 0 0.5rem; font-size: 1.5rem; }
              p { margin: 0; opacity: 0.9; font-size: 1rem; }
            </style>
            <h2>Hello, ${this.name}!</h2>
            <p>Rendered by Elena Web Components</p>
          `;
        }
      }

      ElenaDemo.define();
      if (elenaRef.current && !elenaRef.current.querySelector("elena-demo")) {
        const el = document.createElement("elena-demo");
        el.setAttribute("name", "Escuela Brahmavidya");
        elenaRef.current.appendChild(el);
      }
    }
    init();
  }, []);

  return (
    <>
      <Head>
        <title>Escuela Brahmavidya</title>
        <meta name="description" content="Escuela Brahmavidya - Next.js + Elena Web Components" />
      </Head>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Escuela Brahmavidya</h1>
          <p style={styles.subtitle}>
            Built with Next.js &amp; Elena Progressive Web Components
          </p>
        </header>

        <div ref={elenaRef} style={styles.demoSection} />

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Getting Started</h2>
          <p style={styles.sectionText}>
            Edit <code style={styles.code}>pages/index.js</code> to get started.
          </p>
        </section>

        <footer style={styles.footer}>
          <p>Escuela Brahmavidya &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "2rem",
  },
  header: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#1a1a2e",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#6c757d",
  },
  demoSection: {
    width: "100%",
    maxWidth: "400px",
    marginBottom: "3rem",
  },
  section: {
    maxWidth: "600px",
    textAlign: "center",
    marginBottom: "2rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
    color: "#1a1a2e",
  },
  sectionText: {
    fontSize: "1rem",
    color: "#495057",
    lineHeight: 1.6,
  },
  code: {
    background: "#e9ecef",
    padding: "0.2rem 0.4rem",
    borderRadius: "4px",
    fontSize: "0.9rem",
    fontFamily: "monospace",
  },
  footer: {
    marginTop: "auto",
    color: "#6c757d",
    fontSize: "0.875rem",
  },
};
