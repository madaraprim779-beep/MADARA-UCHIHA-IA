export default async function handler(req, res) {
  // S'assurer qu'on accepte uniquement les requêtes POST (ou adapter selon ton app)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { message } = req.body;

    // Vérifie si une clé API ou un traitement est manquant
    // (C'est souvent ici que ça plante si process.env.TA_CLE_API est vide)

    // Exemple de réponse de test pour valider que l'API répond
    return res.status(200).json({ 
      reply: `Réponse de ton IA pour : "${message || 'Rien reçu'}"` 
    });

  } catch (error) {
    console.error('Erreur attrapée dans l\'API :', error);
    return res.status(500).json({ 
      error: 'Erreur interne du serveur', 
      details: error.message 
    });
  }
}
