export default function Button({ children, ...rest }) {
  return <a {...rest}>{children}</a>;
}
