import { supabase } from '../../utils/supabaseClient';

export default async function handler(req, res) {
  try {
    const { uuid } = req.query;
    if (!uuid) {
      return res.status(400).json({ error: 'UUID is required' });
    }

    const { data, error } = await supabase
      .from('website_content')
      .select('*')
      .eq('uuid', uuid)
      .single();

    if (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!data) {
      return res.status(404).json({ error: 'Content not found' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
