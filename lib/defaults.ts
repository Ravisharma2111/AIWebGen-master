// lib/defaults.ts
import { Data } from "@measured/puck";
import { v4 as uuidv4 } from 'uuid';

export const initialData: Data = {
  content: [
    {
      type: 'Hero1Block',
      props: {
        id: uuidv4(), // Ensure this ID is unique for each instance
        leftTitle: 'Default Title',
        leftSubtitle: 'Default Subtitle',
        buttonText: 'Default Button Text',
        formFields: [
          // Define your default form fields here, each with an ID
          {
            id: uuidv4(),
            type: 'text',
            placeholder: 'Enter your text',
          },
          // ... other default form fields
        ],
        formButtonText: 'Default Form Button Text',
      },
    },
    // ... other default components if necessary
  ],
  root: {
    props: {
      title: 'Default Page Title', // Provide a default title
    },
  },
};

export default initialData;
