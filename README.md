# Command Palette

This is a command palette created for a test assignment for the company [sympl](https://gosympl.com/).

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS
- [Vercel](https://vercel.com/)

I decided to use the stack that I am most familiar with. I also decided to use Next.js because it is a framework that I have been wanting to learn more about. I also chose this because this way I could show how the current me writes code. Though I do want to note, if the project was any bigger, I would have used PostCSS and Style-Dictionary but that would have been overkill for this project(too few components). I also want to note that I did not use any UI libraries because I wanted to show that I can create a UI from scratch, even though it would take considerably less time to use one. Other things I would normally(all be it situationally) use would be tech like svg-sprite to generate icons in a single component and storybook(or similar tech) to create a component library.

Also worth noting is that I decided to do the filtering and searching in the front-end to reduce the amount of api call's that need to happen.

## Time spent

- .5 hour: setting up the project
- 2 hours: creating components and their styling
- .5 hour: creating filter functionality
- 1 hour: creating search based functionality
- .5 hour: implementing api
- .5 hour: hosting
- .5 hour: bug and style fixing
- .5 hour: fixing search functionality
------
- 6 hours: total

## focus 

My main focus in the project was showing my ability to write clean reusable code and to showcase the ability to be able to write components fit for larger repositories.

## issues

The main issue I encountered in the front-end was how to pass the data between all the components. On one hand I could use something like redux or the React context API but that seemed rather overkill for a component of this size, so I decided to do a bit of prop drilling. It's not exactly ideal but I figured that for only a 3 layer component, it's not too bad in this case.

## Extra's

### CSS Modules
Components should use CSS modules for their styles.
Because tailwind makes code unreadable for me, it's glorified inline styling (*in my opinion*).

It should be put next to the `Component.tsx` file and should be named `styles.module.css`.


### commands

- `npm run dev` launch dev server.
- `npm run build` build next for production
- `npm run start` start NextJS with the production build

### local Development

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


