/* eslint-disable jsx-a11y/alt-text */
// coda-8
import React from "react";
import {
  Text,
  Link,
  Image,
  Font,
  Page,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

import { removeHttp } from "./helper";
// import commonCss from "./css";

// ----------font----------
const font = {
  title: "RozhaOne",
  400: "Lato",
  700: "Lato Bold",
  playfair: "Playfair Display",
};
Font.register({
  family: font.title,
  src: "/fonts/rozhaone/RozhaOne-Regular.ttf",
});
Font.register({
  family: font.playfair,
  src: "/fonts/playfair/PlayfairDisplay-Regular.ttf",
});
Font.register({
  family: font["300"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});
Font.register({
  family: font["400"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf",
});
Font.register({
  family: font["700"],
  src: "https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf",
});

// ----------END font----------

function ResumeFullStack({
  name,
  jobTitle = "Job test",
  skills = [],
  portfolio,
  experiences = [],
  educations = [],

  type,

  email,
  mobile,
  bio = "About user",
  hobbies = [],
  languages = [],
  profileImage = "",
  education = [],

  website,
  linkedin,
  github,
  instagram,
  twitter,
  crunchBase,

  config,
  image = "/img/resume/bg-3.jpg",
  qr = "",
  ...props
}) {
  // ---------Styles----------
  //   const css = commonCss({
  //     color: colors.BG,
  //     font,
  //   });

  const css = {
    primary: "#ffe04a",
    secondary: "#e6e7e8",
    grey1: "#1c1c21",
    grey2: "#5e5e61",
    grey3: "#79797d",
    padding: "40px",
  };

  const s = StyleSheet.create({
    // ...css,

    page: {
      fontSize: 10,
      fontFamily: font["400"],
      fontWeight: 400,
      lineHeight: 1.6,
      padding: `30px ${css.padding} 0 ${css.padding} `,
      fontSize: 10,
      color: css.grey3,
    },

    row: { flexDirection: "row" },
    column: { flexDirection: "column" },
    aic: { alignItems: "center" },
    jcc: { justifyContent: "center" },
    jcsb: { justifyContent: "space-between" },
    flexWrap: { flexWrap: "wrap" },

    pr: { position: "relative" },
    pa: { position: "absolute" },

    w33: { width: "33%" },
    w66: { width: "66%" },

  

    imageWrap: { width: "196mm", position: "absolute", top: 20, left: 20 },

    seperator: {
      borderRight: "2px solid #1F2731",
      height: "280mm",
    },

    h1: {
      color: css.grey1,
      letterSpacing: 2,
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 700,
      fontFamily: font["700"],
    },
    h2: {
      color: css.grey1,
      letterSpacing: 1,
      fontSize: 20,
      fontWeight: 700,
      fontFamily: font["700"],
    },
    h3: {
      color: css.grey1,
      letterSpacing: 1,
      fontSize: 18,
      fontWeight: 700,
      fontFamily: font["700"],
    },
    h4: {
      color: css.grey2,
      fontSize: 14,
      fontWeight: 700,
      fontFamily: font["700"],
    },
    h5: {
      color: css.grey3,
      fontSize: 11,
      fontWeight: 700,
      fontFamily: font["700"],
    },
    // h4: { color: "#1F2731", letterSpacing: 1, fontSize: 13, fontWeight: 700, fontFamily: font["700"] },

    grey1: { color: css.grey1 },
    grey2: { color: css.grey2 },
    grey3: { color: css.grey3 },

    column1 : {
      paddingRight : 30,
    },
    column2 : {
      paddingLeft : 20,
      borderLeft : `1px dashed #eee`,
    },

    portfolio: {
      backgroundColor: css.primary,
      marginTop: 15,
      marginBottom: 30,
      transform: `translateX(-${css.padding})`,
    },
    portfolioDeco: {
      backgroundColor: css.secondary,
      width: css.padding,
      height: "45px",
    },
    portfolioText: {
      padding: "10px",
      fontSize: 15,
    },
    portfolioLink: {
      color: css.grey1,
      textDecoration: "none",
    },
    skills : {
      marginBottom: 15,
    },
    skill: {
      backgroundColor: "#eee",
      padding: "4px 10px",
      borderRadius: "5px",
      fontSize: 10,
      fontWeight: 700,
      fontFamily: font["700"],
      margin: "0 5px 5px 0",
    },
    experience : {
      marginBottom : 20,
      paddingLeft : 30,
    },
    experienceDot : {
      backgroundColor: css.primary,
      height:20,
      width:20,
      top:0,
      left:0,
      zIndex:2,
    },
    experienceLine : {
      backgroundColor: css.secondary,
      height:"100%",
      width:2,
      top:20,
      left:9,
    },
    summaryDot : {
      backgroundColor: css.grey3,
      height:4,
      width:4,
      opacity:0.4,
      borderRadius:2,
      margin:"5px 8px 0 0",
    },

    project :  {
      marginBottom : 40,
    },
    projectDot : {
      backgroundColor: css.primary,
      height:30,
      width:30,
      top:-3,
      left:-12,
    }
  });
  // ----------END styles----------

  const getClass = (classes) => {
    let styleObj = {};
    classes.split(" ").forEach((className) => {
      styleObj = { ...styleObj, ...(s[className] || {}) };
    });
    return styleObj;
  };

  return (
    <Document author={name} title={name} subject={`${name} - ${jobTitle}`}>
      <Page size="A4" {...props} style={s.page}>
        {/* {config.image && image && (
          <View fixed style={s.imageWrap}>
            <Image style={s.image} src={image} />
          </View>
        )} */}

        {/* <View fixed style={getClass("imageWrap")}>
          <View style={getClass("seperator col8 absolute")} />
        </View> */}

        <View>
          <View style={getClass("row")}>
            <View style={getClass("w66")}>
              <Text style={getClass("h1 mb_1 uppercase")}>{name}</Text>
              <Text style={getClass("h2 jobTitle")}>{jobTitle}</Text>

              <View style={getClass("portfolio h2 row")}>
                <View style={getClass("portfolioDeco")} />
                <Text style={getClass("portfolioText")}>
                  My portfolio{" "}
                  <Link src={portfolio} style={getClass("portfolioLink")}>
                    <Text>
                      {removeHttp(portfolio)}
                    </Text>
                  </Link>
                </Text>
              </View>
            </View>
            <View style={getClass("w33")}>
              {/* <Text style={getClass("h1 mb_1")}>{name}</Text> */}
              <Text style={getClass("h2")}>{jobTitle}</Text>
            </View>
          </View>

          <View style={getClass("row")}>
            <View style={getClass("w66 column1")}>
              <View style={getClass("row flexWrap skills")}>
                {skills.map((item, i) => (
                  <Text key={`skill-${i}`} style={getClass("skill")}>
                    {item}
                  </Text>
                ))}
              </View>

              <View style={getClass("row flexWrap experiences")}>
                <Text style={getClass("h3")}>Experiences</Text>
                {experiences.map((item, i) => (
                  <ExpItems
                    key={`exp-${i}`}
                    i={i}
                    getClass={getClass}
                    company={item.company}
                    position={item.position}
                    date={item.date}
                    summary={item.summary}
                    isLast={i === (experiences.length - 1)}
                  />
                ))}
              </View>
            </View>

            <View style={getClass("w33 column2")}>

            <ProjectsItems 
               getClass={getClass}
                title="Projects"
                list={[
                  "B2B platform that will connect global ecommerce.",
                  "Online test conducting application.",
                  "Custom chat assistant developing website."
                ]}
              />

<ProjectsItems 
               getClass={getClass}
                title="Projects"
                list={[
                  "B2B platform that will connect global ecommerce.",
                  "Online test conducting application.",
                  "Custom chat assistant developing website."
                ]}
              />

<ProjectsItems 
               getClass={getClass}
                title="Projects"
                list={[
                  "B2B platform that will connect global ecommerce.",
                  "Online test conducting application.",
                  "Custom chat assistant developing website."
                ]}
              />
             
            </View>
          </View>

          <View style={getClass("")}>

            {/* <View style={getClass("textCenter white border_bottom p10")}>
              <View style={getClass("row jcc mb_1")}>
                <Text style={getClass("strong")}>Email: </Text>
                <Text style={getClass("")}>{email}</Text>
              </View>
              <View style={getClass("row jcc")}>
                <Text style={getClass("strong")}>Location: </Text>
                <Text style={getClass("")}>{address}</Text>
              </View>
            </View> */}
          </View>
          {/* END Header */}

          {/* <View style={getClass("row")}>

            <View style={getClass("col8 columnPadding")}>

              <View>
                <Text style={getClass("h4")}>PROFILE</Text>
                <Text style={getClass("mt_2")}>
                  {bio}
                </Text>
              </View>


              <View style={getClass("mt_4")}>
                <Text style={getClass("h4 uppercase")}>Work Experience</Text>

                <View style={getClass("mt_2")}>
                  {experience.map((item, i) => (
                    <ExpItems
                      key={`exp-${i}`}
                      i={i}
                      getClass={getClass}
                      title={item.company}
                      subtitle={item.position}
                      date={item.date}
                      details={item.details}
                      location={item?.city || "New York"}
                      isLast={i === experience.length}
                    />
                  ))}
                </View>
              </View>


              {
                config.education && <View style={getClass("section pt_2")}>
                  <Text style={getClass("h4 uppercase")}>Education</Text>

                  <View style={getClass("row flexWrap mt_2")}>
                    {education.map((item, i) => (
                      <EduItems
                        key={`edu-${i}`}
                        getClass={getClass}
                        title={item.school}
                        subtitle={item.course}
                        date={item.date}
                        details={item.details}
                        location={item?.city || ""}
                        isLast={i === education.length}
                      />
                    ))}
                  </View>
                </View>
              }

            </View>



            <View style={getClass("col4 columnPadding")}>
              {
                config.skills && <View style={getClass("mb_4")}>
                  <Text style={getClass("h4")}>MY SKILLS</Text>
                  <View style={getClass("column mt_2 font10")}>
                    {
                      skills.map((e, i) => <Text style={getClass("mb_1")} key={i}>{e}</Text>)
                    }
                  </View>
                </View>
              }

              {
                config.languages && <View style={getClass("mb_4")} wrap={false}>
                  <Text style={getClass("h4")}>LANGUAGES</Text>

                  <View style={getClass("column mt_2 font10")}>
                    {
                      languages.map((e, i) => <Text style={getClass("mb_1")} key={i}>{e.language}</Text>)
                    }
                  </View>
                </View>
              }

              {config.links && (<View style={getClass("mb_4")} wrap={false}>
                <Text style={getClass("h4")}>LINKS</Text>

                <View style={getClass("column mt_2 font10")}>
                  <Link
                    style={getClass("linkItem")}
                    src={website}
                  >
                    <Text>{removeHttp(website)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={portfolio}
                  >
                    <Text>{removeHttp(portfolio)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={linkedin}
                  >
                    <Text>{removeHttp(linkedin)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={github}
                  >
                    <Text>{removeHttp(github)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={instagram}
                  >
                    <Text>{removeHttp(instagram)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={twitter}
                  >
                    <Text>{removeHttp(twitter)}</Text>
                  </Link>
                  <Link
                    style={getClass("linkItem")}
                    src={crunchBase}
                  >
                    <Text>{removeHttp(crunchBase)}</Text>
                  </Link>
                </View>
              </View>)}


              <View style={getClass("mb_4")}>
                <View style={getClass("qrWrap")}>
                  <Image style={getClass("qr")} src={qr} />
                </View>
              </View>

            </View>
          </View>

         */}
        </View>

        {/* // <View fixed style={getClass("imageWrap")}>
        //   <View style={getClass("pageBorder")} />
        // </View> */}
      </Page>
    </Document>
  );
}

export default ResumeFullStack;

const ExpItems = ({ company, position, date, summary, getClass, isLast }) => {
  return (
    <View style={getClass("column experience pr")} wrap={false}>
      <View style={getClass("experienceDot pa")} />
      {
        !isLast && <View style={getClass("experienceLine pa")} />
      }
      

      <Text style={getClass("h4")}>{company}</Text>
      <Text style={getClass("h5 grey2")}>
        {position}  &bull;  {date}
      </Text>

      {summary.map((item, i) => (
        <View key={`summary-${i}`} style={getClass("row")}>
          <View style={getClass("summaryDot")} />
          <Text key={`summary-${i}`} style={getClass("summary grey3")}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};


const ProjectsItems = ({ title, list, getClass, }) => {
  return (
    <View style={getClass("column project pr")} wrap={false}>
      <View style={getClass("projectDot pa")} />
      <Text style={getClass("h3")}>{title}</Text>
    

      {list.map((item, i) => (
        <View key={`summary-${i}`} style={getClass("row")}>
          <View style={getClass("summaryDot")} />
          <Text key={`summary-${i}`} style={getClass("summary grey3")}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};


const EduItems = ({
  title,
  subtitle,
  location,
  details,
  date,
  getClass,
  isLast,
}) => {
  return (
    <View style={getClass("col6 mb_3 column")} wrap={false}>
      <Text style={getClass("text_secondary small")}>{date}</Text>
      <Text style={getClass("h5 text_secondary mb_1")}>{subtitle}</Text>
      <Text style={getClass("styleItalic")}>{title}</Text>
      <Text style={getClass("styleItalic")}>{location}</Text>
    </View>
  );
};
