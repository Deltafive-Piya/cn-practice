A demo using cn(clsx+twMerge) demonstrating the juggling of Client and SSR within Reacty Next.


Encountered Error:
Event handlers cannot be passed to Client Component props.


Root cause:
In the Next.js ecosystem w/ AppRouter, components are by default Server Components, which cannot handle interactivity (like onClick) directly. To fix this, you need to explicitly mark the Button component as a Client Component by adding the "use client" directive at the top of the file.

SOLUTION- "use client"; // Enables the component to handle client-side interactivity
    Had to “clientify” App.tsx AND component to make the Client side rendering work.

class-variance-authority will allow us to make the danger its own variance rather than stated over and over. 

Note: CLSX conditionally chooses (the class variations defined within) class-variant-authority 
