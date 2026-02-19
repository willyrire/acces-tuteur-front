export const MD_PREVIEW_STYLE = `
  .md-preview h1 { font-size: 2.25rem; font-weight: 800; margin: 1rem 0; line-height: 1.2; }
  .md-preview h2 { font-size: 1.875rem; font-weight: 800; margin: .9rem 0; line-height: 1.25; }
  .md-preview h3 { font-size: 1.5rem; font-weight: 700; margin: .8rem 0; }
  .md-preview h4 { font-size: 1.25rem; font-weight: 700; margin: .7rem 0; }
  .md-preview h5 { font-size: 1.1rem; font-weight: 700; margin: .6rem 0; }
  .md-preview h6 { font-size: 1rem; font-weight: 700; margin: .5rem 0; }

  .md-preview p { margin: .75rem 0; line-height: 1.75; }
  .md-preview hr { margin: 1.25rem 0; opacity: .35; }

  .md-preview h1,
.md-preview h2 {
  padding-bottom: .35rem;
  border-bottom: 1px solid rgba(0,0,0,.18);
}
  .md-preview ul { list-style: disc !important; padding-left: 1.5rem; margin: .75rem 0; }
  .md-preview ol { list-style: decimal !important; padding-left: 1.5rem; margin: .75rem 0; }
  .md-preview li { margin: .25rem 0; }
  .md-preview ul ul, .md-preview ol ol, .md-preview ul ol, .md-preview ol ul { margin: .25rem 0; }

  .md-preview blockquote {
    border-left: 3px solid rgba(255,255,255,.2);
    padding-left: .9rem;
    margin: .9rem 0;
    opacity: .95;
  }

  .md-preview a { text-decoration: underline; }
  .md-preview a:hover { opacity: .9; }

  .md-preview pre {
    padding: .85rem;
    border-radius: .85rem;
    overflow: auto;
    border: 1px solid rgba(255,255,255,.12);
    margin: .9rem 0;
  }

  .md-preview code {
    padding: .12rem .35rem;
    border-radius: .4rem;
    border: 1px solid rgba(255,255,255,.12);
  }

  .md-preview pre code {
    padding: 0;
    border: none;
  }

  .md-preview table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
  .md-preview th, .md-preview td { border: 1px solid rgba(255,255,255,.12); padding: .55rem; }
  .md-preview th { font-weight: 700; }

  /* Diff */
  .md-preview ins {
    text-decoration: none;
    padding: 0 .15rem;
    border-radius: .25rem;
  }
  .md-preview del {
    padding: 0 .15rem;
    border-radius: .25rem;
  }
    /* Diff (très visible) */
.md-preview ins,
.md-preview del {
  display: block;                 /* important si ça wrap des <h1>, <p>, <ul>... */
  padding: .35rem .5rem;
  margin: .25rem 0;
  border-radius: .5rem;
}

/* Ajouts */
.md-preview ins {
  background: rgba(34, 197, 94, 0.20);
  border: 1px solid rgba(34, 197, 94, 0.55);
}

/* Suppressions */
.md-preview del {
  background: rgba(239, 68, 68, 0.20);
  border: 1px solid rgba(239, 68, 68, 0.55);
  text-decoration: line-through;
}

/* Optionnel: rendre les éléments internes plus “smooth” */
.md-preview ins > *:first-child,
.md-preview del > *:first-child { margin-top: 0; }
.md-preview ins > *:last-child,
.md-preview del > *:last-child { margin-bottom: 0; }

/* Markdown del normal */
.md-preview del {
  background: none;
  border: none;
  padding: 0;
  border-radius: 0;
  text-decoration: line-through;
}

/* Diff del/ins (top-level) */
.md-preview.diff-mode > del {
  background: rgba(239, 68, 68, 0.20);
  border: 1px solid rgba(239, 68, 68, 0.55);
  padding: .35rem .5rem;
  margin: .25rem 0;
  border-radius: .5rem;
}

.md-preview.diff-mode > ins {
  background: rgba(34, 197, 94, 0.20);
  border: 1px solid rgba(34, 197, 94, 0.55);
  padding: .35rem .5rem;
  margin: .25rem 0;
  border-radius: .5rem;
}
  /* Align helpers */
  .md-preview .md-align { width: 100%; }
  .md-preview .md-align-left { text-align: left !important; }
  .md-preview .md-align-center { text-align: center !important; }
  .md-preview .md-align-right { text-align: right !important; }
  .md-preview .md-align-justify { text-align: justify !important; }
  .md-preview hr {
    border: 0;
    height: 2px;
    opacity: 1;
    background: rgba(0,0,0,.25);
    margin: 1.75rem 0;
    border-radius: 999px;
  }
 /* Padding helpers (py) */
  .md-preview .md-py-0  { padding-top: 0 !important;    padding-bottom: 0 !important; }
  .md-preview .md-py-1  { padding-top: .25rem !important; padding-bottom: .25rem !important; }
  .md-preview .md-py-2  { padding-top: .5rem !important;  padding-bottom: .5rem !important; }
  .md-preview .md-py-3  { padding-top: .75rem !important; padding-bottom: .75rem !important; }
  .md-preview .md-py-4  { padding-top: 1rem !important;   padding-bottom: 1rem !important; }
  .md-preview .md-py-5  { padding-top: 1.25rem !important; padding-bottom: 1.25rem !important; }
  .md-preview .md-py-6  { padding-top: 1.5rem !important;  padding-bottom: 1.5rem !important; }
  .md-preview .md-py-7  { padding-top: 1.75rem !important; padding-bottom: 1.75rem !important; }
  .md-preview .md-py-8  { padding-top: 2rem !important;    padding-bottom: 2rem !important; }
  .md-preview .md-py-9  { padding-top: 2.25rem !important; padding-bottom: 2.25rem !important; }
  .md-preview .md-py-10 { padding-top: 2.5rem !important;  padding-bottom: 2.5rem !important; }
  .md-preview .md-py-11 { padding-top: 2.75rem !important; padding-bottom: 2.75rem !important; }
  .md-preview .md-py-12 { padding-top: 3rem !important;    padding-bottom: 3rem !important; }

  /* Optionnel: pour que le padding “colle” sans margin en haut/bas à l’intérieur du bloc */
  .md-preview .md-py-0 > :first-child,
  .md-preview .md-py-1 > :first-child,
  .md-preview .md-py-2 > :first-child,
  .md-preview .md-py-3 > :first-child,
  .md-preview .md-py-4 > :first-child,
  .md-preview .md-py-5 > :first-child,
  .md-preview .md-py-6 > :first-child,
  .md-preview .md-py-7 > :first-child,
  .md-preview .md-py-8 > :first-child,
  .md-preview .md-py-9 > :first-child,
  .md-preview .md-py-10 > :first-child,
  .md-preview .md-py-11 > :first-child,
  .md-preview .md-py-12 > :first-child { margin-top: 0 !important; }

  .md-preview .md-py-0 > :last-child,
  .md-preview .md-py-1 > :last-child,
  .md-preview .md-py-2 > :last-child,
  .md-preview .md-py-3 > :last-child,
  .md-preview .md-py-4 > :last-child,
  .md-preview .md-py-5 > :last-child,
  .md-preview .md-py-6 > :last-child,
  .md-preview .md-py-7 > :last-child,
  .md-preview .md-py-8 > :last-child,
  .md-preview .md-py-9 > :last-child,
  .md-preview .md-py-10 > :last-child,
  .md-preview .md-py-11 > :last-child,
  .md-preview .md-py-12 > :last-child { margin-bottom: 0 !important; }
`;
