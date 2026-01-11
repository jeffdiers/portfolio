import Link from "next/link";

export function Resume() {
  return (
    <div className="container mx-auto flex flex-col p-4 text-start">
      <div className="mb-8 text-start">
        <h1 className="text-4xl font-bold">Jeff Diers – Software Engineer</h1>
        <p>New York, NY</p>
        <p>720-987-3868</p>
        <p>
          <Link href="mailto:jeff.diers@gmail.com">jeff.diers@gmail.com</Link>
        </p>
        <p>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/jeffdiers"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/jeffdiers
          </Link>{" "}
        </p>
        <p>
          GitHub:{" "}
          <Link
            href="https://github.com/jeffdiers"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/jeffdiers
          </Link>{" "}
        </p>
        <p>
          Web:{" "}
          <Link
            href="http://www.jeffdiers.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.jeffdiers.com
          </Link>
        </p>
      </div>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">SUMMARY</h2>
        <p>
          Experienced software engineer and application developer passionate
          about driving digital transformation and creating innovative
          solutions. Specializing in full stack development, I leverage a
          diverse skill set and expertise in popular languages, frameworks, and
          libraries including TypeScript, MongoDB, SQL, GO, React.js, Next.js,
          jQuery, and Node.js.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">EXPERIENCE</h2>

        <div className="mb-6">
          <Link
            href="https://posh.vip"
            target="_blank"
            className="text-xl font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
          >
            Posh
          </Link>
          <p className="italic">
            Senior Software Engineer – Product Team – New York, NY (12/2024 –
            present)
          </p>
          <ul className="list-disc pl-4">
            <li>
              Senior engineer on a high-scale event and ticketing platform
              serving millions of users across web and mobile.
            </li>
            <li>
              Lead development of a shared cross-platform design system used
              across Next.js and React Native (Expo) apps, including tokens,
              theming, and component libraries
            </li>
            <li>
              Architect and maintain a large TypeScript monorepo (Turborepo,
              Yarn workspaces) powering design-kit, mobile, web, and shared
              tooling
            </li>
            <li>
              Build and ship production features across Next.js, React Native,
              Expo, and tRPC APIs
            </li>
            <li>
              Designed and implemented token-driven theming (light/dark, event
              branding, OKLCH color models) shared across platforms
            </li>
            <li>
              Own CI/CD and build pipelines for UI packages including Storybook,
              Chromatic, and package publishing
            </li>
            <li>
              Partner closely with designers and leadership to evolve UX
              patterns, accessibility, and visual consistency across the product
            </li>
            <li>
              Drive performance and developer-experience improvements through
              bundling, caching, and build optimization
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <Link
            href="https://jona.health/"
            target="_blank"
            className="text-xl font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
          >
            Jona
          </Link>
          <p className="italic">
            Senior Software Engineer – Product Team – New York, NY (10/2023 –
            07/2024)
          </p>
          <ul className="list-disc pl-4">
            <li>
              Member of a core product team at an early-stage, high-paced
              startup, responsible for developing and maintaining a
              customer-facing web application powered by AI, helping users
              understand the complexity of their gut microbiome.
            </li>
            <li>
              Develop key revenue-generating projects that enhance both the user
              experience and system performance by developing front end UI
              components as well as the backend API’s.
            </li>
            <li>
              Collaborated with designers to establish processes for creating
              pixel-perfect UI components, ensuring high-quality visual
              consistency and user experience.
            </li>
            <li>
              Developed quality code following modern standards with a focus on
              maintainability, sustainability, performance, and accessibility
              using Typescript, React, Node.js, MongoDB, PSQL, Redis, Storybook,
              Tailwind CSS, Next.js.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Kin and Carta</h3>
          <p className="italic">
            Senior Software Engineer – Platform Team – New York, NY (01/2022 –
            03/2023)
          </p>
          <ul className="list-disc pl-4">
            <li>
              Member of a core digital transformation team specializing in
              creating platforms that support the acceleration of sustainable,
              equitable, and innovative business outcomes.
            </li>
            <li>
              Develop and integrate a full-featured AI-powered search tool to
              enhance digital content discovery for a website with 10,000+ pages
              of digital content resulting in higher quality results and 36%
              increase of click-through-rate using TypeScript, Next.js,
              React.js, and Search.io.
            </li>
            <li>
              Increase website mobile performance by 60% and desktop performance
              by 40% by implementing static site rendering, a content delivery
              network (CDN), developing a UI component library, and optimizing
              images & videos using TypeScript, Next.js, React.js, and
              Contentstack.
            </li>
            <li>
              Develop a testable, accessible, and documented UI component
              library using TypeScript, React.js, SASS, and Storybook.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">T-Mobile</h3>
          <p className="italic">
            Software Engineer – Video Technology – Denver, CO (10/2018 –
            09/2021)
          </p>
          <ul className="list-disc pl-4">
            <li>
              Member of the Video Technology team that is responsible for
              developing and operating video streaming services for a dedicated
              over-the-top (OTT) media streaming service.
            </li>
            <li>
              Troubleshoot and problem-solve in a Linux environment,
              successfully resolving complex problems.
            </li>
            <li>Containerize and orchestrate CI/CD pipelines using Docker.</li>
            <li>
              Design and implement a content management system in which the
              operations team can manage dynamically inserted advertisements in
              a live video stream using Java, GO, React.js, TypeScript, Redis,
              and Google Ad Manager.
            </li>
            <li>
              Support the development and delivery of API’s to enable digital
              video recordings alongside a storage delivery system to manage
              petabytes of video data using GO, Docker, Redis, PSQL, Node.js,
              React.js, and TypeScript.
            </li>
            <li>
              Create highly detailed documentation that includes API
              documentation, system architecture diagrams, deployment plans, and
              verbal presentations to stakeholders within the company.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">MotoTV Network</h3>
          <p className="italic">
            Software Engineer – Denver, CO (10/2017 – 10/2018)
          </p>
          <ul className="list-disc pl-4">
            <li>
              Member of a creative, high-paced startup developing video
              advertising software following the Agile workflow.
            </li>
            <li>
              Responsible for developing and maintaining user interface features
              and API endpoints for a content management system in which our
              customers use to manage in-store video streams, advertisements,
              and menu boards.
            </li>
            <li>
              Work alongside a talented design team to develop custom video
              overlays and animations using jQuery and CSS.
            </li>
            <li>
              PHP/Laravel, React.js, JavaScript, CoffeeScript, HTML5, CSS3.
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">SKILLS</h2>
        <div className="grid grid-cols-3 gap-4 pl-4">
          <ul className="col-span-1 list-disc">
            <li>JavaScript ES6</li>
            <li>TypeScript</li>
            <li>Go</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
          <ul className="col-span-1 list-disc">
            <li>React.js</li>
            <li>Next.js</li>
            <li>jQuery</li>
            <li>Redis</li>
            <li>Node.js</li>
          </ul>
          <ul className="col-span-1 list-disc">
            <li>Tailwind CSS</li>
            <li>CSS3</li>
            <li>Linux</li>
            <li>Jira</li>
            <li>GitHub</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">EDUCATION</h2>
        <p>Galvanize, Denver, CO (11/2016 – 04/2017)</p>
        <ul className="mb-4 list-disc pl-4">
          <li>Intensive web development program.</li>
          <li>
            Trained on front-end and back-end technologies, to build
            applications individually and in group formats with an emphasis on
            Agile workflow.
          </li>
        </ul>
        <p>University of Colorado, Colorado Springs (2011 – 2013)</p>
        <ul className="list-disc pl-4">
          <li>Mechanical Engineering.</li>
        </ul>
      </section>
    </div>
  );
}
