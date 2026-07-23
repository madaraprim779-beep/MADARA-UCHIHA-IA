export default async function handler(req, res) {
  // Autoriser uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Le message est vide.' });
    }

    // --- LOGIQUE DE TON IA ---
    // Si tu appelles une API externe (comme Google Gemini, OpenAI, etc.), 
    // assure-toi que ta clé est bien dans les variables d'environnement de Vercel.
    // Exemple : const apiKey = process.env.TA_CLE_API;

    // Réponse temporaire de test pour valider que le serveur ne plante plus
    const aiResponse = `Réponse de ♤☯MADARA☯♧ IA : J'ai bien reçu ton message -> "${message}"`;

    return res.status(200).json({ reply: aiResponse });

  } catch (error) {
    console.error('Erreur critique dans api/chat.js :', error);
    return res.status(500).json({ 
      error: 'Erreur interne du serveur', 
      details: error.message 
    });
  }
}
