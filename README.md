## Summary

This is my solution to the code challenge - redesign the **Choose your skip size** page.

## Live Demo

https://skip-select-jade.vercel.app

## Stack

- React (vite)
- Tailwind CSS
- TypeScript
- Lucide Icons

## Approach

### 1. **Understanding the Task**

The goal was to build a responsive, user-friendly page that:

- Fetches a list of skip size options from an API.
- Displays them clearly, allowing a user to make a selection.
- Handles loading states, errors, and user interaction effectively.

### 2. **Component Structure**

I kept the component structure modular for readability and scalability:

- App: The main component that wraps the entire page.
- SkipOptions: A component that renders a list of skip options.
- SkipOption: A component that renders a single skip option.
- SkipIcon: A component that renders the skip icon based on the selected option.

### 3. **Styling**

I used Tailwind CSS for styling, and applied a custom CSS class to the radio inputs to make them look like buttons. This allowed me to use the native radio input and label elements, while still styling them with Tailwind.

### 4. **TypeScript**

I used TypeScript to type the props and state of the components, and to define the data types for the skip options and the user's selection.

### 5. **Fetching Data**

I used useFetch hook(custom hook) and used axios under the hood to fetch the skip options from an API - services/skipOptionService.ts.

The useFetch hook is a util that can be re-used and it handles loading and error states.

### 6. **User Interaction**

To handle user interaction, I used the `useState` hook to manage the selected option, and the `onChange` and `onClick` props of the `SkipOption` component to update the user selection.

### 7. **UI Design Decisions**

The UI was designed with **simplicity and consistency** in mind:

- **Simplicity**: I aimed for a clean, minimal layout that highlights the available skip sizes clearly without overwhelming the user.
- **Consistency**: I aligned the design with the visual patterns and layout conventions used in previous steps or pages of the main website, to ensure a seamless user experience.

## Conclusion

This solution focused on delivering a clean, functional, and user-friendly "Choose Your Skip Size" page that aligns with both the functional requirements and the visual consistency of the main website. By prioritizing simplicity, proper API integration, and design consistency, the goal was to create an intuitive experience for users.

**Thank you**
