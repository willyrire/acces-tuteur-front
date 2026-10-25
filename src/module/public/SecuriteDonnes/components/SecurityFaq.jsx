import React from "react";
import { ChevronDown } from "lucide-react";

const items = [
  {
    question: "Est-ce qu'Accès Tuteur peut voir mon mot de passe?",
    answer:
      "Le mot de passe original n'a pas besoin d'être conservé. Une empreinte bcrypt est enregistrée et utilisée pour vérifier les connexions. bcrypt est un mécanisme de hachage à sens unique, pas un chiffrement que l'on peut simplement inverser.",
  },
  {
    question: "Est-ce que la double authentification rend mon compte impossible à pirater?",
    answer:
      "Non. Aucun mécanisme ne rend un compte invulnérable. La double authentification réduit surtout le risque qu'un mot de passe compromis suffise à lui seul pour prendre le contrôle du compte.",
  },
  {
    question: "Pourquoi protéger un cookie de session s'il est déjà en HTTPS?",
    answer:
      "Parce que les protections ont des rôles différents. HTTPS protège surtout le transport. Le chiffrement et la signature HMAC du cookie ajoutent une protection contre sa lecture directe et contre certaines modifications non autorisées.",
  },
  {
    question: "Est-ce qu'un bouton caché dans l'interface suffit à protéger une fonction?",
    answer:
      "Non. Cacher une fonctionnalité améliore l'interface, mais ce n'est pas une mesure de sécurité. Les permissions importantes doivent être vérifiées côté serveur avant d'exécuter l'action.",
  },
  {
    question: "Accès Tuteur est-il invulnérable?",
    answer:
      "Non, et aucune plateforme sérieuse ne devrait le promettre. L'objectif est de réduire les risques avec plusieurs couches de protection, de limiter l'accès au strict nécessaire et de corriger rapidement les problèmes lorsqu'ils sont découverts.",
  },
];

const SecurityFaq = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <div className="divide-y rounded-3xl border bg-card px-5 shadow-sm sm:px-7">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.question} className="py-2">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 py-4 text-left"
              aria-expanded={open}
            >
              <span className="font-semibold">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {open && (
              <p className="max-w-4xl pb-5 pr-8 leading-7 text-muted-foreground">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SecurityFaq;
