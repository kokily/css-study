import Header from './Header';

const PageTemplate = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default PageTemplate;
