/**
 * Interface representing the props for the BaseTemplate component.
 * @property sampleTextProp - A string prop for displaying sample text.
 */
export interface IBaseTemplate {
  sampleTextProp: string;
}

/**
 * BaseTemplate component is a functional component that displays sample text.
 * @param {IBaseTemplate} props - The props containing the string prop to be displayed inside the component.
 * @returns {React.ReactElement} A React element representing the BaseTemplate component.
 */
const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div>{sampleTextProp}</div>;
};

export default BaseTemplate;
