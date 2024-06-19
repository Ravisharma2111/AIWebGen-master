// utils/fetchFromSupabase.js
export async function fetchFromSupabase(uuid) {
  const { data, error } = await supabase
      .from('website_content')
      .select('*')
      .eq('uuid', uuid)
      .single();

      console.log('Fetched data from Supabase:', data); // Add this line

  if (error) {
      console.error('Error fetching data from Supabase:', error.message);
      return null;
  }

  return {
      leftTitle: data.leftTitle,
      leftSubtitle: data.leftSubtitle,
      buttonText: data.buttonText,
      formButtonText: data.formButtonText,
  };
}
