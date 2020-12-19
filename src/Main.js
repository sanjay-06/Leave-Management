import React from 'react';
import { useIntl } from 'react-intl';
import { FaBars } from 'react-icons/fa';
const Main = ({
  handleToggleSidebar,
  
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="btn-toggle" onClick={() =>{ handleToggleSidebar(true)}}>
        <FaBars />
      </div>
      <header>
        <p>{intl.formatMessage({ id: 'description' })}</p>
        <div>
          HELLO
        </div>
      </header>
    </main>
  );
};

export default Main;
