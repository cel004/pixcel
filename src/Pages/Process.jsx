import Title from '../components/Title/Title.jsx'
import ProcessCard from '../components/ProcessCard/ProcessCard.jsx'


function Process() {
    return (
      <>
      <div className="processContainer">
        <Title>Our Process</Title>
        <ProcessCard number="1" title="Get in touch">
          <p>
            An open conversation to understand your goals
            and values to lay the foundation for success.
          </p>
        </ProcessCard>
        <ProcessCard number="2" title="Vision">
          <p>
          Understand your needs, gather your content, 
          and outline the layout that aligns with your business goals.
          </p>
        </ProcessCard>
        <ProcessCard number="3" title="Design">
          <p>
          A curated mock-up design will be shared for your review and feedback.
          </p>
        </ProcessCard>
        <ProcessCard number="4" title="Build">
          <p>
          Your fully-functional website will be developed with precision and care.
          </p>
        </ProcessCard>
        <ProcessCard number="5" title="Launch">
          <p>
          Once polished, your website will go live, delivering your brand to the world.
          </p>
        </ProcessCard>
        <ProcessCard number="6" title="Revision">
          <p>
          Final adjustments are made for speed, performance, and user experience.
          </p>
        </ProcessCard>
      </div>
    </>
  );
}
  
  export default Process
  