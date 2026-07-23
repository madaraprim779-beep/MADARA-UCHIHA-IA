export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Méthode non autorisée"
    });
  }

  try {
    const body = req.body || {};
    const message = body.message;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Aucun message reçu."
      });
    }

    return res.status(200).json({
      reply: `♤☯MADARA☯♧ IA : J'ai reçu ton message : "${message}"`
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Erreur interne du serveur",
      details: err.message
    });
  }
}