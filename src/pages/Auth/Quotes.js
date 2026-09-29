const login_quotes = [
  "Bon retour !<br/> Heureux de vous revoir parmi nous.",

  "<b>Votre réussite commence ici.</b>",

  "Reprenez là où vous vous êtes arrêté et continuez d’avancer.",

  "<b>Apprendre, progresser, réussir.</b><br/> Une étape à la fois.",

  "Chaque petite progression compte davantage que vous ne le pensez.",

  "<b>Les grandes réussites commencent souvent par une simple connexion.</b>",

  "Votre futur vous remerciera pour les efforts d’aujourd’hui.",

  "Continuez votre parcours. Vos objectifs vous attendent.",

  "<b>Construisons quelque chose de grand ensemble.</b>",

  "Il n’est jamais trop tard pour apprendre quelque chose de nouveau.",

  "<b>Connectez-vous à votre espace Accès Tuteur.</b>",

  "Un cours. Une rencontre. Une progression.",

  "Vous êtes plus proche de vos objectifs que vous ne le croyez.",

  "<b>Chaque connexion est une nouvelle occasion d’avancer.</b>",

  "Le savoir est un voyage. Content de vous revoir sur le chemin.",

  "La persévérance transforme les efforts en résultats.",

  "<b>Continuez aujourd’hui ce que vous avez commencé hier.</b>",

  "Votre prochaine réussite commence peut-être maintenant.",

  "Accès Tuteur vous accompagne à chaque étape.",

  "<b>Reconnectez-vous à votre progression.</b>",
];

const signup_quotes = [
  "<b>Bienvenue chez Accès Tuteur !</b><br/> Votre aventure commence ici.",

  "Créez votre compte et ouvrez la porte à de nouvelles possibilités.",

  "<b>Votre réussite commence aujourd’hui.</b>",

  "Chaque expert a déjà été débutant.",

  "<b>Faites le premier pas.</b><br/> Nous vous aiderons pour le reste.",

  "Commencer est souvent la partie la plus difficile. Vous êtes déjà ici.",

  "<b>Un compte aujourd’hui, des réussites demain.</b>",

  "Apprendre n’est pas une course. Avancez à votre rythme.",

  "<b>Créez votre espace d’apprentissage.</b>",

  "Votre futur se construit une décision à la fois.",

  "<b>Rejoignez une communauté qui croit au potentiel de chacun.</b>",

  "Les grandes choses prennent du temps. Commencez maintenant.",

  "Apprendre aujourd’hui, réussir demain.",

  "<b>Votre parcours commence ici.</b><br/> Nous avons hâte de vous accompagner.",

  "Chaque objectif mérite le bon accompagnement.",

  "<b>Pourquoi attendre pour commencer ?</b>",

  "Un petit pas aujourd’hui peut changer beaucoup demain.",

  "<b>Apprendre ensemble, progresser plus loin.</b>",

  "La meilleure version de vous-même commence ici.",

  "Créer un compte, c’est ouvrir une nouvelle porte ",
];

function quoteRandomizer(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

export { login_quotes, signup_quotes, quoteRandomizer };
