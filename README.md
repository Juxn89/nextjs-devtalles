<div align="center" style="margin-bottom: 2rem;">
  <h1 style="font-size:2.5rem; margin-bottom:0.5rem;">✨ Next.js Dashboard Experiments</h1>
  <p style="font-size:1.1rem; color:#444;">
    Modern dashboard project with <b>Next.js 15</b>, <b>Tailwind CSS 4</b>, and React 19.<br>
    <span style="color:#3b82f6;">Personal notes, experiments, and best practices.</span>
  </p>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" alt="Nicaragua Flag" width="60" style="margin-top:1rem; border-radius: 12px; box-shadow: 0 2px 8px #0002;" />
</div>

<details>
  <summary style="font-size:1.1rem; cursor:pointer;">📚 <b>About this repository</b></summary>
  <ul>
    <li>Personal repository for learning and experimenting with <a href="https://nextjs.org/" target="_blank">Next.js</a> and modern frontend tools.</li>
    <li>Current branch: <code>02-dashboar</code> — Dashboard structure, Tailwind, client components, and more.</li>
    <li>Each branch explores a different topic or section of the <a href="https://cursos.devtalles.com/courses/nextjs" target="_blank">DevTalles Next.js course</a>.</li>
    <li>Dashboard navigation inspired by <a href="https://www.creative-tim.com/twcomponents/component/dashboard-navigation" target="_blank">Creative Tim Dashboard Navigation</a>.</li>
  </ul>
</details>

## 🏗️ Project Structure

<pre style="background:#0f172a;color:#f1f5f9;padding:1rem;border-radius:8px;overflow-x:auto;">
app/
├── components/
│   ├── Sidebar.tsx
│   └── SidebarMenuItem.tsx
├── dashboard/
│   ├── layout.tsx
│   ├── main/
│   │   └── page.tsx
│   └── counter/
│       └── page.tsx
├── shopping-cart/
│   └── components/
│       └── CartCounter.tsx
├── layout.tsx
├── page.tsx
├── globals.css
public/
tailwind.config.js
postcss.config.js
package.json
</pre>

## 🎨 Tailwind CSS

- **Tailwind v4** is used for rapid, utility-first styling.
- Example usage:
- Custom fonts and color variables are set in <code>globals.css</code>.

## 🧩 Dashboard Layout

- The dashboard uses a sidebar layout for navigation.
- Sidebar built with <b>React Icons</b> and <b>Next.js Image</b> for profile.
- Responsive and modern UI with Tailwind classes.
- Navigation inspired by <a href="https://www.creative-tim.com/twcomponents/component/dashboard-navigation" target="_blank">Creative Tim Dashboard Navigation</a>.

<img src="https://tailwindcomponents.com/storage/8380/conversions/temp13280-thumb.jpg" alt="Dashboard Example" width="600" style="border-radius:12px;box-shadow:0 2px 8px #0002;margin:1rem 0;" />

- The PokeAPI is used for learning purposes and to demonstrate data fetching, dynamic rendering, and integration with external REST APIs in Next.js.

## ⚛️ Client Components & State

- <b>useState</b> is used for interactive UI, e.g., the cart counter:
- <b>use-client</b> directive enables client-side interactivity in components like <code>CartCounter</code> and <code>SidebarMenuItem</code>.

## 🔗 Next.js Features

- **Next Link** for navigation:
- **Next Image** for optimized images:

## 🔖 Meta Tags & SEO

- This project follows best practices for SEO and accessibility.
- For advanced control over how your dashboard is indexed and displayed in search engines, refer to the official list of [meta tags and attributes that Google supports](https://developers.google.com/search/docs/crawling-indexing/special-tags).
- Some useful tags include:
- <code>&lt;meta name="robots" content="noindex"&gt;</code> — Control indexing and crawling.
- <code>&lt;link rel="canonical" href="..."&gt;</code> — Specify the preferred URL for a page.
- <code>&lt;meta name="description" content="..."&gt;</code> — Provide a concise page summary.
- <code>&lt;meta property="og:title" content="..."&gt;</code> — Open Graph tags for social sharing.
- For a full list and recommendations, visit the [Google Search Central documentation](https://developers.google.com/search/docs/crawling-indexing/special-tags).

## 🛠️ Useful Scripts

- <code>npm run dev</code> — Start development server
- <code>npm run build</code> — Build for production
- <code>npm run start</code> — Start production server

## 🌐 External Resources

<ul>
<li><a href="https://nextjs.org/docs" target="_blank">Next.js Documentation</a></li>
<li><a href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS Docs</a></li>
<li><a href="https://react.dev/" target="_blank">React Docs</a></li>
<li><a href="https://cursos.devtalles.com/" target="_blank">DevTalles Platform</a></li>
<li><a href="https://www.creative-tim.com/twcomponents/component/dashboard-navigation" target="_blank">Creative Tim Dashboard Navigation</a></li>
<li><a href="https://pokeapi.co/" target="_blank">PokeAPI</a></li>
</ul>

<div align="center" style="margin-top:2rem; font-size:1.2rem;">
<b>With ❤️ and ☕, from Nicaragua <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" alt="Nicaragua Flag" width="24" style="vertical-align:middle; border-radius:6px; box-shadow:0 1px 4px #0002;" /> to the world,<br/>Juan Gómez</b>
</div>
