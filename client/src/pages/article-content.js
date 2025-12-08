const articles = [
  {
    name: "learn-react",
    title: "The Fastest Way to Learn React",
    thumbnail: "/images/blog1.jpeg",
    content: [
      `If you're getting started with React, the fastest way to learn is by building small, real-world projects. React is a component-based library, so the more components you build, the faster concepts like props, state, and hooks start to make sense.`,

      `Before jumping into advanced topics, make sure you understand the core fundamentals: JSX, functional components, props, useState, and useEffect. These features alone allow you to build most of the interfaces used in modern applications.`,

      `Once you're comfortable with the basics, start exploring more advanced topics like React Router, Context API, and custom hooks. And finally, practice by cloning simple projects — dashboards, blogs, or landing pages. Consistency is the key to mastering React.`,
    ],
  },

  {
    name: "learn-node",
    title: "How to Build a Node Server in 10 Minutes",
    thumbnail: "/images/blog2.jpeg",
    content: [
      `Setting up a Node.js server is much easier than most beginners expect. With just a few lines of code using Express.js, you can have a running backend that responds to API requests.`,

      `Start by installing Express and creating a simple server: import express, create an app instance, and set up a single GET route. This gives you a working endpoint that can return JSON data — perfect for testing with tools like Postman or Thunder Client.`,

      `From there, you can expand your server by adding middleware, connecting to a database, and organizing your routes into separate files. Node's simplicity makes it ideal for building everything from small APIs to full-scale backend systems.`,
    ],
  },

  {
    name: "my-thoughts-on-learning-react",
    title: "My Thoughts on Learning ReactJS",
    thumbnail: "/images/blog3.jpeg",
    content: [
      `When I first started learning React, I quickly realized that the biggest challenge wasn’t the syntax — it was thinking in components. React forces you to break your UI into isolated pieces, and once that clicks, everything else becomes easier.`,

      `The moment things truly made sense was when I understood how state flows through a React application, and how small components can be combined to create entire user interfaces. Hooks like useState and useEffect removed the complexity of class components and made React far more intuitive.`,

      `If you're learning React today, my advice is simple: build consistently, even if the projects are small. The more you experiment with state, effects, routing, and data fetching, the more React begins to feel natural. React isn’t hard — it’s just a new way of thinking.`,
    ],
  },
];

export default articles;
