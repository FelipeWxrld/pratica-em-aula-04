import Section from "../components/Section.jsx";
import ProfileCard from "../components/ProfileCard.jsx";

/*
 * Exercise 03 — Profile Card
 * Dois cards com dados diferentes e layouts distintos: nenhuma estrutura
 * foi copiada, tudo vem por props (reutiliza Avatar, Badge e Button).
 */
export default function Ex03ProfileCard() {
  return (
    <Section
      number="03"
      title="Profile Card"
      subtitle="Composition: Avatar + Badge + Button"
    >
      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">
        <ProfileCard
          name="Eduardo Inocencio"
          role="Professor · React · SPA"
          initials="EI"
          category="Front-end"
          description="Building reusable interfaces with React and Tailwind CSS."
          avatarVariant="blue"
        />

        <ProfileCard
          name="Marina Alves"
          role="Designer · Design Systems"
          initials="MA"
          category="Product Design"
          description="Tokens, componentes e documentação para escalar interfaces."
          avatarVariant="violet"
          layout="vertical"
        />
      </div>
    </Section>
  );
}
