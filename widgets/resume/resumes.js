
import Resume0 from "./resume-0";
import Resume1 from "./resume-1";
import Resume2 from "./resume-2";
import Resume3 from "./resume-3";
import Resume4 from "./resume-4";
import Resume5 from "./resume-5";
import Resume6 from "./resume-6";
import Resume7 from "./resume-7";
import Resume8 from "./resume-8";
import Resume9 from "./resume-9";
import Resume10 from "./resume-10";
import Resume11 from "./resume-11";
import Resume12 from "./resume-12";
import Resume13 from "./resume-13";
import Resume14 from "./resume-14";
import Resume15 from "./resume-15";
import Resume16 from "./resume-16";
import Resume17 from "./resume-17";
import Resume18 from "./resume-18";
import Resume19 from "./resume-19";
import Resume20 from "./resume-20";

const Resumes = ({ id, ...rest }) => {
  if (id === 1) {
    return <Resume1 {...rest} />;
  }
  if (id === 2) {
    return <Resume2 {...rest} />;
  }
  if (id === 3) {
    return <Resume3 {...rest} />;
  }
  if (id === 4) {
    return <Resume4 {...rest} />;
  }
  if (id === 5) {
    return <Resume5 {...rest} />;
  }
  if (id === 6) {
    return <Resume6 {...rest} />;
  }
  if (id === 7) {
    return <Resume7 {...rest} />;
  }
  if (id === 8) {
    return <Resume8 {...rest} />;
  }

  if (id === 9) {
    return <Resume9 {...rest} />;
  }
  if (id === 0) {
    return <Resume0 {...rest} />;
  }
  if (id === 10) {
    return <Resume10 {...rest} />;
  }
  if (id === 11) {
    return <Resume11 {...rest} />;
  }
  if (id === 12) {
    return <Resume12 {...rest} />;
  }
  if (id === 13) {
    return <Resume13 {...rest} />;
  }
  if (id === 14) {
    return <Resume14 {...rest} />;
  }
  if (id === 15) {
    return <Resume15 {...rest} />;
  }
  if (id === 16) {
    return <Resume16 {...rest} />;
  }
  if (id === 17) {
    return <Resume17 {...rest} />;
  }
  if (id === 18) {
    return <Resume18 {...rest} />;
  }
  if (id === 19) {
    return <Resume19 {...rest} />;
  }
  if (id === 20) {
    return <Resume20 {...rest} />;
  }

  return <Resume0 {...rest} />;
}
export default Resumes;