import React from 'react';
import { Container } from '../../components/ui/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Button } from '../../components/ui/Button';

export const ProductsPage: React.FC = () => {
  return (
    <div className="py-20 min-h-[60vh] flex items-center bg-surface-container-lowest">
      <Container className="flex flex-col items-start gap-8">
        <SectionHeading
          theme="dark"
          eyebrow="PURPOSE-BUILT SUITE"
          title="ZNSoftech Products"
          description="Proprietary toolkits, telemetry platforms, and agentic intelligence engines engineered for modern teams."
        />
        <p className="text-on-surface-variant font-body-lg max-w-2xl leading-relaxed">
          Product feature breakdowns, interactive demonstrations, and pricing tiers will be launched in the dedicated products phase.
        </p>
        <Button href="/" variant="secondary">
          Return to Homepage
        </Button>
      </Container>
    </div>
  );
};

export default ProductsPage;
