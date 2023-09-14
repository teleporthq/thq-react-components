import CMSMixedType from '.';

import { describe, expect, test, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

afterEach(() => cleanup())

// Sample mapping configuration for testing
const mappingConfiguration = {
  components: {
    'componentType1': () => <div>Component Type 1</div>,
    'componentType2': () => <div>Component Type 2</div>,
  },
  contentTypes: {
    'contentType1': () => <div>Content Type 1</div>,
    'contentType2': () => <div>Content Type 2</div>,
  },
};

describe('CMSMixedType Component', () => {
  const renderErrorComponent = () => <div>Error Component</div>;
  const renderDefaultComponent = () => <div>Default Component</div>;

  it('should render the default case when itemData.type is not component or content-type', () => {
    render(
      <CMSMixedType
        // let the error be, we are testing invalid input
        itemData={{ type: 'invalid', subType: 'someType' }}
        mappingConfiguration={mappingConfiguration}
        renderDefault={renderDefaultComponent}
      />
    );

    expect(screen.getByText('Default Component')).toBeInTheDocument();
  });

  it('should render the component based on subType when itemData.type is "component"', () => {
    render(
      <CMSMixedType
        itemData={{ type: 'component', subType: 'componentType1', attributes: {} }}
        mappingConfiguration={mappingConfiguration}
        renderDefault={renderDefaultComponent}
      />
    );

    expect(screen.getByText('Component Type 1')).toBeInTheDocument();
  });

  it('should render the content type based on subType when itemData.type is "content-type"', () => {
    render(
      <CMSMixedType
        itemData={{ type: 'content-type', subType: 'contentType2', attributes: {} }}
        mappingConfiguration={mappingConfiguration}
        renderDefault={renderDefaultComponent}
      />
    );

    expect(screen.getByText('Content Type 2')).toBeInTheDocument();
  });

  it('should render the default case when component is not found in the mapping', () => {
    render(
      <CMSMixedType
        itemData={{ type: 'component', subType: 'nonExistentType', attributes: {} }}
        mappingConfiguration={mappingConfiguration}
        renderDefault={renderDefaultComponent}
        renderError={renderErrorComponent}
      />
    );

    expect(screen.getByText('Default Component')).toBeInTheDocument();
  });

  it('should render the default case when content type is not supported', () => {
    render(
      <CMSMixedType
        itemData={{ type: 'content-type', subType: 'unsupportedType', attributes: {} }}
        mappingConfiguration={mappingConfiguration}
        renderDefault={renderDefaultComponent}
        renderError={renderErrorComponent}
      />
    );

    expect(screen.getByText('Default Component')).toBeInTheDocument();
  });

  it('should render the error component when a component throws an error and renderError is provided', () => {
    // Define a mapping configuration where a component throws an error
    const errorThrowingMappingConfiguration = {
      components: {
        'componentType1': () => {
          debugger
          throw new Error('Component Error');
        },
        'componentType2': () => <div>Component Type 2</div>,
      },
      contentTypes: {
        'contentType1': () => <div>Content Type 1</div>,
        'contentType2': () => <div>Content Type 2</div>,
      },
    };
  
    render(
      <CMSMixedType
        itemData={{ type: 'component', subType: 'componentType1', attributes: {} }}
        mappingConfiguration={errorThrowingMappingConfiguration}
        renderDefault={renderDefaultComponent}
        renderError={renderErrorComponent}
      />
    );
  
    expect(screen.getByText('Error Component')).toBeInTheDocument();
  });

  it('should render the "error case" text when a component throws an error and no renderError is provided', () => {
    // Define a mapping configuration where a component throws an error
    const errorThrowingMappingConfiguration = {
      components: {
        'componentType1': () => {
          throw new Error('Component Error');
        },
        'componentType2': () => <div>Component Type 2</div>,
      },
      contentTypes: {
        'contentType1': () => <div>Content Type 1</div>,
        'contentType2': () => <div>Content Type 2</div>,
      },
    };
  
    render(
      <CMSMixedType
        itemData={{ type: 'component', subType: 'componentType1', attributes: {} }}
        mappingConfiguration={errorThrowingMappingConfiguration}
        renderDefault={renderDefaultComponent}
      />
    );
  
    expect(screen.getByText('error case')).toBeInTheDocument();
  });

  it('should render the "default case" text when component type is not found and no renderDefault is provided', () => {
    // Define a mapping configuration where the component type is not found
    const noComponentTypeMappingConfiguration = {
      components: {
        'componentType2': () => <div>Component Type 2</div>,
      },
      contentTypes: {
        'contentType1': () => <div>Content Type 1</div>,
        'contentType2': () => <div>Content Type 2</div>,
      },
    };
  
    render(
      <CMSMixedType
        itemData={{ type: 'component', subType: 'componentType1', attributes: {} }}
        mappingConfiguration={noComponentTypeMappingConfiguration}
      />
    );
  
    expect(screen.getByText('default case')).toBeInTheDocument();
  });
});
