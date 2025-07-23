import React from 'react';
import ProductDemo from '../components/responsibleAI/ProductDemo';
import SmoothScroll from '../components/responsibleAI/SmoothScroll';

const ResponsibleAIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <SmoothScroll />
      <ProductDemo />
    </div>
  );
};

export default ResponsibleAIPage;