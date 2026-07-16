// lib/blogs.ts

export type BlogSection = {
  heading?: string;
  body: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  stack: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-my-portfolio",
    title: "Building My Portfolio: Debugging in Public",
    date: "Jul 15, 2026",
    readTime: "5 min read",
    category: "Web Design",
    excerpt:
      "I needed a portfolio for my job search, but I didn't want another templated one-pager. Here's the Basecamp design, the stack behind it, and two deploy failures that taught me more than the parts that worked.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    sections: [
      {
        body: [
          "I needed a portfolio for my job search, but I didn't want another templated one-pager. I landed on \"Basecamp\" — a dark, gold-accented design structured like a climbing route, where each section is a \"pitch\" on the way to a \"summit.\" The theme isn't just decoration: it shaped real structural decisions later on, down to how project links and the sidebar nav are organized.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A Next.js site with a hero, then a sequence of bordered \"pitch\" sections — About, Skills, Projects, Blogs, Contact — connected by a dotted vertical rope with clickable markers that jump to each section. A fixed sidebar tracks scroll position and highlights the active section, alongside a live GitHub streak widget and a card showing what I'm currently building. The contact form validates client-side and sends real messages through Formspree, with no backend of my own required.",
        ],
      },
      {
        heading: "Technical decisions",
        body: [
          "I built this in Next.js, TypeScript, and Tailwind specifically because that stack is directly relevant to the front-end roles I'm applying for — I wanted to actually understand every layer, not just glue services together. The bigger architectural decision was making content data-driven rather than hardcoded: Projects and Blogs are both typed arrays rendered through shared components, so adding a new project or post later means adding one object to an array, not touching any layout code.",
        ],
      },
      {
        heading: "The challenge that mattered most",
        body: [
          "My first deploy failed with \"Couldn't find any `pages` or `app` directory\" — a confusing error, since the code clearly had an `app` folder locally. The real cause: a mixed-up manual GitHub upload had left the `app`, `components`, and `public` folders out of the repo entirely, even though the config files made it in. Once I fixed that and got a build to succeed, the site still 404'd on every page — despite `next build` completing cleanly. That one took longer to trace: Vercel had locked in a \"Framework Preset\" of \"Other\" from my very first failed import attempt, before it could detect Next.js, and it never re-checked once real code showed up. Manually resetting the preset fixed it instantly.",
          "Separately, I kept hitting the same JSX bug shape over and over while pasting code across sessions: an opening tag like `<a` would silently drop, leaving a blank line and a dangling set of attributes with nowhere to go. The first couple of times, it took real digging to diagnose. By the third occurrence, I recognized the pattern on sight — a blank line sitting where a tag name should be, almost always right after a `.map(...)`. That was a good reminder that debugging skill often comes from pattern recognition built through repetition, not from any single fix.",
        ],
      },
      {
        heading: "What's next",
        body: [
          "This blog section is the next real addition, along with a pass to make a few components feel less similar to the reference site I used for early design inspiration. After that: the Grocery Store Navigator, an entirely new project.",
        ],
      },
    ],
  },
  {
    slug: "fpa-dashboard",
    title: "Building an FP&A Dashboard That Actually Works Like One",
    date: "Jul 8, 2026",
    readTime: "5 min read",
    category: "Data & Finance",
    excerpt:
      "Corporate finance always struck me as glorified accounting. Building a real forecasting and variance dashboard changed that fast — here's the workflow I tried to recreate, and the validation bug that almost slipped through.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly", "SQLite", "openpyxl"],
    sections: [
      {
        body: [
          "Corporate finance always struck me as glorified accounting — numbers in, report out. Building this project changed that assumption fast. Budgeting, forecasting, P&L reporting, balance sheets, variance analysis: each piece is its own discipline, and the real complexity is making all of them tell one consistent story for decision-makers. That intersection of software, data, and business is what pulled me in, and it's why I didn't want to build another toy calculator — I wanted something that mirrored the actual workflow an FP&A team runs when reviewing monthly performance and preparing a management report.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "The dashboard lets a user upload actual financial results, budget data, and balance sheets, then generates an executive summary, a full P&L, budget-vs-actual variance analysis, base/upside/downside forecast scenarios, a balance sheet summary, interactive charts, and a management-ready Excel export — with each analysis run saved via SQLite. The user experience is simple by design: upload files, review performance, adjust forecast assumptions, export a report.",
        ],
      },
      {
        heading: "Technical decisions",
        body: [
          "I chose Streamlit over a full React/Flask build. A custom frontend would have given me more UI control, but my actual goal was demonstrating FP&A logic and data modeling, not interface design — so Streamlit let me put the effort where it mattered: uploads, validation, calculations, and exports.",
          "Pandas became the modeling engine because the data is inherently tabular — months, accounts, departments, scenarios, amounts. It made grouping by section, computing P&L line items, comparing actuals to budget, and preparing clean output tables far more direct than hand-rolling the same logic with raw lists and dictionaries.",
          "I also built Excel export with openpyxl specifically because Excel is still how real FP&A work gets delivered. Rather than stopping at on-screen charts, the app produces a multi-sheet workbook — summary, P&L, variance, forecast, balance sheet — which pushed the project past \"dashboard demo\" into something that actually resembles deliverable finance work.",
        ],
      },
      {
        heading: "The challenge that mattered most",
        body: [
          "File validation was the bug that almost slipped through. Early on, the app would accept a budget file uploaded into the actuals slot without complaint, since both files share a similar structure — it would run fine and produce results that were quietly wrong, not obviously broken. I caught it by deliberately swapping files between input slots and watching how the output changed. The fix was role-based validation: actuals, budgets, and balance sheets are now checked against expected file names, scenario values, and structural markers before any analysis runs. It was a good early lesson that \"the app doesn't crash\" and \"the app is correct\" are very different bars.",
        ],
      },
      {
        heading: "What's next",
        body: [
          "User authentication, multi-company support, department-level budget approvals, and a cloud database for persisting runs across sessions are the natural next steps if I extend this further — not on my immediate radar, but a clear path forward.",
        ],
      },
    ],
  },
  {
    slug: "row-counter",
    title: "Row Counter: Learning JavaScript by Breaking It",
    date: "Jul 1, 2026",
    readTime: "4 min read",
    category: "Front-End",
    excerpt:
      "I assumed knowing Java would make JavaScript easy. It didn't. A retro-terminal counter app, a negative-number bug that hid beneath a fixed display, and the lesson it taught me about tracing bugs all the way through.",
    stack: ["JavaScript", "HTML", "CSS"],
    sections: [
      {
        body: [
          "Two summers ago I wanted to learn to build something visual. Everything I'd written up to that point — Java, Python, C — solved problems you couldn't actually see. JavaScript, HTML, and CSS were the obvious next step if I wanted code with a visible, tangible result.",
          "I assumed knowing Java would make JavaScript easy. It didn't. The syntax similarities are mostly a trap — the real difficulty was learning how JS and HTML actually talk to each other, and debugging that relationship while still learning both halves of it. I worked through Scrimba's free JavaScript course at my own pace, and when I hit their paywalled challenge exercises, I found I could still see the starter code and problem statement — just not the solution. That was enough: I'd write my own solution from scratch, test it locally, and confirm it worked manually. It turned out to be a better way to learn than having the answer available, and it's what pushed me to take one of their challenge concepts and build my own version of it.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "Row Counter is a count-tracking app with increase/decrease buttons and a running history log, styled as a retro terminal with a swappable background — built generically enough to repurpose for counting anything. Custom-built terminal display, buttons with hover states, an onclick-driven history system, and CSS styling done entirely from scratch.",
        ],
      },
      {
        heading: "The bug that taught me the most",
        body: [
          "The counter could go negative by holding decrease past zero. Stopping the displayed number from dropping below zero in the HTML was trivial. What wasn't trivial: the backend value feeding into the saved history was tracked separately from the visible number, so even with the display correctly frozen at zero, pressing \"save\" could still commit a negative number to history — a bug invisible on screen but very real underneath. Fixing the visible symptom hadn't fixed the actual problem. That was the real lesson: don't assume a fix is complete just because the obvious symptom disappeared — trace everything a bug could be touching before calling it solved.",
        ],
      },
      {
        heading: "One decision worth mentioning",
        body: [
          "Most of this project followed a tutorial structure, so there wasn't much architectural decision-making — but I did make it my own by giving it a crochet-themed skin for my girlfriend, who knits and crochets. It was a small creative choice, but turning a generic tutorial exercise into something a specific person could actually use and enjoy is what made the project feel worth finishing.",
        ],
      },
      {
        heading: "What's next",
        body: [
          "If I revisit this, I'd add in-app editing for the title and background image instead of hardcoding them, and I'd give myself a wider scope generally — this was my first independent project, and I optimized for finishing something rather than being ambitious with it. That tradeoff made sense for a first project; it won't for the next one.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}