import Section from "../components/Section.jsx";
import Alert from "../components/ui/Alert.jsx";

/*
 * Exercise 08 — Alert / Notification
 * Um único componente cobre success, warning, error e info (+ botão
 * opcional de ação via prop actionLabel). A mensagem vem por children.
 */
export default function Ex08AlertShowcase() {
  return (
    <Section
      number="08"
      title="Alert / Notification"
      subtitle="Semantic variants + icon/title/message/actions"
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Alert variant="success" title="Success">
          Your changes were saved.
        </Alert>

        <Alert variant="warning" title="Warning">
          Review the required fields.
        </Alert>

        <Alert variant="error" title="Error">
          Something went wrong.
        </Alert>

        <Alert variant="info" title="Info" actionLabel="Retry">
          A new version of this page is available.
        </Alert>
      </div>
    </Section>
  );
}
