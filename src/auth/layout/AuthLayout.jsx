import { PropTypes } from 'prop-types';

export const AuthLayout = ({ children, title }) => {
  return (
    <div className="h-screen w-full bg-[#222] grid place-items-center p-4">
      <section
        id="container-form"
        className="max-w-[450px] animate__animated animate__fadeIn animate__faster"
      >
        <h2 className="text-4xl font-bold text-center">{title}</h2>
        {children}
      </section>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};
