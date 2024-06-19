// puck.config.tsx
import type { Config } from "@measured/puck";
import Hero1 from './components/hero/Hero1';
import { fetchFromSupabase } from './utils/fetchFromSupabase';

type FormField = {
  id: string;
  type: string;
  placeholder: string;
};

type Hero1Props = {
  leftTitle: string;
  leftSubtitle: string;
  buttonText: string;
  formFields: FormField[];
  formButtonText: string;
};

const config: Config<Hero1Props> = {
  components: {
    Hero1Block: {
      fields: {
        leftTitle: { type: "text" },
        leftSubtitle: { type: "text" },
        buttonText: { type: "text" },
        formFields: {
          type: "array",
          arrayType: {
            id: { type: "text" },
            type: { type: "text" },
            placeholder: { type: "text" },
          },
          defaultItem: {
            id: "defaultId",
            type: "text",
            placeholder: "Your Placeholder Here",
          },
        },
        
        formButtonText: { type: "text" },
      },
      defaultProps: {
        leftTitle: "Dynamic Left Title",
        leftSubtitle: "Dynamic Left Subtitle",
        buttonText: "Dynamic Button Text",
        formFields: [{
            id: "email",
            type: "email",
            placeholder: "Enter your email",
        }, {
            id: "name",
            type: "text",
            placeholder: "Your Name",
        }],
        formButtonText: "Dynamic Form Button Text",
      },
      resolveData: async ({ props }) => {
        console.log("Resolving Data",props)
        // Ensure props includes uuid
        if (!props.uuid) {
          console.log("UUID not provided for Hero1Block");
          return { props }; // Return existing props if no UUID is provided
        }

        const updatedProps = await fetchFromSupabase(props.uuid);
        console.log('Updated :', updatedProps); // Add this line
        console.log("Fetched data from Supabase for UUID:", props.uuid, updatedProps);
        
        return { props: { ...props, ...updatedProps } };
      },
      render: (props) => <Hero1 {...props} />,
    },
    // Add other components configuration here
  },
  // Add categories or other global configuration if needed
};

export default config;
