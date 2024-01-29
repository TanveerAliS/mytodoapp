/**
 * Interface representing the props for the Primary component.
 * Extends React's ComponentPropsWithoutRef for 'div' element.
 */
export interface IPrimary extends React.ComponentPropsWithoutRef<'div'> {}

/**
 * Primary component is a flexible container div with optional flexbox justification.
 * @param children - The content to be rendered inside the Primary component.
 */
const Primary: React.FC<IPrimary> = ({ children }) => {
  return <div className="min-h-screen flex flex-col">{children}</div>;
};

export default Primary;
