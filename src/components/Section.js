import PropTypes from "prop-types";
import { Sections, Article } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <Sections>
      <Article>{title}</Article>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
