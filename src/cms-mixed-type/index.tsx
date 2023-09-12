const switchBasedOnComponent = (
    itemData: ItemDataType,
    mappingConfiguration: MappingConfigurationType
  ) => {
    if (mappingConfiguration?.components?.[itemData.subType]) {
      return [
        true,
        mappingConfiguration.components[itemData.subType]?.(itemData.attributes)
      ];
    }
    return [false];
  };
  
const switchBasedOnContentType = (
    itemData: ItemDataType,
    mappingConfiguration: MappingConfigurationType
  ) => {
    if (mappingConfiguration.contentTypes?.[itemData.subType]) {
      return [
        true,
        mappingConfiguration.contentTypes[itemData.subType]?.(itemData.attributes)
      ];
    }
    return [false];
  };


// These are permisive props, 
// we wont enforce type safety on
// props for each case
type ItemDataType = Record<string, unknown> & { type: 'component' | 'content-type', subType: string}
type MappingConfigurationType = {
    components: {
        [key: string]: (props: { [key: string]: any }) => JSX.Element;
    };
    contentTypes: {
        [key: string]: (props: { [key: string]: any }) => JSX.Element;
    };
}

export interface CMSMixedTypeProps {
    itemData: ItemDataType,
    mappingConfiguration: MappingConfigurationType
    renderDefault?: (itemData: ItemDataType) => JSX.Element
    renderError?: (err: any) => JSX.Element
}

export const CMSMixedType = ({itemData, mappingConfiguration, renderDefault, renderError}: CMSMixedTypeProps) => {
    try {
        const result =
            itemData.type === "component"
            ? switchBasedOnComponent(itemData, mappingConfiguration)
            : switchBasedOnContentType(itemData, mappingConfiguration);
        return <>{result[0] ? result[1] ?? null : (renderDefault ? renderDefault(itemData) : "default case")}</>;
      } catch (err) {
        return <>{renderError ? renderError(err) : "error case"}</>
      }
};

export default CMSMixedType