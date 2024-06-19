// utils/defaultPageContent.js

export const defaultPageContent = {
  content: [
    {
      type: 'Hero1Block',
      props: {
        id: 'unique-id-for-hero1', // Generate a unique ID for this instance
        leftTitle: 'Welcome to Your New Business',
        leftSubtitle: 'We provide the best solutions for your business.',
        buttonText: 'Learn More',
        formFields: [
          { id: 'email', type: 'email', placeholder: 'Enter your email' },
          { id: 'name', type: 'text', placeholder: 'Your Name' },
        ],
        formButtonText: 'Sign Up',
      },
    },
    // Add more default components as needed
  ],
  // Include any other necessary initial data structure required by Puck
};
